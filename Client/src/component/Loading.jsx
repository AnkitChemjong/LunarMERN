import React from 'react'

const Loading = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-zinc-300 flex flex-col justify-center items-center bg-[url(h.jpeg)] bg-no-repeat  bg-cover bg-center '>
      <img src="but.png" className='w-56 h-52 absolute animate-bounce'  alt="" />
    </div>
  )
}

export default Loading;
