package com.khuetla.react.employee;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EmployeeRepository extends CrudRepository<EmployeeDTO, Integer> {

    List<EmployeeDTO> findAll();

    EmployeeDTO findById(int id);

}
