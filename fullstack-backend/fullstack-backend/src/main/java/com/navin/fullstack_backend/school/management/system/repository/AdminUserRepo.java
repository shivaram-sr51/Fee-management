package com.navin.fullstack_backend.school.management.system.repository;

import com.navin.fullstack_backend.school.management.system.entity.AdminUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminUserRepo extends JpaRepository<AdminUsers, String> {
}
