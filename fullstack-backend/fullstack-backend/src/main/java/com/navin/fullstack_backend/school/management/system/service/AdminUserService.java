package com.navin.fullstack_backend.school.management.system.service;

import com.navin.fullstack_backend.school.management.system.entity.AdminUsers;
import com.navin.fullstack_backend.school.management.system.entity.Users;
import com.navin.fullstack_backend.school.management.system.repository.AdminUserRepo;
import com.navin.fullstack_backend.school.management.system.repository.UsersRepo;
import com.navin.fullstack_backend.school.management.system.request.AdminLoginRequest;
import com.navin.fullstack_backend.school.management.system.request.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class AdminUserService {

    @Autowired
    AdminUserRepo adminUserRepo;

    public AdminUsers addUser(AdminUsers adminUsers ){

        return adminUserRepo.save(adminUsers);


    }

    public  Boolean AdminLoginUser(AdminLoginRequest adminLoginRequest){

        Optional<AdminUsers> adminUsers = adminUserRepo.findById(adminLoginRequest.getUserId());


        if (adminUsers == null){

            return  false;
        }

        AdminUsers adminUsers1 = adminUsers.get();

        if(!adminUsers1.getPassword().equals((adminLoginRequest.getPassword()))){

            return  false;
        }

        return true;


    }



}
