package com.navin.fullstack_backend.school.management.system.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String dateOfBirth;
    private String standard;
    private String address;
    private int fixedFee;
    private int totalFeePaid;

    public String getRegisterNumber() {
        return registerNumber;
    }

    public void setRegisterNumber(String registerNumber) {
        this.registerNumber = registerNumber;
    }

    private String registerNumber;


    //new
    private String fathersName;


    private String guardianName;
    private String placePincode;
    private String district;

    public String getGuardianName() {
        return guardianName;
    }

    public void setGuardianName(String guardianName) {
        this.guardianName = guardianName;
    }

    public String getPlacePincode() {
        return placePincode;
    }

    public void setPlacePincode(String placePincode) {
        this.placePincode = placePincode;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBusPlaceName() {
        return busPlaceName;
    }

    public void setBusPlaceName(String busPlaceName) {
        this.busPlaceName = busPlaceName;
    }

    public String getBusRouteNo() {
        return busRouteNo;
    }

    public void setBusRouteNo(String busRouteNo) {
        this.busRouteNo = busRouteNo;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCaste() {
        return caste;
    }

    public void setCaste(String caste) {
        this.caste = caste;
    }

    public String getCommunity() {
        return community;
    }

    public void setCommunity(String community) {
        this.community = community;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getMotherTongue() {
        return motherTongue;
    }

    public void setMotherTongue(String motherTongue) {
        this.motherTongue = motherTongue;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getHostelStatus() {
        return hostelStatus;
    }

    public void setHostelStatus(String hostelStatus) {
        this.hostelStatus = hostelStatus;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public String getStudiedYear() {
        return studiedYear;
    }

    public void setStudiedYear(String studiedYear) {
        this.studiedYear = studiedYear;
    }

    public String getClassLastStudied() {
        return classLastStudied;
    }

    public void setClassLastStudied(String classLastStudied) {
        this.classLastStudied = classLastStudied;
    }

    public String getClassToBeAdmitted() {
        return classToBeAdmitted;
    }

    public void setClassToBeAdmitted(String classToBeAdmitted) {
        this.classToBeAdmitted = classToBeAdmitted;
    }

    public String getNameOfSchool() {
        return nameOfSchool;
    }

    public void setNameOfSchool(String nameOfSchool) {
        this.nameOfSchool = nameOfSchool;
    }

    public String getParentOccupation() {
        return parentOccupation;
    }

    public void setParentOccupation(String parentOccupation) {
        this.parentOccupation = parentOccupation;
    }

    public String getRemarksOne() {
        return remarksOne;
    }

    public void setRemarksOne(String remarksOne) {
        this.remarksOne = remarksOne;
    }

    public String getRemarksTwo() {
        return remarksTwo;
    }

    public void setRemarksTwo(String remarksTwo) {
        this.remarksTwo = remarksTwo;
    }

    private String phone;
    private String busPlaceName;
    private String busRouteNo;
    private String section;
    private String gender;
    private String caste;
    private String community;
    private String nationality;
    private String religion;
    private String motherTongue;
    private String state;
    private String hostelStatus;
    private String bloodGroup;
    private String studiedYear;
    private String classLastStudied;
    private String classToBeAdmitted;
    private String nameOfSchool;
    private String parentOccupation;
    private String remarksOne;
    private String remarksTwo;








    // Getters and setters for all fields
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getStandard() {
        return standard;
    }

    public void setStandard(String standard) {
        this.standard = standard;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getFixedFee() {
        return fixedFee;
    }

    public void setFixedFee(int fixedFee) {
        this.fixedFee = fixedFee;
    }

    public int getTotalFeePaid() {
        return totalFeePaid;
    }

    public void setTotalFeePaid(int totalFeePaid) {
        this.totalFeePaid = totalFeePaid;
    }


    public String getFathersName() {
        return fathersName;
    }

    public void setFathersName(String fathersName) {
        this.fathersName = fathersName;
    }


}
