package com.navin.fullstack_backend.school.management.system.repository;

import com.navin.fullstack_backend.school.management.system.model.StudentHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentHistoryRepository extends JpaRepository<StudentHistory, Long> {
}