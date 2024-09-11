import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <div className='w-full h-[100vh] bg-slate-400 flex flex-col items-center justify-center gap-5'>
      Page not Found
      <Link to="/" className="bg-white text-sm text-blue-700 font-semibold py-2 px-6 rounded hover:scale-[1.1]">
              Home
        </Link>
    </div>
    </div>
  )
}

export default NotFound
