import axios from 'axios';
import React, { useEffect, useState,useRef } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import { userBlog } from '../store/slice/userBlog.jsx';
import { blogs } from '../store/slice/blogSlice.jsx';
import BlogForm from './BlogForm.jsx';
import {toast} from 'react-toastify';
// import {v2 as cloudinary} from 'cloudinary'; //if you want to download the file from cloudinary
// cloudinary.config({ 
//   cloud_name: process.env.CN, 
//   api_key:process.env.AK , 
//   api_secret:process.env.AS
// });

// const handleDownloadFile = async (userImageUrlFormCloudinary) => {
//   try {
//     // Generate the file URL using the Cloudinary API
//     const fileUrl = cloudinary.url(publicId, { secure: true });

//     // Create a link element to download the file
//     const a = document.createElement('a');
//     a.href = fileUrl;
//     a.setAttribute('download', fileUrl.split('/').pop()); // Set file name
//     document.body.appendChild(a);
//     a.click(); // Trigger the download
//     document.body.removeChild(a); // Remove the link after the download
//   } catch (error) {
//     console.error('Error fetching file:', error);
//   }

const Profile = () => {
  const updateRef=useRef();
  const dispatch=useDispatch();
  const [open,setOpen]=useState(false);
  const [id,setId]=useState(null);
  const user=useSelector((state) =>{return state.user.data});
  useEffect( ()=>{
       dispatch(userBlog());
  },[]);
    const blog=useSelector((state)=>{return state.userB.data});
    const deleteBlog=async (data)=>{
      await axios.delete('http://localhost:8080/delete',{data:{data:data}}).then((response)=>{
        if(response.status===200){
          toast.success(
            <div>
              Deleted
            </div>
            ,{position:"top-right"}
          )
          dispatch(userBlog());
          dispatch(blogs());
        }
      }).catch((error)=>{
        console.log(error)
      });
    }

    const updateBlog=async (data)=>{
        await axios.put(`http://localhost:8080/update/${id}`,data).then(()=>{
          toast.success(
            <div>
              updated
            </div>
            ,{position:"top-right"}

          )
          setOpen(false);
          dispatch(userBlog());
          dispatch(blogs());
        }).catch((error)=>{
          console.log(error)
        });
    }
//     useEffect(()=>{
//      const func=(e)=>{
//       if(updateRef.current && !updateRef.current.contains(e.target)){
//         console.log("hel")
//         setOpen(false);
//       }
//      }
//      document.addEventListener("click",func);

// return ()=>{
//   document.removeEventListener("click",func);
// }

//     },[updateRef]);

  return (
    <div className='w-full h-[100vh] bg-slate-400 justify-start items-center flex flex-col relative'>
        
            <div className='w-1/4 h-2/4 bg-gray-950 mt-20 flex flex-col md:mt-36'>
                
                    <img src={user?.userImage} alt="Users image"  className='rounded-full md:w-56 md:h-56 md:ml-14 -mt-28 border-8 border-gray-950' />
                
                        <div className='mt-10 flex flex-col justify-center items-center'>
                            <h1 className='text-slate-100'>Name:-{user?.userName}</h1>
                            <h1 className='text-slate-100'>Email:-{user?.email}</h1>
                        </div>
            </div>

            {blog.map((value,index)=>{
              return (
                <div className="group relative rounded-lg  bg-white hover:shadow-2xl border-2 border-gray-950 m-2" data-aos-duration="500" data-aos="flip-left" data-aos-easing="ease-in-sine" key={index}>
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
                <div className='flex flex-row gap-5'>
                  <button className='bg-red-400 rounded-xl p-2 border-2 border-x-teal-800 hover:scale-150' onClick={()=>deleteBlog(value)}>Delete</button>
                  <button  onClick={()=>{
                    setId(value.blogId);
                    setOpen(true);
                  }} className='bg-red-400 rounded-xl p-2 border-2 border-x-teal-800 hover:scale-150'>Update</button>
                </div>
              </div>
              )
            })}

           <div ref={updateRef} className='absolute w-[full] h-[100%]'>

            {open && <BlogForm type="update" close={setOpen} func={updateBlog}/>}
           </div>
       
      
    </div>
  )
}

export default Profile;
