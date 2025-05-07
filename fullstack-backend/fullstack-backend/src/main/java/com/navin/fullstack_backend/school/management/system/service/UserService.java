package com.navin.fullstack_backend.school.management.system.service;


import com.navin.fullstack_backend.school.management.system.entity.Users;
import com.navin.fullstack_backend.school.management.system.repository.UsersRepo;
import com.navin.fullstack_backend.school.management.system.request.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UsersRepo userRepo;
    public Users addUser(Users user ){

        return userRepo.save(user);


    }

    public  Boolean loginUser(LoginRequest loginRequest){

        Optional<Users> user = userRepo.findById(loginRequest.getUserId());

        if (user == null){

            return  false;
        }

        Users user1 = user.get();

        if(!user1.getPassword().equals((loginRequest.getPassword()))){

            return  false;
        }

        return true;


    }
}
