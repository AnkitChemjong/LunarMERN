import React, { useEffect } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { blogs } from '../store/slice/blogSlice.jsx';

const Home = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(blogs());
  },[]);
  const blog=useSelector((state)=>{return state.blogs.data});
  return (
    <>
<div className='mt-5'>
  <div className=" flex-row flex-wrap gap-2 grid grid-cols-3">
    {blog.map((blogs)=>{
      return(
      <div className="group relative rounded-lg overflow-hidden bg-white hover:shadow-2xl border-2 border-gray-950 m-2" data-aos-duration="500" data-aos="flip-left" data-aos-easing="ease-in-sine" key={blogs.blogId}>
        <div className="h-40">
          <img
            src={blogs.blogImage}
            alt="City"
            className="h-40 w-full object-cover object-center"
          />
        </div>
        <div className="h-1/2 p-4">
          <h3 className="mb-2 text-base font-semibold text-blue-800">
            <strong>{blogs.title}</strong>
          </h3>
          <p className="text-sm font-bold text-orange-500">{blogs.description}</p>
          <h1 className="mb-2 text-base font-semibold text-zinc-800"><strong> 
            Created By
            </strong> 
            </h1>
         <div className='flex justify-center items-center flex-row'>
              <button
                type="button"
                className="me-10 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={blogs.user.userImage}
                  alt=""
                />
              </button>
            <h2> <strong className=" ms-10 text-sm font-bold text-orange-500">{blogs.user.userName}</strong></h2>
         </div>
        </div>
      </div>
      )
    })}
    </div>
    </div>
    </>
  )
}

export default Home
