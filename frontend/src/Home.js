import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from 'react-router-dom';

function Home() {

    const[todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/home')
            .then(res => setTodos(res.data))
            .catch(err => console.log(err));
            
    }, [])

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center bg-primary'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to ="/create" className='btn btn-success'>Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((data, i) => (
                                
                                <tr key = {i}>
                                    <td>{data.title}</td>
                                    <td>{data.description}</td>
                                    <td>
                                        <button className ='btn btn-primary'>Update</button>
                                        <button className ='btn btn-danger ms-2'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home