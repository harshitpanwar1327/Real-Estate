import React from 'react'
import PropertyImage from '../assets/property.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined'
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined'

const PropertyCard = ({data}) => {
  return (
    <div className='bg-white shadow-md rounded '>
      <img src={PropertyImage} alt="Property Image" className='rounded'/>
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
    </div>
  )
}

export default PropertyCard