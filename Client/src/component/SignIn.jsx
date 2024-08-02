import React from 'react';
import UserForm from './UserForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist';


const SignIn = () => {
  const navigate=useNavigate();
const sign=async (data)=>{
   await axios.post('http://localhost:8080/register', data,{
    headers:{
      'Content-Type':'multipart/form-data'
    }
   }).then((res)=>{
    alert("successfully registered");
    navigate('/login');


   }).catch((err)=>{alert(err.message);});
}

  return (
    <UserForm type='sign' func={sign}/>
  )
}

export default SignIn
