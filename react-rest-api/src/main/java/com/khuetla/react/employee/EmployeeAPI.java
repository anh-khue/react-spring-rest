package com.khuetla.react.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class EmployeeAPI {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<EmployeeDTO> getAll() {
        return employeeRepository.findAll();
    }

    @GetMapping("/employees/{id}")
    public EmployeeDTO findById(@PathVariable("id") int id) {
        return employeeRepository.findById(id);
    }

}
