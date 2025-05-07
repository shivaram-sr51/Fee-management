package com.navin.fullstack_backend.school.management.system.request;

public class LoginRequest {

    public  LoginRequest(){


    }
    public String getUserId() {
        return userId;
    }

    public LoginRequest(String userId, String password) {
        this.userId = userId;
        this.password = password;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    private String userId;
    private String password;
}
