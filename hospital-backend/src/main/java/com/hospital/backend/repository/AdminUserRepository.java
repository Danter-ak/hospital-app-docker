package com.hospital.backend.repository;

import com.hospital.backend.model.AdminUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminUserRepository extends MongoRepository<AdminUser, String> {
    Optional<AdminUser> findByUsernameAndPassword(String username, String password);
}