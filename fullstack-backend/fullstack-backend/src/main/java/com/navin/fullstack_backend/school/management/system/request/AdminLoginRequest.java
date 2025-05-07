package com.navin.fullstack_backend.school.management.system.request;

public class AdminLoginRequest {

    public  AdminLoginRequest(){


    }
    public String getUserId() {
        return userId;
    }

    public AdminLoginRequest(String userId, String password) {
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
