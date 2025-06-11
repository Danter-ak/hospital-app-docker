package com.hospital.backend.controller;

import com.hospital.backend.model.LoginRequestDTO;
import com.hospital.backend.model.LoginResponse;
import com.hospital.backend.repository.AdminUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


    @RestController
    @RequestMapping("/api/auth")
    @CrossOrigin(origins = "*")
    public class AuthController {

        @Autowired
        private AdminUserRepository adminUserRepository;

        @PostMapping("/login")
        public LoginResponse login(@RequestBody LoginRequestDTO request) {
            // Check hardcoded admin/admin
            if ("admin".equals(request.getUsername()) && "admin".equals(request.getPassword())) {
                return new LoginResponse(true, "Hardcoded login successful");
            }

            // Check in DB
            return adminUserRepository.findByUsernameAndPassword(request.getUsername(), request.getPassword())
                    .map(user -> new LoginResponse(true, "Login successful"))
                    .orElse(new LoginResponse(false, "Invalid credentials"));
        }
    }

