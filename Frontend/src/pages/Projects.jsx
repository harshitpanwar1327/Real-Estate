import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import API from '../utils/API'
import DefaultCover from '../assets/DefaultCover.jpg'
import { motion } from 'motion/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'

const Projects = () => {
  const {id} = useParams();
  const [projectDetails, setProjectDetails] = useState([]);
  const [imagesArray, setImagesArray] = useState([]);

  const fetchProjectDetails = async () => {
    try {
      let response = await API.get(`/project/projects/${id}`);
      setProjectDetails(response.data.data);
      setImagesArray(JSON.parse(response.data.data[0].images));
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchProjectDetails();
  }, [id]);

  return (
    <div className='flex flex-col gap-10 mt-20'>
      <img src={projectDetails[0]?.cover ? `${import.meta.env.VITE_IMG_BASE_URL}/${projectDetails[0].cover}` : DefaultCover} alt="Cover Image" />

      <div className='px-16 flex flex-col items-center gap-4'>
        <h2 className='text-3xl font-bold text-center'>{projectDetails[0]?.name}</h2>
        <motion.div
          initial={{ width: '45px' }}
          whileInView={{ width: '180px' }}
          transition={{
            duration: 2,
            ease: 'easeInOut'
          }}
          className="h-[3px] bg-[#8ec73f] rounded-full"
        />
        <p className='text-justify'>{projectDetails[0]?.description}</p>
        <NavLink to={`/property-listing/${id}`}><button className='bg-[#8ec73f] text-white p-2 rounded hover:scale-105 transition-transform duration-500 ease-in'>View Properties</button></NavLink>
      </div>

      <div className='mx-6 md:mx-16 bg-[#8ec73f] flex flex-col items-center gap-6 p-6'>
        <h2 className='text-center text-white font-bold text-3xl md:text-5xl w-1/2'>Area Plan</h2>
        <img src={projectDetails[0]?.area_plan ? `${import.meta.env.VITE_IMG_BASE_URL}/${projectDetails[0].area_plan}` : DefaultCover} alt="Area Plan" className='h-[65vh]'/>
      </div>

      <div className='px-6 md:px-16 flex flex-col items-center gap-4'>
        <h2 className='text-3xl font-bold text-center'>Gallery</h2>
        <motion.div
          initial={{ width: '25px' }}
          whileInView={{ width: '110px' }}
          transition={{
            duration: 2,
            ease: 'easeInOut'
          }}
          className="h-[3px] bg-[#8ec73f] rounded-full"
        />
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="w-full h-[40vh] lg:h-[65vh]"
        >
          {imagesArray?.length > 0 ? 
            (imagesArray.map((img, index)=>(
              <SwiperSlide key={index}>
                <img src={`${import.meta.env.VITE_IMG_BASE_URL}/${img}` || DefaultCover} alt="Images" className='w-full h-full' />
              </SwiperSlide>
            ))) : (
              <div className='text-center'>
                No Images Yet
              </div>
            )
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Projects