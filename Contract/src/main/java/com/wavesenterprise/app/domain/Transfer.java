package com.wavesenterprise.app.domain;

import java.time.Instant;
import java.util.UUID;

public class Transfer {

    public String sender;
    public String receiver;
    public int value;
    public long endTime;
    public boolean isCompleted = false;
    public String id;


    public Transfer(String sender, String receiver, int value, long timeLeft) {
        this.sender = sender;
        this.receiver = receiver;
        this.value = value;
        this.endTime = timeLeft + Instant.now().getEpochSecond(); // время жизни перевода + время сейчас = конечная в секундах
        this.id = UUID.randomUUID().toString();
    }

    public Transfer() {
    }
}
