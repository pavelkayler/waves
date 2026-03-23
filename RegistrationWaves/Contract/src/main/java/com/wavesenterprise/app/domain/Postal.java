package com.wavesenterprise.app.domain;


import com.wavesenterprise.app.api.IContract.*;

public class Postal {
    public String trackingNumber;
    public String sender;
    public String receiver;
    public int timer;
    public float priceOfDelivery;
    public int weight;
    public int declaredValue;
    public float totalValue;
    public String endAddress;
    public String startAddress;
    public PostalType postalType;
    public PostalClass postalClass;
    public Status status;


    public Postal(String trackingNumber, String sender, String receiver, int timer, float priceOfDelivery, int weight, int declaredValue, float totalValue, String endAddress, String startAddress, PostalType postalType, PostalClass postalClass) {
        this.trackingNumber = trackingNumber;
        this.sender = sender;
        this.receiver = receiver;
        this.timer = timer;
        this.priceOfDelivery = priceOfDelivery;
        this.weight = weight;
        this.declaredValue = declaredValue;
        this.totalValue = totalValue;
        this.endAddress = endAddress;
        this.startAddress = startAddress;
        this.postalType = postalType;
        this.postalClass = postalClass;
    }
}
