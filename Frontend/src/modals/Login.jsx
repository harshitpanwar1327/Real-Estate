import React, { useState } from 'react'
import API from '../utils/API'
import ClearIcon from '@mui/icons-material/Clear'
import Signup from '../modals/Signup'
import { toast } from 'react-toastify'

const Login = ({setOpenModal}) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [switchModal, setSwitchModal] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response = await API.post('/user/login', {
        email,
        phone,
        password_hash: password
      });
      sessionStorage.setItem('isAuthenticated', true);
      toast.success('Login successfull');
      setOpenModal(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Login failed');
    }
  }

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-[#000000aa] flex justify-center items-center z-100' onClick={()=>setOpenModal(false)}>
      <form onSubmit={handleLogin} className='bg-white w-1/3 rounded-md py-2 px-4 flex flex-col gap-2' onClick={(e)=>e.stopPropagation()}>
        <ClearIcon className='text-[#7c7c7c] cursor-pointer' onClick={()=>setOpenModal(false)} />
        <h2 className='text-xl font-semibold'>Log in</h2>
        <p>New User? <span className='text-blue-500 cursor-pointer' onClick={()=>{setSwitchModal(true)}}>Register Now</span></p>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter your email' className='p-2 border border-[#cdcdcd] rounded' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <p className='text-center text-sm text-[#7c7c7c]'>OR</p>
        <label htmlFor="phone">Phone</label>
        <input type="number" placeholder='Enter mobile number' className='p-2 border border-[#cdcdcd] rounded' name="phone" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter your password' className='p-2 border border-[#cdcdcd] rounded' id='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <button className='bg-[#106c50] text-white py-2 rounded cursor-pointer'>Sign in</button>
      </form>
      {switchModal && <Signup setSwitchModal={setSwitchModal} setOpenModal={setOpenModal}/>}
    </div>
  )
}

export default Login