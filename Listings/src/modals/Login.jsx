import React from 'react'

const Login = ({setOpenModal}) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-[#000000aa] z-100' onClick={()=>setOpenModal(false)}></div>
  )
}

export default Login