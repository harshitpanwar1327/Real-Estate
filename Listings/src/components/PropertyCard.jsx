import React from 'react'
import PropertyImage from '../assets/property.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const PropertyCard = ({data}) => {
  return (
    <div className='bg-white shadow-md rounded '>
      <img src={PropertyImage} alt="Property Image" className='rounded'/>
      <div className='p-2'>
        <h2 className='font-semibold'>{data.title}</h2>
        <p className='flex items-center gap-1'><LocationOnIcon sx={{fontSize: '16px'}}/>{data.location}</p>
      </div>
    </div>
  )
}

export default PropertyCard