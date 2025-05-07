package com.navin.fullstack_backend.school.management.system.service;

import com.navin.fullstack_backend.school.management.system.model.Student;
import com.navin.fullstack_backend.school.management.system.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Student registerStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }



    public void processFeePayment(Long studentId, int paymentAmount) {
        // Fetch student by ID or throw an exception if not found
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        // Update the total fee paid and recalculate dueFee
        student.setTotalFeePaid(student.getTotalFeePaid() + paymentAmount);

        // Save updated student to the database
        studentRepository.save(student);
    }


}