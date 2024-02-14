package com.example.baby.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Theme {
    @Id
    @GeneratedValue
    private int id;
    private String themeName;
    private String themeURL;
    private String description;
    private Long cost;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getThemeName() {
        return themeName;
    }
    public void setThemeName(String themeName) {
        this.themeName = themeName;
    }
    public String getThemeURL() {
        return themeURL;
    }
    public void setThemeURL(String themeURL) {
        this.themeURL = themeURL;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Long getCost() {
        return cost;
    }
    public void setCost(Long cost) {
        this.cost = cost;
    }
    @Override
    public String toString() {
        return "Theme [id=" + id + ", themeName=" + themeName + ", themeURL=" + themeURL + ", description="
                + description + ", cost=" + cost + "]";
    }
    




    
}
