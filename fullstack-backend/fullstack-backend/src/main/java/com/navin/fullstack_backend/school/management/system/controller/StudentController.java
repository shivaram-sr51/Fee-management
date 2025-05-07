package com.navin.fullstack_backend.school.management.system.controller;

import com.navin.fullstack_backend.school.management.system.model.FeeHead;
import com.navin.fullstack_backend.school.management.system.model.Student;
import com.navin.fullstack_backend.school.management.system.repository.FeeHeadRepository;
import com.navin.fullstack_backend.school.management.system.repository.StudentRepository;
import com.navin.fullstack_backend.school.management.system.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000") // Enable CORS
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private FeeHeadRepository feeHeadRepository;

    @PostMapping
    public Student registerStudent(@RequestBody Student student) {
        List<FeeHead> feeHeads = feeHeadRepository.findByStandard(student.getStandard());
        int fixedFee = feeHeads.stream().mapToInt(FeeHead::getAmount).sum();
        student.setFixedFee(fixedFee);
        return studentRepository.save(student);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Student> getStudentByName(@PathVariable String name) {
        return studentRepository.findByName(name)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/{id}/pay")
    public ResponseEntity<Student> payFee(@PathVariable Long id, @RequestParam int amount) {
        return studentRepository.findById(id)
                .map(student -> {
                    student.setTotalFeePaid(student.getTotalFeePaid() + amount);
                    return ResponseEntity.ok(studentRepository.save(student));
                })
                .orElse(ResponseEntity.notFound().build());
    }
}