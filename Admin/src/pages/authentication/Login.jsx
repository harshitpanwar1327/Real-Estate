import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import API from '../../util/Api.js'
import {toast} from 'react-toastify'

const Login = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e)=>{
    e.preventDefault(e);
    
    try {
      let response = await API.post('/admin/login', {
        email:email,
        password_hash:password
      });

      let token = response.data.token;
      sessionStorage.setItem('AuthToken', token);
      sessionStorage.setItem('isAuthenticated', true);
      
      toast.success(`Successfully Logged In`);
      navigate('/projects');
    } catch (error) {
      console.log(error);
      toast.error(`Login Failed!`);
    }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-50'>
      <form className = "flex flex-col h-[21rem] w-[22rem] border-2 rounded-[10px] p-6 items-center shadow-md bg-white" onSubmit={handleLogin}
      >
        <h1 className="mb-4 !text-2xl font-semibold">Login</h1>
        <div className="flex flex-col w-full">
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" className="border p-2 rounded mb-2" value={email} onChange={(e)=>setEmail(e.target.value)} required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" className="border p-2 rounded outline-none" value={password} onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button className = "mt-6 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login