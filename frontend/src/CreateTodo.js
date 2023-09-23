import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function CreateTodo() {
  const[title, setTitle] = useState('')
  const[description, setDescription] = useState('')
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8081/create', {title, description})
    .then(res => {
      console.log(res);
      navigate('/home');
    }).catch(err => console.log(console.log(err)))
  }
  return (
    <div><div className='d-flex vh-100 justify-content-center align-items-center bg-primary '>
      <div className='bg-white p-3 rounded w-50 '>
        <h2>Add Todo</h2>
        <form onSubmit = {handleSubmit} action="">
          <div className='mb-2'>
            <label htmlFor="">Title</label>
            <input onChange = {e=>setDescription(e.target.value)}type='text' placeholder='Enter Title' className='form-control'></input>
          </div>

          <div className='mb-2'>
            <label htmlFor="">Description</label>
            <input onChange = {e=>setTitle(e.target.value)}type='text' placeholder='Enter Description' className='form-control'></input>
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div></div>
  )
}

export default CreateTodo