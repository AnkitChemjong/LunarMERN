import React from 'react';
import BlogForm from './BlogForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const MakeBlog = () => {
    const navigate=useNavigate();
    const makeBlog=async (data)=>{
        await axios.post('http://localhost:8080/create', data,{headers:{'Content-Type':'multipart/form-data'}}).then((response)=>{
          toast.success(response.data.message,{position:'top-center'})
            navigate('/');
            
        }).catch((error)=>{
          toast.error(error.message,{position:'top-center'})
        });

    }
  return (
    <BlogForm func={makeBlog}/>
  )
}

export default MakeBlog
