package com.navin.fullstack_backend.school.management.system.controller;


import com.navin.fullstack_backend.school.management.system.entity.Users;
import com.navin.fullstack_backend.school.management.system.request.LoginRequest;
import com.navin.fullstack_backend.school.management.system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UsersController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    @CrossOrigin(origins = "http://localhost:3000")
    public Users addUser(@RequestBody Users user){

        return userService.addUser(user);

    }

    @PostMapping("/loginUser")
    @CrossOrigin(origins = "http://localhost:3000")
    public  Boolean loginUser(@RequestBody LoginRequest loginRequest){

        return userService.loginUser(loginRequest);
    }







}
