import React from 'react'

const Home = () => {
  return (
    <div>
        <div>
            <h1 className='text-[#0C111D] font-extrabold text-[24px]'>Welcome Susan,</h1>
            <p className='text-[#344054] font-light mt-2'>Get ready to complete your research processes on Zadwax</p>
        </div>

        <div className='bg-[#F0EBFC] pt-8 pl-4 rounded-md mt-4 flex'>
            <div>
                <p className='text-[10px] lg:text-[12px] mb-2'>Welcome to the cool kids club</p>
                <h2 className='text-[#4A24A1] text-[13px] lg:text-[24px] text-justify'>The new way designers revolutionize their work. See how others are using Zadwax to accelerate their design process.</h2>
            </div>
            <img src="/vector.svg" alt="Vector" className='w-1/2 lg:w-1/5' />
        </div>

        <div className='flex justify-between lg:flex-row flex-col mt-8'>
            <div className='flex justify-between w-[100%] lg:w-[55%] bg-white rounded-md mr-0 lg:mr-4 p-4'>
                <div>
                    <h2 className='font-extrabold'>Getting Started</h2>
                    <p>Three simple steps to launch your first project</p>
                </div>
                <div><button>Create Project</button></div>
            </div>
            <div className='w-[100%] lg:w-[45%] bg-white rounded-md ml-0 lg:ml-4 p-4 mt-4 lg:mt-0'>
                <h2 className='font-extrabold'>Research Tips and Tricks</h2>
                <p>Three simple steps to launch your first project</p>
            </div>
        </div>
    </div>
  )
}

export default Home