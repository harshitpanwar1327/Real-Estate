import p1 from '../assets/TechOpenSpace.jpg'
import { useState, useEffect } from 'react'
import LandingVideo from '../assets/LandingVideo.mp4'
import { motion } from 'motion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import API from '../utils/API'
import RoomRoundedIcon from '@mui/icons-material/RoomRounded'

const Home = () => {
  let [projectsData, setProjectsData] = useState([]);

  const fetchProjects = async () => {
    try {
      let response = await API.get('/project/all-projects');
      setProjectsData(response.data.data);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchProjects();
  }, []);

  return (
    <>
      <div className='relative mt-15'>
        <video src={LandingVideo} autoPlay muted loop playsInline style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      </div>

      <div className="p-10 md:p-15 lg:p-20 min-h-[85vh]">
        <div className="flex flex-col items-center gap-3 mb-15">
          <h2 className="text-3xl font-bold text-center">Our Projects</h2>
          <motion.div
            initial={{ width: '45px' }}
            whileInView={{ width: '180px' }}
            transition={{
              duration: 2,
              ease: 'easeInOut'
            }}
            className="h-[3px] bg-[#8ec73f] rounded-full"
          />
          <p className="text-center font-semibold text-gray-600">From luxurious residences to vibrant commercial hubs, our projects embody elegance, innovation, and comfort — creating spaces where dreams find their address.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.length > 0 ? (
            projectsData.map((project, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <img src={p1} alt="img" className='grayscale hover:grayscale-0 cursor-pointer'/>
                <div className="border-l-4 border-[#8ec73f] pl-4">
                  <h3 className="text-lg font-semibold text-[#8ec73f]">{project.name || 'N/A'}</h3>
                  <p className='text-sm flex items-center gap-1'><RoomRoundedIcon sx={{color: 'red', fontSize: '16px'}}/> {project.location || 'N/A'}</p>
                </div>
              </div>
            ))
          ) : (
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1, 0.8] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="col-span-2 text-center"
            >
              Coming Soon...
            </motion.h1>
          )}
        </div>
      </div>
      
      <div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <div className="flex items-center justify-center h-[50vh] lg:h-[85vh] text-white text-3xl lg:text-5xl font-semibold bg-[url(/src/assets/ModernFurniture.jpg)] bg-cover bg-center">
              <h2 className='p-4 rounded-lg bg-[#0000007a]'>Experience unmatched elegance and comfort</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[50vh] lg:h-[85vh] text-white text-3xl lg:text-5xl font-semibold bg-[url(/src/assets/HighriseBuilding.jpg)] bg-cover bg-center">
              <h2 className='p-4 rounded-lg bg-[#0000007a]'>Designed for a lifestyle that inspires success</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[50vh] lg:h-[85vh] text-white text-3xl lg:text-5xl font-semibold bg-[url(/src/assets/TechOpenSpace.jpg)] bg-cover bg-center">
              <h2 className='p-4 rounded-lg bg-[#0000007a]'>Empowering industries with prime spaces</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[50vh] lg:h-[85vh] text-white text-3xl lg:text-5xl font-semibold bg-[url(/src/assets/PeopleShopping.jpg)] bg-cover bg-center">
              <h2 className='p-4 rounded-lg bg-[#0000007a]'>Modern spaces for a thriving shopping experience</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[50vh] lg:h-[85vh] text-white text-3xl lg:text-5xl font-semibold bg-[url(/src/assets/NatureHouse.jpg)] bg-cover bg-center">
              <h2 className='p-4 rounded-lg bg-[#0000007a]'>Sustainable homes for a better tomorrow</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Home