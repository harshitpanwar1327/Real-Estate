import React, {useState} from 'react'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { useNavigate } from 'react-router-dom'
import AddProject from '../modals/AddProject'
import Swal from 'sweetalert2'
import { ClimbingBoxLoader } from "react-spinners";
import AddProperty from '../modals/AddProperty'

const Menubar = ({heading, projectButton, propertyButton, fetchProjects}) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      text: "You will need to log in again to access your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        setTimeout(() => {
          sessionStorage.clear();
          setLoading(false);
          navigate('/login');
          Swal.fire({
            title: "Logged out!",
            text: "You have been successfully logged out.",
            icon: "success"
          });
        }, 1000);
      }
    });
  }

  return (
    <div className='w-full bg-white p-4 flex justify-between items-center'>
      {loading && (
        <div className='fixed h-screen w-screen top-0 left-0 flex justify-center items-center backdrop-blur-md bg-black/25 z-200'>
          <ClimbingBoxLoader />
        </div>
      )}
        <h2 className='font-semibold text-xl'>{heading}</h2>
        <div className='flex gap-4'>
          {projectButton && 
            <button className='bg-[#fdc940] text-sm font-semibold p-2 border-2 border-[#fdc940] rounded hover:scale-105 transition-all duration-300 ease-in-out' onClick={(e)=>setOpenModal(true)}>+ New Project</button>
          }
          {propertyButton &&
            <button className='bg-[#fdc940] text-sm font-semibold p-2 border-2 border-[#fdc940] rounded hover:scale-105 transition-all duration-300 ease-in-out' onClick={(e)=>setOpenAddModal(true)}>+ New Property</button>
          }
          <button className='bg-red-500 text-white text-sm font-semibold p-2 rounded flex items-center border-2 border-red-500 hover:scale-105 transition-all duration-300 ease-in-out' onClick={handleLogout}><LogoutOutlinedIcon sx={{fontSize: '16px'}}/>Logout</button>
        </div>
        {openModal && <AddProject setOpenModal={setOpenModal} fetchProjects={fetchProjects}/>}
        {openAddModal && <AddProperty setOpenAddModal={setOpenAddModal}/>}
    </div>
  )
}

export default Menubar