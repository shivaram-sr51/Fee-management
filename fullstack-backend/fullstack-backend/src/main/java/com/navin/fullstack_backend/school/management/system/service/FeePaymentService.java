package com.navin.fullstack_backend.school.management.system.service;

import com.navin.fullstack_backend.school.management.system.model.FeePayment;
import com.navin.fullstack_backend.school.management.system.repository.FeePaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeePaymentService {

    @Autowired
    private FeePaymentRepository feePaymentRepository;

    public List<FeePayment> getAllFeePayments() {
        return feePaymentRepository.findAll();
    }

    public FeePayment getFeePaymentById(Long id) {
        return feePaymentRepository.findById(id).orElse(null);
    }

    public FeePayment saveFeePayment(FeePayment feePayment) {
        return feePaymentRepository.save(feePayment);
    }

    public void deleteFeePayment(Long id) {
        feePaymentRepository.deleteById(id);
    }
}
