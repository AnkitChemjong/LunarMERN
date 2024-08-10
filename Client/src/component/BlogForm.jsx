import React, { useState } from 'react';
import blog from './HandleBlog.js';


const BlogForm = (props) => {
    const [data,setData]=useState({
       title:'',
       description:'',
       image:null
    });
    const handleChange=(e)=>{
        const {name,files,value}=e.target;
        setData((prev)=>({...prev,[name]:files?files[0]:value}));

    };
    const formData=new FormData();
    formData.append('blogImage',data.image);
    formData.append('title',data.title);
    formData.append('description',data.description);



   const handleSubmit = async (e)=>{
    e.preventDefault();
    if(blog(data.title,data.description,data.image)){
      await props.func(formData);
    }
   };

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md mt-5">
        <div className="relative mb-5">
          <input
            autoComplete="off"
            id="userNameTitle"
            name="title"
            type="text"
            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="User Name"
            onChange={handleChange}
          />
          <label
            htmlFor="userNameTitle"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Title
          </label>
        </div>

        <div className="relative mb-5">
          <textarea
            autoComplete="off"
            id="userNameDescription"
            name="description"
            className="peer placeholder-transparent w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
            rows="4"
            placeholder="Description"
            onChange={handleChange}
          />
          <label
            htmlFor="userNameDescription"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Description
          </label>
        </div>

        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
          Blog Photo
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
            </svg>
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Upload a file</span>
                <input id="file-upload" name="image" type="file" className="sr-only"  onChange={handleChange}/>
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, JPEG up to 10MB</p>
          </div>
        </div>
        <button className="bg-green-500 text-slate-50 rounded-md p-2 mt-2 ms-20 md:ms-44 hover:bg-sky-700">Submit</button>
      </div>
    </div>
    </form>
  )
}

export default BlogForm
