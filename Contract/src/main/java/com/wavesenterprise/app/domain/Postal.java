package com.wavesenterprise.app.domain;


import com.wavesenterprise.app.api.IContract.*;

public class Postal {
    public String trackingNumber;
    public String sender;
    public String receiver;
    public int timer;
    public float priceOfDelivery;
    public float weight;
    public int declaredValue;
    public float totalValue;
    public String endAddress;
    public String startAddress;
    public PostalType postalType;
    public PostalClass postalClass;
    public Status status;


    public Postal(String trackingNumber, String sender, String receiver, int timer, float priceOfDelivery, float weight, int declaredValue, float totalValue, String endAddress, String startAddress, PostalType postalType, PostalClass postalClass) {
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

    public Postal() {
    }

    public PostalType getPostalType() {
        return postalType;
    }

    public void setPostalType(PostalType postalType) {
        this.postalType = postalType;
    }

    public PostalClass getPostalClass() {
        return postalClass;
    }

    public void setPostalClass(PostalClass postalClass) {
        this.postalClass = postalClass;
    }

    public void setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public void setTimer(int timer) {
        this.timer = timer;
    }

    public void setPriceOfDelivery(float priceOfDelivery) {
        this.priceOfDelivery = priceOfDelivery;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public void setDeclaredValue(int declaredValue) {
        this.declaredValue = declaredValue;
    }

    public void setTotalValue(float totalValue) {
        this.totalValue = totalValue;
    }

    public void setEndAddress(String endAddress) {
        this.endAddress = endAddress;
    }

    public void setStartAddress(String startAddress) {
        this.startAddress = startAddress;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }

    public String getSender() {
        return sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public int getTimer() {
        return timer;
    }

    public float getPriceOfDelivery() {
        return priceOfDelivery;
    }

    public float getWeight() {
        return weight;
    }

    public int getDeclaredValue() {
        return declaredValue;
    }

    public float getTotalValue() {
        return totalValue;
    }

    public String getEndAddress() {
        return endAddress;
    }

    public String getStartAddress() {
        return startAddress;
    }
}
