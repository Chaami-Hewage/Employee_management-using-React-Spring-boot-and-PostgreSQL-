package net.java.Springbootbackend.controller;
import net.java.Springbootbackend.exception.ResourceNotFoundException;
import net.java.Springbootbackend.model.employee;
import net.java.Springbootbackend.repository.employeeRepository;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")

public class employeeController {
    @Autowired
    private employeeRepository employeeRepository;

    @GetMapping
    public List<employee> getAllemployees() {
        return employeeRepository.findAll();  //return list of employees

    }

    //create employee rest API
    @PostMapping
    public employee createEmployee(@RequestBody employee employee) {
        return employeeRepository.save(employee);

    }

    //Build get employee by ID rest API
    @GetMapping("{id}")
    public ResponseEntity<employee> getEmployeeById(@PathVariable long id) {
        employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id + " is not registered"));
        return ResponseEntity.ok(employee);
    }

    //Build update employee rest API
    @PutMapping("{id}")
    public ResponseEntity<employee> updateEmployeeById(@PathVariable long id, @RequestBody employee employeeDetails) {
        employee updateEmployeeById = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id + "Cant recognised"));

        updateEmployeeById.setFirstName(employeeDetails.getFirstName());
        updateEmployeeById.setLastName(employeeDetails.getLastName());
        updateEmployeeById.setEmailId(employeeDetails.getEmailId());
        employeeRepository.save(updateEmployeeById);

        return ResponseEntity.ok(updateEmployeeById);
    }

    //Build delete employee rest API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
        employee employee=employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id + "Cant recognised"));

        employeeRepository.delete(employee);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
