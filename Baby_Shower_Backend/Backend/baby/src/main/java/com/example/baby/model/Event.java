package com.example.baby.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Event {
    @Id
    private int eventId;
    private String eventName;
    private String applicantName;
    private String applicantAddress;
    private String applicantMobile;
    private String applicantEmail;
    private String eventDate;
    private String eventTime;
    private int eventMenuId;
    private String eventCost;
    @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
    @JoinColumn(name="add_id")
    private Addon add;
    public Addon getAdd() {
        return add;
    }
    public void setAdd(Addon add) {
        this.add = add;
    }
    public int getEventId() {
        return eventId;
    }
    public void setEventId(int eventId) {
        this.eventId = eventId;
    }
    public String getEventName() {
        return eventName;
    }
    public void setEventName(String eventName) {
        this.eventName = eventName;
    }
    public String getApplicantName() {
        return applicantName;
    }
    public void setApplicantName(String applicantName) {
        this.applicantName = applicantName;
    }
    public String getApplicantAddress() {
        return applicantAddress;
    }
    public void setApplicantAddress(String applicantAddress) {
        this.applicantAddress = applicantAddress;
    }
    public String getApplicantMobile() {
        return applicantMobile;
    }
    public void setApplicantMobile(String applicantMobile) {
        this.applicantMobile = applicantMobile;
    }
    public String getApplicantEmail() {
        return applicantEmail;
    }
    public void setApplicantEmail(String applicantEmail) {
        this.applicantEmail = applicantEmail;
    }
    public String getEventDate() {
        return eventDate;
    }
    public void setEventDate(String eventDate) {
        this.eventDate = eventDate;
    }
    public String getEventTime() {
        return eventTime;
    }
    public void setEventTime(String eventTime) {
        this.eventTime = eventTime;
    }
    public int getEventMenuId() {
        return eventMenuId;
    }
    public void setEventMenuId(int eventMenuId) {
        this.eventMenuId = eventMenuId;
    }
    
    public String getEventCost() {
        return eventCost;
    }
    public void setEventCost(String eventCost) {
        this.eventCost = eventCost;
    }
    

}