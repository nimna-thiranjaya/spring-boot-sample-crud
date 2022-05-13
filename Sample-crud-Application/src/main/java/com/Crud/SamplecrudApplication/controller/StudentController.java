package com.Crud.SamplecrudApplication.controller;

import com.Crud.SamplecrudApplication.Service.StudentService;
import com.Crud.SamplecrudApplication.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New student added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudent(){
        return studentService.getAllStudent();
    }

    @GetMapping("/getSt/{id}")
    public Student findOneById(@PathVariable("id") int id){
        return studentService.findOneById(id);
    }

    @DeleteMapping("/deleteSt/{id}")
    public String deleteone(@PathVariable("id") int id){
        studentService.deleteOne(id);
        return "Delete Successfull";
    }

    @PutMapping("/update")
    public Student updateStudent(@RequestBody Student student){
        return studentService.updateStudent(student);
    }
    @PutMapping("/updateOne/{id}")
    public Student updateUStudent(@PathVariable("id") int id,@RequestBody Student student){
        return studentService.updateUStudent(id,student);
    }


}
