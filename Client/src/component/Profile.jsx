import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import { userBlog } from '../store/slice/userBlog.jsx';

const Profile = () => {
  const dispatch=useDispatch();
  const user=useSelector((state) =>{return state.user.data});
  useEffect( ()=>{
       dispatch(userBlog());
  },[]);
    const blog=useSelector((state)=>{return state.userB.data});

  return (
    <div className='w-full h-[100vh] bg-slate-400 justify-start items-center flex flex-col'>
        
            <div className='w-1/4 h-2/4 bg-gray-950 mt-20 flex flex-col md:mt-36'>
                
                    <img src={user?.userImage} alt="Users image"  className='rounded-full md:w-56 md:h-56 md:ml-14 -mt-28 border-8 border-gray-950' />
                
                        <div className='mt-10 flex flex-col justify-center items-center'>
                            <h1 className='text-slate-100'>Name:-{user?.userName}</h1>
                            <h1 className='text-slate-100'>Email:-{user?.email}</h1>
                        </div>
            </div>

            {blog.map((value,index)=>{
              return (
                <div className="group relative rounded-lg overflow-hidden bg-white hover:shadow-2xl border-2 border-gray-950 m-2" data-aos-duration="500" data-aos="flip-left" data-aos-easing="ease-in-sine" key={index}>
                <div className="h-40">
                  <img
                     src={`http://localhost:8080/${value.blogImage}`}
                    alt="City"
                    className="h-40 w-full object-cover object-center"
                  />
                </div>
                <div className="h-1/2 p-4">
                  <h3 className="mb-2 text-base font-semibold text-blue-800">
                    <strong>{value.title}</strong>
                  </h3>
                  <p className="text-sm font-bold text-orange-500">{value.description}</p>
                 
                </div>
              </div>
              )
            })}
       
      
    </div>
  )
}

export default Profile;
