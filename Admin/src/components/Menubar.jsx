import React, {useState} from 'react'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { useNavigate } from 'react-router-dom'
import AddProject from '../modals/AddProject'

const Menubar = ({heading}) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  }

  return (
    <div className='w-full bg-white p-4 flex justify-between items-center'>
        <h2 className='font-semibold text-xl'>{heading}</h2>
        <div className='flex gap-4'>
            <button className='bg-[#fdc940] text-sm font-semibold p-2 rounded' onClick={(e)=>setOpenModal(true)}>+ New Project</button>
            <button className='bg-red-500 text-white text-sm font-semibold p-2 rounded flex items-center' onClick={handleLogout}><LogoutOutlinedIcon sx={{fontSize: '16px'}}/>Logout</button>
        </div>
        {openModal && <AddProject setOpenModal={setOpenModal}/>}
    </div>
  )
}

export default Menubar