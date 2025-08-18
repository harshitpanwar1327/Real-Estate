import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import API from '../utils/API'
import DefaultCover from '../assets/DefaultCover.jpg'
import {toast} from 'react-toastify'
import SendIcon from '@mui/icons-material/Send'
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded'
import MapRoundedIcon from '@mui/icons-material/MapRounded'
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded'

const PropertyDetail = () => {
  let {id} = useParams();
  let [propertyDetails, setPropertyDetails] = useState([]);
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [phone, setPhone] = useState('');
  let [subject, setSubject] = useState('');
  let [message, setMessage] = useState('');

  const fetchPropertyData = async () => {
    try {
      let response = await API.get(`/property/property-details/${id}`);
      setPropertyDetails(response.data.data);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchPropertyData();
  }, [id]);

  const handleEnquiryForm = async () => {
    try {
      const response = await API.post(`/enquiry/enquiries`, {
        name,
        email,
        phone,
        subject,
        message,
        property_id: id
      });
      toast.success("Enquiry submitted successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Enquiry not submitted!");
    }
  }

  return (
    <div className='flex flex-col gap-10 mt-20'>
      <div>
        <img src={propertyDetails[0]?.cover ? `${import.meta.env.VITE_IMG_BASE_URL}/${propertyDetails[0].cover}` : DefaultCover} alt="Cover Image"/>
        <span className='relative bottom-6 left-15 bg-white shadow-md inline-block'>
          <button className='p-2 border border-gray-300'><CollectionsRoundedIcon/> Photos</button>
          <button className='p-2 border border-gray-300'><MapRoundedIcon/> Floor Plan</button>
        </span>
        <button className='py-2 px-4 border border-gray-300 bg-white shadow-md rounded absolute right-15 top-26 flex items-center gap-2'><IosShareRoundedIcon sx={{fontSize: '16px'}}/> Share</button>
      </div>

      <div className='grid grid-cols-3'>
        <div className='col-span-2 overflow-auto'></div>
        <form onSubmit={handleEnquiryForm} className='flex flex-col items-center gap-4 p-10 shadow'>
          <h2 className='text-2xl font-bold'>Ask about this property</h2>
          <input type="text" placeholder='Name*' className='p-2 border border-[#cdcdcd] rounded-xl w-full' value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="email" placeholder='Email (optional)' className='p-2 border border-[#cdcdcd] rounded-xl w-full' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="text" placeholder='Phone*' className='p-2 border border-[#cdcdcd] rounded-xl w-full' value={phone} onChange={(e)=>setPhone(e.target.value)} />
          <input type="text" placeholder='Subject' className='p-2 border border-[#cdcdcd] rounded-xl w-full' value={subject} onChange={(e)=>setSubject(e.target.value)} />
          <textarea name="message" id="message" placeholder='Message*' className='p-2 border border-[#cdcdcd] rounded-xl w-full'></textarea>
          <button className='flex items-center gap-2 bg-black text-white p-2 rounded-md'>Send <SendIcon sx={{fontSize: '16px', transform: 'rotate(-45deg)'}}/></button>
        </form>
      </div>
    </div>
  )
}

export default PropertyDetail