package com.vkasurinen.webApp.service;

import java.util.List;

import com.vkasurinen.webApp.model.Student;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();


}
