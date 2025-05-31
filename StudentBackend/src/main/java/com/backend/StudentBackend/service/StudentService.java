package com.backend.StudentBackend.service;

import com.backend.StudentBackend.model.Student;
import com.backend.StudentBackend.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    public void createStudent(Student student) {
        studentRepository.save(student);
    }

    public void updateStudent(Long id, Student student) {
        studentRepository.update(id, student);
    }

    public void deleteStudent(Long id) {
        studentRepository.delete(id);
    }
} 