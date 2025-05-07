package com.navin.fullstack_backend.school.management.system.service;

import com.navin.fullstack_backend.school.management.system.model.FeeHead;
import com.navin.fullstack_backend.school.management.system.repository.FeeHeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeeHeadService {

    @Autowired
    private FeeHeadRepository feeHeadRepository;

    public List<FeeHead> getAllFeeHeads(){

        return feeHeadRepository.findAll();

    }

    public  FeeHead createFeeHead(FeeHead feeHead){

        return feeHeadRepository.save(feeHead);
    }

    public List<FeeHead> createFeeHeadsBatch(List<FeeHead> feeHeads) {
        return feeHeadRepository.saveAll(feeHeads);
    }
}
