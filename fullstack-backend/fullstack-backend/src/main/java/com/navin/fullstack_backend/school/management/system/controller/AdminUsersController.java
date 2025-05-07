package com.navin.fullstack_backend.school.management.system.controller;

import com.navin.fullstack_backend.school.management.system.entity.AdminUsers;
import com.navin.fullstack_backend.school.management.system.entity.Users;
import com.navin.fullstack_backend.school.management.system.request.AdminLoginRequest;
import com.navin.fullstack_backend.school.management.system.request.LoginRequest;
import com.navin.fullstack_backend.school.management.system.service.AdminUserService;
import com.navin.fullstack_backend.school.management.system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AdminUsersController {

    @Autowired
    AdminUserService adminUserService;

    @PostMapping("/addAdminUser")
    @CrossOrigin(origins = "http://localhost:3000")
    public AdminUsers addUser(@RequestBody AdminUsers adminUsers){

        return adminUserService.addUser(adminUsers);

    }

    @PostMapping("/loginAdminUser")
    @CrossOrigin(origins = "http://localhost:3000")
    public  Boolean loginUser(@RequestBody AdminLoginRequest adminLoginRequest){

        return adminUserService.AdminLoginUser(adminLoginRequest);
    }







}
