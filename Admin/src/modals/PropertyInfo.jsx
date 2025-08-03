import {useEffect, useState} from 'react'
import API from '../util/Api';

const PropertyInfo = ({setOpenInfoModal, selectedInfo}) => {
  let [propertyData, setPropertyData] = useState([]);

  let fetchProperties = async () => {
    try {
      let response = await API.get(`/property/properties/${selectedInfo}`);
      setPropertyData(response.data.data);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchProperties();
  },[]);

  return (
    <div className='fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-[#0000005a] z-1' onClick={()=>setOpenInfoModal(false)}>
      <div className='w-1/2 bg-white p-4 rounded shadow-md' onClick={(e)=>e.stopPropagation()}>
        <h2 className='p-2 font-semibold text-xl text-[#fdc940] col-span-2'>Property Details</h2>
        {propertyData.map((data,index)=>(
          <div className='grid grid-cols-2 place-items-center gap-1' key={index}>
            <div className='w-full p-2 rounded shadow-md flex flex-col gap-1 h-full justify-around'>
              <p className='flex justify-between'>
                <span className='p-2 font-bold'>Title:</span>
                <span className='p-2'>{data.title}</span>
              </p>
              <p className='flex justify-between'>
                <span className='p-2 font-bold'>Location:</span>
                <span className='p-2'>{data.location}</span>
              </p>
              <p className='flex justify-between'>
                <span className='p-2 font-bold'>Property Type:</span>
                <span className='p-2'>{data.property_type}</span>
              </p>
              <p className='flex justify-between'>
                <span className='p-2 font-bold'>Price:</span>
                <span className='p-2'>{data.price}</span>
              </p>
              <p className='flex justify-between'>
                <span className='p-2 font-bold'>Area Sqft:</span>
                <span className='p-2'>{data.area_sqft}</span>
              </p>
            </div>
            <div className='w-full p-2 rounded shadow-md flex flex-col gap-1 h-full justify-around'>
              <p className='flex justify-between'>
                <span className='p-2 font-bold'>Status: </span>
                <span className='p-2'>{data.status}</span>
              </p>
              <p className='flex justify-between'>
                <span className='p-2 font-bold'>Bedrooms: </span>
                <span className='p-2'>{data.bedrooms}</span>
              </p>
              <p className='flex justify-between'>
                <span className='p-2 font-bold'>Bathrooms: </span>
                <span className='p-2'>{data.bathrooms}</span>
              </p>
              <p className='bg-white rounded shadow-xs'>
                <span className='p-2 font-bold text-[#fdc940]'>Description: </span><br />
                <span className='p-2'>{data.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyInfo