package com.navin.fullstack_backend.school.management.system.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AdminUsers {

    public AdminUsers(){

    }

    @Id
    private String email;


    private String name;
    private String password;

    public String getEmail() {
        return email;
    }

    public AdminUsers(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
