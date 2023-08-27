package net.java.Springbootbackend;
import net.java.Springbootbackend.model.employee;
import net.java.Springbootbackend.repository.employeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private employeeRepository employeeRepository;
	@Override
	public void run(String... args) throws Exception {
//		employee employee=new employee();
//		employee.setFirstName("Saman");
//		employee.setLastName("Perera");
//		employee.setEmailId("Samanperera@gmail.com");
//		employeeRepository.save(employee);
//
//		employee employee1=new employee();
//		employee1.setFirstName("Kamal");
//		employee1.setLastName("Perera");
//		employee1.setEmailId("Kamalperera@gmail.com");
//		employeeRepository.save(employee1);


	}
}
