package com.navin.fullstack_backend.school.management.system.exception;

public class NewStudentNotFoundException extends RuntimeException{

    public NewStudentNotFoundException(Long id){

        super("Could not found the feeHead with id" + id);
    }

}
