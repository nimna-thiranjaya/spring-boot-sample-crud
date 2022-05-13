package com.Crud.SamplecrudApplication.Service;

import com.Crud.SamplecrudApplication.model.Student;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student>getAllStudent();
    public Student findOneById(int id);
    public void deleteOne(int id);
    public Student updateStudent(Student student);
    public Student updateUStudent(int id, Student student);
}
