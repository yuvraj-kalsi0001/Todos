import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import { useState } from 'react'
import axios from "axios"

function Signup() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        title: [],
        description: []
    })

    const navigate = useNavigate();

    const[errors, setErrors] = useState({})

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
                .then(res => navigate('/'))
                .catch(err => console.log(err));
        }
    }

    const handleInput= (event) =>{
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
        // console.log(event.target.name)
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action="database_connect.php" onSubmit={handleSubmit}>
            <div className = 'mb-3'>
                <h2>Sign Up</h2>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" paceholder = "Enter name" name = "name" onChange = {handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>

                <div className = 'mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" paceholder = "Enter email" name = "email" onChange = {handleInput}
                    className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>

                <div className = 'mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" paceholder = "Enter password" name = "password" onChange = {handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type = "submit" className='btn btn-success w-100 rounded-0 mb-3'>Register</button>
                <p>Already have an account</p>
                <Link to = "/" className = "btn btn-default border w-100 bg-light text-decoration-none">Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup