package com.navin.fullstack_backend.school.management.system.repository;

import com.navin.fullstack_backend.school.management.system.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepo extends JpaRepository<Users, String> {



}
