import axios from 'axios'
const EMPLOYEE_BASE_REST_API_URL='http://localhost:8080/api/v1/employees';

class  EmployeeServices{
    getAllEmployees() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    CreateEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL,employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL+'/'+employeeId)
    }
     updateEmployee(employeeId,employee){
        return axios.get(EMPLOYEE_BASE_REST_API_URL+'/'+employeeId,employee);
     }
     deleteEmployee = (employeeId) => {
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }
}

export default new EmployeeServices();