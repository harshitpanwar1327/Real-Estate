import { NavLink, useNavigate} from 'react-router-dom'

const NavigationBar = () => {
  let navigate = useNavigate();

  let handleLogout = ()=>{
    sessionStorage.clear();
    navigate('/login');
  }

  return (
    <div className='h-screen w-[220px] flex flex-col items-center gap-10 bg-black text-white'>
      <h2 className='mt-8 font-semibold text-2xl'>Real Estate</h2>
      <div className='grow w-full'>
        <NavLink to={'/projects'}><div className='border-b border-gray-500 p-4 text-white'>Projects</div></NavLink>
        <NavLink to={'/properties'}><div className='border-b border-gray-500 p-4 text-white'>Properties</div></NavLink>
        <NavLink to={'/enquiries'}><div className='border-b border-gray-500 p-4 text-white'>Enquiries</div></NavLink>
      </div>
      <button onClick={handleLogout} className='mb-4 hover:!text-red-500'>Logout</button>
    </div>
  )
}

export default NavigationBar