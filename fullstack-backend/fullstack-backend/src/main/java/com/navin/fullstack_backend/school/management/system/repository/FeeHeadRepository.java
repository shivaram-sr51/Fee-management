package com.navin.fullstack_backend.school.management.system.repository;

import com.navin.fullstack_backend.school.management.system.model.FeeHead;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeeHeadRepository extends JpaRepository<FeeHead, Long> {
    List<FeeHead> findByStandard(String standard);
}