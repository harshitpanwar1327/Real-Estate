import React, { useState } from 'react'
import API from '../utils/API'
import ClearIcon from '@mui/icons-material/Clear'
import { toast } from 'react-toastify'

const Signup = ({setSwitchModal}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if(password!==confirmPassword) {
      toast.error('Passowrd and Confirm Password not matched!');
      return;
    }

    try {
      let response = await API.post('/user/register', {
        email,
        password_hash: password
      });
      toast.success('Signup successfull');
      setSwitchModal(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  }
  
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-100' onClick={()=>setSwitchModal(false)}>
      <form onSubmit={handleSignup} className='bg-white w-1/3 rounded-md py-2 px-4 flex flex-col gap-2' onClick={(e)=>e.stopPropagation()}>
        <ClearIcon className='text-[#7c7c7c] cursor-pointer' onClick={()=>setSwitchModal(false)} />
        <h2 className='text-xl font-semibold'>Create Account</h2>
        <p>Already have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>setSwitchModal(false)}>Log in</span></p>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter your email' className='p-2 border border-[#cdcdcd] rounded' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter your password' className='p-2 border border-[#cdcdcd] rounded' id='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" placeholder='Confirm password' className='p-2 border border-[#cdcdcd] rounded' id='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required />
        <button className='bg-[#106c50] text-white py-2 rounded cursor-pointer'>Sign in</button>
      </form>
    </div>
  )
}

export default Signup