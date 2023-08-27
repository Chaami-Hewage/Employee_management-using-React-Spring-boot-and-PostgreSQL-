import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ListEmployeeComponent from "./ListEmployeeComponent";
import Employeeservices from "../Services/employeeservices";

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const history = useParams();
    const { id } = useParams();

    // Move useEffect hook outside of the saveEmployee function
    useEffect(() => {
        if (id) {
            Employeeservices.getEmployeeById(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmailId(response.data.emailId); // Corrected the property name
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id]);

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, emailId };

        if(id){
            Employeeservices.updateEmployee(id,employee).then((response) => {
                history.push("/employees");
            }).catch(error => {
                console.log(error);
            });

        }else{
        Employeeservices.CreateEmployee(employee).then((response) => {
            console.log(response.data);
            history.push("/employees");
        }).catch(error => {
            console.log(error);
        });
    };}

    const title = () => {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>;
        } else {
            return <h2 className='text-center'>Add Employee</h2>;
        }
    };

    return (
        <div><br />
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">< br />
                    {title()}
                </div>
                <div className="card-body"><br />
                    <form className='text-center'>
                        <div className="form-group mb-2">
                            <label className="form-label">First Name: &nbsp;
                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    value={firstName}
                                    className="form-control"
                                    name="firstName"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Last Name: &nbsp;
                                <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    value={lastName}
                                    className="form-control"
                                    name="lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Email: &nbsp;
                                <input
                                    type="text"
                                    placeholder="Enter Email"
                                    value={emailId}
                                    className="form-control"
                                    name="emailId"
                                    onChange={(e) => setEmailId(e.target.value)}
                                />
                            </label>
                        </div>

                        <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}>Add</button>
                        &nbsp; &nbsp;
                        <Link to='/employees' className='btn btn-danger'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeComponent;
