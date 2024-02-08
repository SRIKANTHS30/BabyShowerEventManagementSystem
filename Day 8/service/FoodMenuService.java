package com.example.baby.service;

import com.example.baby.model.FoodMenu;
import com.example.baby.repo.FoodMenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodMenuService {
    private final FoodMenuRepository foodMenuRepository;

    @Autowired
    public FoodMenuService(FoodMenuRepository foodMenuRepository) {
        this.foodMenuRepository = foodMenuRepository;
    }

    public List<FoodMenu> getAllFoodMenus() {
        return foodMenuRepository.findAll();
    }

    public Optional<FoodMenu> getFoodMenuById(int foodMenuId) {
        return foodMenuRepository.findById(foodMenuId);
    }

    public FoodMenu saveFoodMenu(FoodMenu foodMenu) {
        return foodMenuRepository.save(foodMenu);
    }

    public void deleteFoodMenu(int foodMenuId) {
        foodMenuRepository.deleteById(foodMenuId);
    }
    public FoodMenu updateFoodMenu(int id, FoodMenu updatedFoodMenu) {
        Optional<FoodMenu> existingFoodMenuOptional = foodMenuRepository.findById(id);
        if (existingFoodMenuOptional.isPresent()) {
            FoodMenu existingFoodMenu = existingFoodMenuOptional.get();
            existingFoodMenu.setFoodmenuType(updatedFoodMenu.getFoodmenuType());
            existingFoodMenu.setFoodmenuName(updatedFoodMenu.getFoodmenuName());
            existingFoodMenu.setPrice(updatedFoodMenu.getPrice());
            return foodMenuRepository.save(existingFoodMenu);
        }
        return null;
    }
    
}
