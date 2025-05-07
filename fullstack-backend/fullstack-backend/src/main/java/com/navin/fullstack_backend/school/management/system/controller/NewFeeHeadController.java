package com.navin.fullstack_backend.school.management.system.controller;


import com.navin.fullstack_backend.school.management.system.exception.NewFeeHeadNotFoundException;
import com.navin.fullstack_backend.school.management.system.model.FeeHead;
import com.navin.fullstack_backend.school.management.system.repository.FeeHeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class NewFeeHeadController {

    @Autowired
    private FeeHeadRepository feeHeadRepository;

    @PostMapping("/NewFeeHead")
    FeeHead  newFeeHead(@RequestBody FeeHead  newFeeHead){

        return feeHeadRepository.save(newFeeHead);

    }

    @GetMapping("/NewFeeHeadss")
    List<FeeHead>getFeeHead(){

        return feeHeadRepository.findAll();
    }

    @GetMapping("/NewFeeHead/{id}")
    FeeHead getFeeHead(@PathVariable Long id){

        return feeHeadRepository.findById(id)
                .orElseThrow(()->new NewFeeHeadNotFoundException(id));


    }

    @PutMapping("/NewFeeHead/{id}")
    FeeHead updateFeeHead(@RequestBody FeeHead newFeeHead, @PathVariable Long id){


        return feeHeadRepository.findById(id)
                .map(feeHead -> {


                    feeHead.setName(newFeeHead.getName());
                    feeHead.setAmount(newFeeHead.getAmount());
                    feeHead.setStandard(newFeeHead.getStandard());
                    return feeHeadRepository.save(feeHead);

                }).orElseThrow(()->new NewFeeHeadNotFoundException(id) );



    }

    @DeleteMapping("/NewFeeHead/{id}")
    String deleteFeeHead(@PathVariable Long id){

        if (!feeHeadRepository.existsById(id)){

            throw new NewFeeHeadNotFoundException(id);
        }
        feeHeadRepository.deleteById(id);
        return "FeeHead with id"+id+"has been deleted success.";

    }










}
