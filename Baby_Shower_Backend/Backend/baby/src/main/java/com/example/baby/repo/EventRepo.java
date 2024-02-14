package com.example.baby.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.baby.model.Event;

@Repository
public interface EventRepo extends JpaRepository <Event,Integer> {

}