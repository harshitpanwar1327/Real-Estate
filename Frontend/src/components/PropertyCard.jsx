import React, {useState} from 'react'
import DefaultCover from '../assets/DefaultCover.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined'
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined'
import { useNavigate } from 'react-router-dom'
import Login from '../modals/Login'

const PropertyCard = ({data}) => {
  let isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
  const navigate = useNavigate();
  let [openModal, setOpenModal] = useState(false);

  const handlePropertyClick = (id) => {
    if(!isAuthenticated) {
      setOpenModal(true);
      return;
    }
    navigate(`/property-detail/${id}`);
  }

  return (
    <div className='bg-white shadow-md rounded flex flex-col'>
      <img src={data?.cover ? `${import.meta.env.VITE_IMG_BASE_URL}/${data.cover}` : DefaultCover} alt={data?.title || "Property Image"} className='grow rounded cursor-pointer' onClick={()=>handlePropertyClick(data.property_id)}/>
      <div className='p-2 text-[#5c5c5c] flex flex-col gap-1'>
        <div className='flex gap-2'>
          <div className='flex gap-1'>
            <p className='font-semibold'>{data.bedrooms || '--'}</p>
            <BedOutlinedIcon />
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold'>{data.bathrooms || '--'}</p>
            <BathtubOutlinedIcon />
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold'>{data.area_sqft || '--'} sq.ft.</p>
          </div>
        </div>
        <h2 className='font-semibold'>{data.title}</h2>
        <p className='flex items-center gap-1'><LocationOnIcon sx={{fontSize: '16px'}}/>{data.location}</p>
      </div>

      {openModal && <Login setOpenModal={setOpenModal}/>}
    </div>
  )
}

export default PropertyCard