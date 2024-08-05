import React from 'react'

function GetStarted() {
  return (
    <section className='mt-[220px] relative'>
      <div className="bg-[#1c2234] p-5 w-[75%] absolute left-[50%] translate-x-[-50%] top-[-300px] md:top-[-150px] rounded-[5px] flex items-center flex-col ">
        <h3 className='text-[25px] md:text-[35px] font-semibold mb-4'>Get Early Access Today</h3>
        <p className='text-center w-[90%] mb-4 '>Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Perspiciatis, hic! Ab optio provident quidem non.</p>
        <form className='w-full flex justify-between items-center flex-wrap md:px-[40px] gap-7'>
          <input className=' w-full border-none md:flex-1 outline-none px-5 py-2 text-black rounded-3xl ' type="email" placeholder='email@example.com' />
          <button className='w-full lg:w-[220px] bg-[#5ad5d8] hover:bg-[#8cdae4] py-2 px-6 shadow-xl rounded-full' type="submit">Get Started For Free</button>
        </form>
      </div>
    </section>
  )
}

export default GetStarted
