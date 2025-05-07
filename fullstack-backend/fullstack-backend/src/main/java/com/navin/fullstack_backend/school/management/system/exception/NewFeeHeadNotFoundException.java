package com.navin.fullstack_backend.school.management.system.exception;

public class NewFeeHeadNotFoundException extends RuntimeException {

    public NewFeeHeadNotFoundException(Long id){

        super("Could not found the feeHead with id" + id);
    }
}
