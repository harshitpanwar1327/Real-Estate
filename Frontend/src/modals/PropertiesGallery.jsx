import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import API from '../utils/API'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

const PropertiesGallery = ({setOpenModal, option}) => {
  let {id} = useParams();
  let [images, setImages] = useState([]);
  let [floorPlan, setFloorPlan] = useState(null);

  const fetchImages = async () => {
    try {
      let response = await API.get(`/property/property-details/${id}`);
      setImages(JSON.parse(response.data.data[0]?.images) || []);
      setFloorPlan(response.data.data[0]?.area_plan || null);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchImages();
  }, [id]);

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black z-100 flex justify-center items-center' onClick={()=>setOpenModal(false)}>
      <div className='max-w-[90vw] max-h-[90vh]' onClick={(e)=>e.stopPropagation()}>
        {option === 'images' && (
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          >
            {images.length > 0 ? (
              images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`${import.meta.env.VITE_IMG_BASE_URL}/${img}`}
                    alt={`Property Image ${index + 1}`}
                    className="max-h-[90vh] max-w-[90vw] object-contain"
                  />
                </SwiperSlide>
              ))
            ) : (
              <p className="text-white">No images available</p>
            )}
          </Swiper>
        )}

        {option === 'areaPlan' && floorPlan && (
          <img
            src={`${import.meta.env.VITE_IMG_BASE_URL}/${floorPlan}`}
            alt="Area Plan"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        )}

        {option === 'areaPlan' && !floorPlan && (
          <p className="text-white">No floor plan available</p>
        )}
      </div>
    </div>
  )
}

export default PropertiesGallery