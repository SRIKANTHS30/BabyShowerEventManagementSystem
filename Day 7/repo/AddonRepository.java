package com.example.baby.repo;

import com.example.baby.model.Addon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddonRepository extends JpaRepository<Addon, Integer> {
}
