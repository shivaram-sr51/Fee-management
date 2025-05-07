package com.navin.fullstack_backend.school.management.system.controller;

import com.navin.fullstack_backend.school.management.system.exception.NewFeeHeadNotFoundException;
import com.navin.fullstack_backend.school.management.system.exception.NewStudentNotFoundException;
import com.navin.fullstack_backend.school.management.system.model.FeeHead;
import com.navin.fullstack_backend.school.management.system.model.Student;
import com.navin.fullstack_backend.school.management.system.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class NewStudentController {

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/NewStudent")
    Student newStudent(@RequestBody Student newStudent ){

        return studentRepository.save(newStudent);

    }

    @GetMapping("/NewStudentss")
    List<Student> getNewStudent(){

        return studentRepository.findAll();
    }


    @GetMapping("/NewStudent/{id}")
    Student getNewStudent(@PathVariable Long id){

        return studentRepository.findById(id)
                .orElseThrow(()->new NewStudentNotFoundException(id));


    }

    @PutMapping("/NewStudent/{id}")
    Student updateStudent(@RequestBody Student newStudent, @PathVariable Long id){


        return studentRepository.findById(id)
                .map(student -> {




                    // Copying values from newStudent to student

                    student.setName(newStudent.getName());
                    student.setDateOfBirth(newStudent.getDateOfBirth());
                    student.setStandard(newStudent.getStandard());
                    student.setAddress(newStudent.getAddress());
                    student.setFixedFee(newStudent.getFixedFee());
                    student.setTotalFeePaid(newStudent.getTotalFeePaid());
                    student.setFathersName(newStudent.getFathersName());
                    student.setGuardianName(newStudent.getGuardianName());
                    student.setPhone(newStudent.getPhone());
                    student.setBusPlaceName(newStudent.getBusPlaceName());
                    student.setBusRouteNo(newStudent.getBusRouteNo());
                    student.setSection(newStudent.getSection());
                    student.setGender(newStudent.getGender());
                    student.setCaste(newStudent.getCaste());
                    student.setCommunity(newStudent.getCommunity());
                    student.setNationality(newStudent.getNationality());
                    student.setReligion(newStudent.getReligion());
                    student.setMotherTongue(newStudent.getMotherTongue());
                    student.setState(newStudent.getState());
                    student.setHostelStatus(newStudent.getHostelStatus());
                    student.setBloodGroup(newStudent.getBloodGroup());
                    student.setStudiedYear(newStudent.getStudiedYear());
                    student.setClassLastStudied(newStudent.getClassLastStudied());
                    student.setClassToBeAdmitted(newStudent.getClassToBeAdmitted());
                    student.setNameOfSchool(newStudent.getNameOfSchool());
                    student.setParentOccupation(newStudent.getParentOccupation());
                    student.setRemarksOne(newStudent.getRemarksOne());
                    student.setRemarksTwo(newStudent.getRemarksTwo());
                    student.setPlacePincode(newStudent.getPlacePincode());
                    student.setDistrict(newStudent.getDistrict());
                    student.setRegisterNumber(newStudent.getRegisterNumber());
                    return studentRepository.save(student);



                }).orElseThrow(()->new NewFeeHeadNotFoundException(id) );



    }

    @DeleteMapping("/NewStudent/{id}")
    String deleteStudent(@PathVariable Long id){

        if (!studentRepository.existsById(id)){

            throw new NewFeeHeadNotFoundException(id);
        }
        studentRepository.deleteById(id);
        return "FeeHead with id"+id+"has been deleted success.";

    }






}
