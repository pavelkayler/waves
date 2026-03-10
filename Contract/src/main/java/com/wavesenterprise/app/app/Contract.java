package com.wavesenterprise.app.app;
import com.wavesenterprise.app.domain.User;
import com.wavesenterprise.sdk.contract.api.annotation.ContractAction;
import com.wavesenterprise.sdk.contract.api.annotation.ContractHandler;
import com.wavesenterprise.sdk.contract.api.annotation.ContractInit;
import com.wavesenterprise.sdk.contract.api.domain.ContractCall;
import com.wavesenterprise.sdk.contract.api.state.ContractState;
import com.wavesenterprise.sdk.contract.api.state.TypeReference;
import com.wavesenterprise.sdk.contract.api.state.mapping.Mapping;
import static com.wavesenterprise.app.api.IContract.keys.USER_MAPPING;

@ContractHandler
public class Contract {

    private final ContractCall call;
    private final ContractState state;

    private final Mapping<User> users;

    public Contract( ContractState state, ContractCall call) {
        this.call = call;
        this.state = state;
        this.users = state.getMapping(new TypeReference<User>() {}, USER_MAPPING);
    }

    public void createUser(String wallet, String name, int age, String mail, int balance){
        User user = new User(wallet, name, age, mail, balance);
        users.put(wallet, user);
    }

    public User getUserOrThrow(String wallet){
        return users.tryGet(wallet)
                .orElseThrow(()-> new IllegalStateException("пользователь не найден"));
    }

    @ContractInit
    public void init() {
        createUser("3NwDX3Z3XJjrstKbBuBANBtvreYuseByHYA", "Jack", 30, "mail@mail.com", 1000);
    }

    @ContractAction
    public void registration(String name, int age, String mail) {
        String wallet = call.getCaller();
        createUser(wallet, name, age, mail, 0 );
    }

    @ContractAction
    public void setPersonInfo(String name, String mail){
        String wallet = call.getCaller();
        User Altant = getUserOrThrow(wallet);
        Altant.setName(name);
        Altant.setMail(mail);
        users.put(wallet, Altant);
    }



}
