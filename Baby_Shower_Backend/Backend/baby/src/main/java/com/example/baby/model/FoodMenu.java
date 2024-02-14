package com.example.baby.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class FoodMenu {
@Id
 @GeneratedValue
private int foodmenuid;
private String foodmenuType;
private String foodmenuName;
private String description;
private Long price;
@Override
public String toString() {
    return "FoodMenu [foodmenuid=" + foodmenuid + ", foodmenuType=" + foodmenuType + ", foodmenuName=" + foodmenuName
            + ", description=" + description + ", price=" + price + "]";
}
public int getFoodmenuid() {
    return foodmenuid;
}
public void setFoodmenuid(int foodmenuid) {
    this.foodmenuid = foodmenuid;
}
public String getFoodmenuType() {
    return foodmenuType;
}
public void setFoodmenuType(String foodmenuType) {
    this.foodmenuType = foodmenuType;
}
public String getFoodmenuName() {
    return foodmenuName;
}
public void setFoodmenuName(String foodmenuName) {
    this.foodmenuName = foodmenuName;
}
public String getDescription() {
    return description;
}
public void setDescription(String description) {
    this.description = description;
}
public Long getPrice() {
    return price;
}
public void setPrice(Long price) {
    this.price = price;
}
}
