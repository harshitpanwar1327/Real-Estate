import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import API from '../utils/API'
import DefaultCover from '../assets/DefaultCover.jpg'
import {toast} from 'react-toastify'
import SendIcon from '@mui/icons-material/Send'
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded'
import MapRoundedIcon from '@mui/icons-material/MapRounded'
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded'
import PropertiesGallery from '../modals/PropertiesGallery'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined'
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined'
import StoreIcon from '@mui/icons-material/Store'
import BalconyIcon from '@mui/icons-material/Balcony'

const PropertyDetail = () => {
  let {id} = useParams();
  let [propertyDetails, setPropertyDetails] = useState([]);
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [phone, setPhone] = useState('');
  let [subject, setSubject] = useState('');
  let [message, setMessage] = useState('');
  let [option, setOption] = useState('');
  let [openModal, setOpenModal] = useState('');

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
  
  const handleShare = async () => {
    const shareData = {
      title: "Check out this property",
      text: "I found this property, have a look!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleGallery = (button) => {
    setOption(button);
    setOpenModal(true);
  }

  const handleEnquiryForm = async (e) => {
    e.preventDefault();

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

      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Enquiry not submitted!");
    }
  }

  return (
    <div className='flex flex-col gap-5 mt-20'>
      <div>
        <img src={propertyDetails[0]?.cover ? `${import.meta.env.VITE_IMG_BASE_URL}/${propertyDetails[0].cover}` : DefaultCover} alt="Cover Image"/>
        <span className='relative bottom-6 left-5 md:left-15 bg-white shadow-md inline-block'>
          <button className='p-2 border border-gray-300' onClick={()=>handleGallery('images')}><CollectionsRoundedIcon/> Photos</button>
          <button className='p-2 border border-gray-300' onClick={()=>handleGallery('areaPlan')}><MapRoundedIcon/> Floor Plan</button>
        </span>
        <button className='py-2 px-4 border border-gray-300 bg-white shadow-md rounded absolute right-5 md:right-15 top-26 flex items-center gap-2' onClick={handleShare}><IosShareRoundedIcon sx={{fontSize: '16px'}}/>Share</button>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='lg:col-span-2 overflow-y-auto flex flex-col gap-6 px-10 py-4 lg:h-[80vh]'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-bold'>{`₹${propertyDetails[0]?.minPrice.split('.')[0]} - ₹${propertyDetails[0]?.maxPrice.split('.')[0]}`}</h2>
            <p>{propertyDetails[0]?.location}</p>
            <div className='flex items-center gap-4'>
              <div className='flex gap-2'>
                <BedOutlinedIcon />
                <p className='font-semibold'>{propertyDetails[0]?.bedrooms || '--'}</p>
              </div>
              <div className="flex gap-2">
                <BathtubOutlinedIcon />
                <p className='font-semibold'>{propertyDetails[0]?.bathrooms || '--'}</p>
              </div>
              <div className="flex gap-2">
                <StoreIcon />
                <p className='font-semibold'>{propertyDetails[0]?.store || '--'}</p>
              </div>
              <div className="flex gap-2">
                <BalconyIcon />
                <p className='font-semibold'>{propertyDetails[0]?.balcony || '--'}</p>
              </div>
              <p className='text-lg font-bold'>{propertyDetails[0]?.property_type || '--'}</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className="flex gap-2">
                <p className='font-semibold'>Super Area:</p>
                <p>{`${propertyDetails[0]?.super_area || '--'} m`}<sup>2</sup></p>
              </div>
              <div className="flex gap-2">
                <p className='font-semibold'>Carpet Area:</p>
                <p>{`${propertyDetails[0]?.carpet_area || '--'} m`}<sup>2</sup></p>
              </div>
            </div>
          </div>

          <hr className='text-gray-300'/>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>Property Description</h2>
            <p className='font-semibold'>{propertyDetails[0]?.title || '--'}</p>
            <p>{propertyDetails[0]?.description || '--'}</p>
          </div>
        </div>

        <form onSubmit={handleEnquiryForm} className='flex flex-col items-center gap-3 mx-auto px-10 py-4 shadow-md'>
          <h2 className='text-2xl font-bold'>Ask about this property</h2>
          <input type="text" placeholder='Name*' className='p-2 border border-[#cdcdcd] rounded-xl w-full' value={name} onChange={(e)=>setName(e.target.value)} required/>
          <input type="email" placeholder='Email (optional)' className='p-2 border border-[#cdcdcd] rounded-xl w-full' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" placeholder='Phone*' className='p-2 border border-[#cdcdcd] rounded-xl w-full' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
          <input type="text" placeholder='Subject' className='p-2 border border-[#cdcdcd] rounded-xl w-full' value={subject} onChange={(e)=>setSubject(e.target.value)} />
          <textarea name="message" id="message" placeholder='Message*' rows={3} className='p-2 border border-[#cdcdcd] rounded-xl w-full' value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
          <button className='flex items-center gap-2 bg-black text-white p-2 rounded-md'>Send <SendIcon sx={{fontSize: '16px', transform: 'rotate(-45deg)'}}/></button>
        </form>
      </div>
      {openModal && <PropertiesGallery setOpenModal={setOpenModal} option={option}/>}
    </div>
  )
}

export default PropertyDetail