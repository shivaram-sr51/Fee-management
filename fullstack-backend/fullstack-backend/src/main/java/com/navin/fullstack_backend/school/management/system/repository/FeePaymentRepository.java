package com.navin.fullstack_backend.school.management.system.repository;
import com.navin.fullstack_backend.school.management.system.model.FeePayment;
import org.springframework.data.jpa.repository.JpaRepository;


public interface FeePaymentRepository extends JpaRepository<FeePayment, Long> {
}
