package com.wavesenterprise.app.domain;

import com.wavesenterprise.app.api.IContract.Roles;

public class User {
    public String wallet;
    public String name;
    public float balance;
    public Roles role;
    public String homeAddress;
    public String jobPlace;
    public String identifier;

    public User(String wallet, String name, float balance, Roles role, String homeAddress, String jobPlace, String identifier) {
        this.wallet = wallet;
        this.name = name;
        this.balance = balance;
        this.role = role;
        this.homeAddress = homeAddress;
        this.jobPlace = jobPlace;
        this.identifier = identifier;
    }

    public User() {
    }
}
