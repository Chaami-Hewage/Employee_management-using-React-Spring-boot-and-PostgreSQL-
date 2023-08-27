package net.java.Springbootbackend.repository;
import net.java.Springbootbackend.model.employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface employeeRepository extends JpaRepository<employee, Long> {
}
