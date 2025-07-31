import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import API from '../../util/Api.js'
import {toast} from 'react-toastify'
import { ClimbingBoxLoader } from "react-spinners";

const Login = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e)=>{
    e.preventDefault(e);
    
    try {
      setLoading(true);
      let response = await API.post('/admin/login', {
        email: email,
        password_hash: password
      });

      let token = response.data.token;
      sessionStorage.setItem('AuthToken', token);
      sessionStorage.setItem('isAuthenticated', true);
      setTimeout(() => {
        setLoading(false);
        toast.success(`Login Successfull`);
        navigate('/projects');
      }, 2000);
      
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(response?.error?.data?.message || `Login Failed!`);
    }
  }

  return (
    <div className='grow flex justify-center items-center bg-[url(/src/assets/login.jpg)] bg-cover'>
      {loading && (
        <div className='fixed h-screen w-screen top-0 left-0 flex justify-center items-center bg-black/25 z-[100]'>
          <ClimbingBoxLoader />
        </div>
      )}
      <form className = "flex flex-col items-center w-1/4 backdrop-blur bg-white/30 rounded p-5 shadow-lg gap-2" onSubmit={handleLogin}>
        <h2 className="mb-2 text-2xl font-semibold">Login</h2>
        <div className="flex flex-col w-full">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" className="border p-2 rounded" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" className="border p-2 rounded" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button className = "w-1/2 mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
      </form>
    </div>
  )
}

export default Login