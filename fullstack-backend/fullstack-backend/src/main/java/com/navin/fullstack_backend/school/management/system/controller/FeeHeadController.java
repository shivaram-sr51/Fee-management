package com.navin.fullstack_backend.school.management.system.controller;


import com.navin.fullstack_backend.school.management.system.model.FeeHead;
import com.navin.fullstack_backend.school.management.system.repository.FeeHeadRepository;
import com.navin.fullstack_backend.school.management.system.service.FeeHeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feeheads")
@CrossOrigin(origins = "http://localhost:3000") // Enable CORS
public class FeeHeadController {
    @Autowired
    private FeeHeadRepository feeHeadRepository;

    @GetMapping
    public List<FeeHead> getAllFeeHeads() {
        return feeHeadRepository.findAll();
    }

    @GetMapping("/{standard}")
    public List<FeeHead> getFeeHeadsByStandard(@PathVariable String standard) {
        return feeHeadRepository.findByStandard(standard);
    }

    @PostMapping
    public FeeHead createFeeHead(@RequestBody FeeHead feeHead) {
        return feeHeadRepository.save(feeHead);
    }


    @PostMapping("/batch")
    public List<FeeHead> createFeeHeadsBatch(@RequestBody List<FeeHead> feeHeads) {
        return feeHeadRepository.saveAll(feeHeads);
    }

}





