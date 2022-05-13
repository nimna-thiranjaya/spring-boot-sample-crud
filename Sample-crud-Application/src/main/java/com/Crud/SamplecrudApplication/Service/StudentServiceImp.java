package com.Crud.SamplecrudApplication.Service;

import com.Crud.SamplecrudApplication.model.Student;
import com.Crud.SamplecrudApplication.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImp implements StudentService{

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {

        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudent() {
        List<Student> st=studentRepository.findAll();
        if(st.size()>0){

        }
        return studentRepository.findAll();

    }

    @Override
    public Student findOneById(int id) {
        return studentRepository.findById(id).get();
    }

    @Override
    public void deleteOne(int id) {
        studentRepository.deleteById(id);
    }

    @Override
    public Student updateStudent(Student student) {
        Student existingSt = studentRepository.findById(student.getId()).orElse(null);
        existingSt.setName(student.getName());
        existingSt.setAddress(student.getAddress());
        return studentRepository.save(existingSt);
    }

    @Override
    public Student updateUStudent(int id, Student student) {
        Student existingSt = studentRepository.findById(id).orElse(null);
        existingSt.setName(student.getName());
        existingSt.setAddress(student.getAddress());
        return studentRepository.save(existingSt);
    }

}
