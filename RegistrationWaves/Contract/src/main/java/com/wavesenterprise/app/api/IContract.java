package com.wavesenterprise.app.api;

public interface IContract {

    class keys {
        public static final String USER_MAPPING = "USER_MAPPING";
        public static final String POSTAL_MAPPING = "POSTAL_MAPPING";
        public static final String TRANSFER_MAPPING = "TRANSFER_MAPPING";
    }

    enum PostalType {
        Letter,
        Banderole,
        Sending
    }

    enum PostalClass {
        First,
        Second,
        Third
    }

    enum Status {
        Declined,
        Confirmed,
        Sent,
        Received
    }

    enum Roles {
        User,
        PostalWorker,
        Admin
    }
}
