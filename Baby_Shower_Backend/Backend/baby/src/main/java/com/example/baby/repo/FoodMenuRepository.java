package com.example.baby.repo;

import com.example.baby.model.FoodMenu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodMenuRepository extends JpaRepository<FoodMenu, Integer> {
}
