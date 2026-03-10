package com.wavesenterprise.app.domain;

public class User {
    public String wallet;
    public String name;
    public int age;
    public String mail;
    public int balance;

    public User(String wallet, String name, int age, String mail, int balance){
        this.wallet = wallet;
        this.name = name;
        this.age = age;
        this.mail = mail;
        this.balance = balance;
    }

    public User(){}

    public void setWallet(String wallet) {
        this.wallet = wallet;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    public String getWallet() {
        return wallet;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getMail() {
        return mail;
    }

    public int getBalance() {
        return balance;
    }
}
