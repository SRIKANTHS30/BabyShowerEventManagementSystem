package com.example.baby.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.baby.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
