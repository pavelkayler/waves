package com.wavesenterprise.app.app;

import com.wavesenterprise.app.api.IContract.*;
import com.wavesenterprise.app.domain.Postal;
import com.wavesenterprise.app.domain.Transfer;
import com.wavesenterprise.app.domain.User;
import com.wavesenterprise.sdk.contract.api.annotation.ContractAction;
import com.wavesenterprise.sdk.contract.api.annotation.ContractHandler;
import com.wavesenterprise.sdk.contract.api.annotation.ContractInit;
import com.wavesenterprise.sdk.contract.api.domain.ContractCall;
import com.wavesenterprise.sdk.contract.api.state.ContractState;
import com.wavesenterprise.sdk.contract.api.state.TypeReference;
import com.wavesenterprise.sdk.contract.api.state.mapping.Mapping;

import static com.wavesenterprise.app.api.IContract.keys.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

@ContractHandler
public class Contract {

    private final ContractCall call;
    private final ContractState state;

    private final Mapping<User> users;
    private final Mapping<Postal> postals;
    private final Mapping<Transfer> transfers;

    private final int DAY_LENGHT = 5;

    public Contract(ContractState state, ContractCall call) {
        this.call = call;
        this.state = state;
        this.users = state.getMapping(new TypeReference<User>() {
        }, USER_MAPPING);
        this.postals = state.getMapping(new TypeReference<Postal>() {
        }, POSTAL_MAPPING);
        this.transfers = state.getMapping(new TypeReference<Transfer>() {
        }, TRANSFER_MAPPING);
    }

    public void createUser(String wallet, String name, float balance, Roles Role, String homeAddress, String jobPlace, String identifier) {
        User user = new User(wallet, name, balance, Role, homeAddress, jobPlace, identifier);

        users.put(wallet, user);
    }

    @ContractInit
    public void init() {
        createUser("3Nd1rdeUowjPqrbVwUmEuGd5tMUaxUhbsi2", "Семенов Семен Семенович", 50, Roles.Admin, null, null, null);
        createUser("3Np8WpZnjaHwaQ1HjuYqF2jhy1tNqjNHvjS", "Петров Петр Петрович", 50, Roles.PostalWorker, "Ростов-на-Дону", "Центральный ПО г. Ростова-на-Дону", "RR344000");
        createUser("3NwDX3Z3XJjrstKbBuBANBtvreYuseByHYA", "Антонов Антон Антонович", 30, Roles.PostalWorker, "Таганрог", "Центральный ПО г. Таганрога", "RR347900");
        createUser("3Nx1y4mjhDC8W4pje6mY4FhDeVhFJ2KxJ5K", "Юрьев Юрий Юрьевич", 30, Roles.User, null, null, null);
    }

    //USER

    //	самостоятельная регистрация в системе;
    @ContractAction
    public void registration(String name, String homeAddress) {
        String wallet = call.getCaller();
        createUser(wallet, name, 0, Roles.User, homeAddress, null, null);
    }

    //	изменение своих персональных данных (фамилии и адреса).
    @ContractAction
    public void changePersonalData(String name, String homeAddress) {
        String wallet = call.getCaller();
        User CustomUser = users.get(wallet);
        CustomUser.name = name;
        CustomUser.homeAddress = homeAddress;

        users.put(wallet, CustomUser);
    }

    //ADMIN
    //	добавление / удаление сотрудников почтовых отделений в системе (из пользователей);
    @ContractAction
    public void addOrRemovePostalWorker(String wallet, boolean add, String jobPlace, String identifier) {
        String callerAddress = call.getCaller(); //админ
        User user = users.get(wallet);
        User caller = users.get(callerAddress);
        if (caller.role == Roles.Admin) {
            if (add) {
                user.role = Roles.PostalWorker;
                user.jobPlace = jobPlace;
                user.identifier = identifier;
            } else {
                user.role = Roles.User;
                user.jobPlace = null;
                user.identifier = null;
            }
        }

        users.put(wallet, user);
    }

    // изменение идентификатора отделения для сотрудника почтового отделения
    @ContractAction
    public void changeIdentifier(String wallet, String identifier) {
        User user = users.get(wallet);
        String callerAddress = call.getCaller();
        User caller = users.get(callerAddress);
        if (caller.role == Roles.Admin && user.role == Roles.PostalWorker) {
            user.identifier = identifier;
        }

        users.put(wallet, user);
    }

    //POSTAL_WORKER
    //	добавление информации об отправлении в систему;
    int dayCounter = 0;

    @ContractAction
    public void SendPostal(
            int officeIndex,
            String receiver,
            int weight,
            int declaredValue,
            int postalType,
            int postalClass,
            String startAddress, // соберем адрес на фронте
            String endAddress    // соберем адрес на фронте
    ) throws Throwable {
        LocalDate today = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("ddMMyyyy");
        String formattedDate = today.format(formatter);

        String trackingNumber = "RR" + formattedDate + dayCounter + officeIndex;
        if (weight > 10) throw new Throwable("Weight is not allowed");
        int timer = 15 * DAY_LENGHT;
        float priceOfDelivery = 0.1F;

        PostalType psTp;
        psTp = postalType == 0 ? PostalType.Letter : postalType == 1 ? PostalType.Banderole : PostalType.Sending;
        PostalClass psCl;
        psCl = postalClass == 0 ? PostalClass.First : postalType == 1 ? PostalClass.Second : PostalClass.Third;

        if (postalClass == 1) {
            timer = 5 * DAY_LENGHT;
            priceOfDelivery = 0.5F;

        } else if (postalClass == 2) {
            timer = 10 * DAY_LENGHT;
            priceOfDelivery = 0.3F;
        }

        float totalValue = priceOfDelivery * weight + declaredValue * 0.1F;
        Postal newPostal = new Postal(
                trackingNumber,
                call.getCaller(),
                receiver,
                timer,
                priceOfDelivery,
                weight,
                declaredValue,
                totalValue,
                endAddress,
                startAddress,
                psTp,
                psCl
        );

        User whoSending = users.get(call.getCaller());
        if (whoSending.balance >= totalValue) {
            whoSending.balance -= totalValue;
            newPostal.status = Status.Confirmed;
            dayCounter++;

            users.put(whoSending.wallet, whoSending);
            postals.put(trackingNumber, newPostal);
        }

    }

    @ContractAction
    public void ReceivePostal(String trackingNumber) {
        Postal postal = postals.get(trackingNumber);
        if (postal.receiver.equals(call.getCaller()) && postal.status == Status.Confirmed) {
            postal.status = Status.Received;

            postals.put(trackingNumber, postal);
        }
    }


    //	отказ от получения почтовых отправлений;
    @ContractAction
    public void DeclinePostal(String trackingNumber) {
        Postal postal = postals.get(trackingNumber);
        if (postal.receiver.equals(call.getCaller()) && postal.status == Status.Confirmed) {
            postal.status = Status.Declined;
            postals.put(trackingNumber, postal);
        }

    }


    /// ////////////////////////////переводы///////////////////////////////
    @ContractAction
    public void createMoneyTransfer(String receiver, int value, int timeLeft) {
        Transfer transfer = new Transfer(call.getCaller(), receiver, value, timeLeft); // timeleft это сколько секунд перевод живет
        User sender = users.get(transfer.sender);
        if (sender.balance >= transfer.value) {
            sender.balance -= value;

            transfers.put(transfer.id, transfer);
            users.put(sender.wallet, sender);
        }
    }

    @ContractAction
    public void acceptTransfer(String id) {
        Transfer transfer = transfers.get(id);
        if (!transfer.isCompleted) {
            User receiver = users.get(transfer.receiver);
            receiver.balance += transfer.value;
            transfer.isCompleted = true;

            transfers.put(transfer.id, transfer);
            users.put(receiver.wallet, receiver);
        }
    }

    @ContractAction
    public void cancelTransfer(String id) {
        Transfer transfer = transfers.get(id);
        if (!transfer.isCompleted) {
            User sender = users.get(transfer.sender);
            sender.balance += transfer.value;
            transfer.isCompleted = true;

            transfers.put(transfer.id, transfer);
            users.put(sender.wallet, sender);
        }
    }
}
