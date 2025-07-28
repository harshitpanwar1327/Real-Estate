import { NavLink, useNavigate} from 'react-router-dom'

const NavigationBar = () => {
  let navigate = useNavigate();

  let handleLogout = ()=>{
    sessionStorage.clear();
    navigate('/login');
  }

  return (
    <div className='h-screen w-[260px] flex flex-col gap-15 items-center border-r-2 bg-black text-white'>
      <h2 className='mt-8 font-bold text-2xl'>Real-Estate</h2>
      <ul className='grow flex flex-col '>
        <NavLink to={'/projects'}><li className='border-l-2 border-t-2 border-r-2 border-gray-500 w-[250px] p-4 text-white'>Projects</li></NavLink>
        <NavLink to={'/properties'}><li className='border-2 border-gray-500 w-[250px] p-4 text-white'>Properties</li></NavLink>
        <NavLink to={'/enquiries'}><li className='border-2 border-t-0 border-gray-500 w-[250px] p-4 text-white'>Enquiries</li></NavLink>
      </ul>
      <p onClick={handleLogout} className='flex items-cente font-semibold cursor-pointer transition duration-350 ease-in-out transform hover:scale-115 hover:text-red-500 mb-3'>Logout</p>
    </div>
  )
}

export default NavigationBar