package com.example.baby.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String eventName;
    private String applicantName;
    private String applicantEmail;
    private String applicantAddress;
    private String eventDate;
    private String eventTime;
    private int peopleCount;
    
    public Booking() {
        
    }
    public Booking(Long id, String eventName, String applicantName, String applicantEmail, String phoneNumber,
            String applicantAddress, String eventDate, String eventTime, int peopleCount) {
        this.id = id;
        this.eventName = eventName;
        this.applicantName = applicantName;
        this.applicantEmail = applicantEmail;
        this.phoneNumber = phoneNumber;
        this.applicantAddress = applicantAddress;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.peopleCount = peopleCount;
        
    }
    private String phoneNumber;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    @Override
    public String toString() {
        return "Booking [id=" + id + ", eventName=" + eventName + ", applicantName=" + applicantName
                + ", applicantEmail=" + applicantEmail + ", phoneNumber=" + phoneNumber + ", applicantAddress="
                + applicantAddress + ", eventDate=" + eventDate + ", eventTime=" + eventTime + ", peopleCount="
                + peopleCount + "]";
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
    public String getApplicantEmail() {
        return applicantEmail;
    }
    public void setApplicantEmail(String applicantEmail) {
        this.applicantEmail = applicantEmail;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getApplicantAddress() {
        return applicantAddress;
    }
    public void setApplicantAddress(String applicantAddress) {
        this.applicantAddress = applicantAddress;
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
    public int getPeopleCount() {
        return peopleCount;
    }
    public void setPeopleCount(int peopleCount) {
        this.peopleCount = peopleCount;
    }
}