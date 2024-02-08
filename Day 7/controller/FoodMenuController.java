package com.example.baby.controller;

import com.example.baby.model.FoodMenu;
import com.example.baby.service.FoodMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/foodmenus")
public class FoodMenuController {
    private final FoodMenuService foodMenuService;

    @Autowired
    public FoodMenuController(FoodMenuService foodMenuService) {
        this.foodMenuService = foodMenuService;
    }

    @GetMapping("/getfood")
    public List<FoodMenu> getAllFoodMenus() {
        return foodMenuService.getAllFoodMenus();
    }

    @GetMapping("/{id}")
    public Optional<FoodMenu> getFoodMenuById(@PathVariable int id) {
        return foodMenuService.getFoodMenuById(id);
    }

    @PostMapping("/postfood")
    public FoodMenu saveFoodMenu(@RequestBody FoodMenu foodMenu) {
        return foodMenuService.saveFoodMenu(foodMenu);
    }

    @DeleteMapping("/{id}")
    public void deleteFoodMenu(@PathVariable int id) {
        foodMenuService.deleteFoodMenu(id);
    }
    @PutMapping("/putfoodmenu/{id}")
    public FoodMenu updateFoodMenu(@PathVariable int id, @RequestBody FoodMenu updatedFoodMenu) throws NotFoundException {
        return foodMenuService.updateFoodMenu(id, updatedFoodMenu);
}

}
