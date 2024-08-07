import React from 'react';
import UserForm from './UserForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist';
import { user } from '../store/slice/userSlice';
import {useDispatch } from 'react-redux';

const LogIn = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const log=async (data)=>{
     await axios.post('http://localhost:8080/login', data,{
      headers:{
        'Content-Type':'application/json'
      }
     }).then((res)=>{
      dispatch(user());
      alert("successfully logged in");
      navigate('/');
  
  
     }).catch((err)=>{alert(err.message);});
  }
  return (
    <UserForm type='log' func={log}/>
  )
}

export default LogIn
