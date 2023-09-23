import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Validation from './LoginValidation'
import axios from "axios"

function Login() {

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    // console.log(res.data[1])
                    if (res.data === "Success"){
                        // console.log(res.data[1])
                        navigate("/home")
                    } else {
                        alert ("No record existed");
                    }
                })
                .catch(err => console.log(err));
        }
        
    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        // console.log(event.target.name)
    }
    return (

        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign in</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" paceholder="Enter email" name="email" onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                        {/* {console.log(errors.email)} */}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" paceholder="Enter password" name="password" onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                        {/* {console.log(errors.password)} */}
                    </div>
                    <button type="submit" className='btn btn-success w-100 rounded-0 mb-3'>Log in</button>
                    <p>Don't have an account</p>
                    <Link to="/signup" className="btn btn-default border w-100 bg-light text-decoration-none">Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login