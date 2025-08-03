import {useEffect, useState} from 'react'
import API from '../util/Api';

const PropertyInfo = ({setOpenModal, selectedPropertyId}) => {
  let [propertyData, setPropertyData] = useState([]);

  let fetchProperties = async () => {
    try {
      let response = await API.get(`/property/property-details/${selectedPropertyId}`);
      setPropertyData(response.data.data);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchProperties();
  }, []);

  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#0000005a] z-1' onClick={()=>setOpenModal(false)}>
      <div className='w-1/4 bg-white py-2 px-6 rounded shadow-md flex flex-col gap-1' onClick={(e)=>e.stopPropagation()}>
        <h2 className='p-2 font-semibold text-xl text-[#fdc940] text-center'>Property Details</h2>
        <p><strong>Title:</strong> {propertyData[0]?.title || ''}</p>
        <p><strong>Location:</strong> {propertyData[0]?.location || ''}</p>
        <p><strong>Price:</strong> ₹{propertyData[0]?.price || ''}</p>
        <p><strong>Property Type:</strong> {propertyData[0]?.property_type || ''}</p>
        <p><strong>Bedrooms:</strong> {propertyData[0]?.bedrooms || ''}</p>
        <p><strong>Bathrooms:</strong> {propertyData[0]?.bathrooms || ''}</p>
        <p><strong>Area Sq.Ft.:</strong> {propertyData[0]?.area_sqft || ''}</p>
        <p><strong>Status:</strong> {propertyData[0]?.status || ''}</p>
      </div>
    </div>
  )
}

export default PropertyInfo