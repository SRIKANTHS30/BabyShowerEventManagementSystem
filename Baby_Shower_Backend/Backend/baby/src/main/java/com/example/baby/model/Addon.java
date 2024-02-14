package com.example.baby.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Addon {
    @Id
    @GeneratedValue
    @Column(name = "add_id")
    private int addonid;
    private String addonName;
    private String addonDescription;
    private Long price;
    public int getAddonid() {
        return addonid;
    }
    public void setAddonid(int addonid) {
        this.addonid = addonid;
    }
    public String getAddonName() {
        return addonName;
    }
    public void setAddonName(String addonName) {
        this.addonName = addonName;
    }
    public String getAddonDescription() {
        return addonDescription;
    }
    public void setAddonDescription(String addonDescription) {
        this.addonDescription = addonDescription;
    }
    public Long getPrice() {
        return price;
    }
    public void setPrice(Long price) {
        this.price = price;
    }
    @Override
    public String toString() {
        return "Addon [addonid=" + addonid + ", addonName=" + addonName + ", addonDescription=" + addonDescription
                + ", price=" + price + "]";
    }

}
