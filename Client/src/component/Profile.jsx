import React from 'react';
import {useSelector } from 'react-redux';

const Profile = () => {
    const user=useSelector((state) =>{return state.user.data});
  return (
    <div className='w-full h-[100vh] bg-slate-400 justify-start items-center flex flex-col'>
        
            <div className='w-1/4 h-2/4 bg-gray-950 mt-20 flex flex-col md:mt-36'>
                
                    <img src={user?.userImage} alt="Users image"  className='rounded-full md:w-56 md:h-56 md:ml-14 -mt-28 border-8 border-gray-950' />
                
                        <div className='mt-10 flex flex-col justify-center items-center'>
                            <h1 className='text-slate-100'>Name:-{user?.userName}</h1>
                            <h1 className='text-slate-100'>Email:-{user?.email}</h1>
                        </div>
            </div>
       
      
    </div>
  )
}

export default Profile;
