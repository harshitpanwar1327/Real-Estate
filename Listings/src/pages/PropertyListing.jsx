import React from 'react'

const PropertyListing = () => {
  return (
    <>
      <div className='flex flex-cols w-screen h-screen overflow-auto'>
        <div className='w-screen h-2/3 bg-[url(/src/assets/listing-cover-image.jpg)] bg-cover bg-center flex justify-center items-center'>
          <h1 className="backdrop-blur-md bg-white/30 text-white p-4 rounded">Know your next move</h1>
        </div>
        <div className="absolute top-2/3 left-1/2 w-2/3 h-50 bg-white -translate-x-1/2 -translate-y-1/2 rounded shadow-md"></div>
      </div>
    </>
  )
}

export default PropertyListing