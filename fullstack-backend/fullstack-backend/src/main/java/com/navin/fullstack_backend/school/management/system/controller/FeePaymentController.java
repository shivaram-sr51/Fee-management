package com.navin.fullstack_backend.school.management.system.controller;

import com.navin.fullstack_backend.school.management.system.model.FeePayment;
import com.navin.fullstack_backend.school.management.system.service.FeePaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fee-payments")
@CrossOrigin("http://localhost:3000")
public class FeePaymentController {

    @Autowired
    private FeePaymentService feePaymentService;

    @GetMapping
    public List<FeePayment> getAllFeePayments() {
        return feePaymentService.getAllFeePayments();
    }

    @GetMapping("/{id}")
    public FeePayment getFeePaymentById(@PathVariable Long id) {
        return feePaymentService.getFeePaymentById(id);
    }

    @PostMapping
    public FeePayment saveFeePayment(@RequestBody FeePayment feePayment) {
        System.out.println("Received feePayment: " + feePayment.toString());
        return feePaymentService.saveFeePayment(feePayment);
    }


    @DeleteMapping("/{id}")
    public void deleteFeePayment(@PathVariable Long id) {
        feePaymentService.deleteFeePayment(id);
    }
}
