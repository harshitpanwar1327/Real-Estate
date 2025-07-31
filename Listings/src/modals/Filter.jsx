import React from 'react'

const Filter = ({setOpenModal}) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-white/90 z-100 flex justify-center overflow-y-auto'>
        <div className='w-2/3 p-4 flex flex-col gap-5'>
            <p className='cursor-pointer self-end' onClick={()=>setOpenModal(false)}>Close X</p>
            <h2 className='font-semibold'>Property Types</h2>
            <div className="py-4"></div>
            <hr className='text-[#cdcdcd]'/>
            <h2 className='font-semibold'>Price</h2>
            <div className="py-4"></div>
            <hr className='text-[#cdcdcd]'/>
            <h2 className='font-semibold'>Bedrooms</h2>
            <div className="py-4"></div>
            <hr className='text-[#cdcdcd]'/>
            <h2 className='font-semibold'>Bathrooms</h2>
            <div className="py-4"></div>
            <hr className='text-[#cdcdcd]'/>
            <h2 className='font-semibold'>Property Size</h2>
            <div className="py-4"></div>
        </div>
    </div>
  )
}

export default Filter