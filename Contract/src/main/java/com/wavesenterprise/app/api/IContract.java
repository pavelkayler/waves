package com.wavesenterprise.app.api;

public interface IContract {

    public class keys {
        public static final String USER_MAPPING = "USER_MAPPING";
        public static final String POSTAL_MAPPING = "POSTAL_MAPPING";
        public static final String TRANSFER_MAPPING = "TRANSFER_MAPPING";
    }

    public enum PostalType {
        Letter,
        Banderole,
        Sending
    }

    public enum PostalClass {
        First,
        Second,
        Third
    }

    public enum Status {
        Declined,
        Confirmed,
        Sent,
        Received
    }

    public enum Roles {
        User,
        PostalWorker,
        Admin
    }

    public class RoleAttributes {
        public String name;
        public String homeAddress;
        public int balance;
        public Roles role;
        public String workerCode;
    }



}
