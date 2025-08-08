import p1 from '../assets/Project1.png'
import p2 from '../assets/Project2.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import LandingVideo from '../assets/LandingVideo.mp4'

const Home = () => {
  return (
    <>
      <div className='relative mt-15'>
        <video src={LandingVideo} autoPlay muted loop playsInline style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      </div>

      <div>
        <section className="py-10 px-20 bg-white">
          <h2 className="text-3xl font-bold text-center mb-2">Our Projects</h2>
          <div className="w-[12rem] h-[2px] bg-yellow-500 mx-auto mb-6" />
  
          <p className="text-center mx-auto font-semibold text-gray-600 mb-12">
            We specialize in offering top-tier real estate solutions in Mohali, Punjab. Whether you are seeking a commercial space, a residential haven, or an industrial plot, our diverse portfolio is designed to cater to all your property needs with excellence and integrity.
          </p>
  
          <div className="grid grid-cols-2 gap-8 ">
  
            <div className="flex flex-col">
              <img src={p1} alt="img" />
              <div className="mt-4 border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-yellow-600">GMI IT Tower</h3>
                <p className="text-sm text-gray-600">Office Spaces - Available for Lease</p>
                <p className="text-sm text-gray-600">I-26 Sector 83 A, Mohali</p>
              </div>
            </div>
  
            <div className="flex flex-col">
              <img src={p2} alt="img" />
              <div className="mt-4 border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-yellow-600">GMI Business Park</h3>
                <p className="text-sm text-gray-600">PBRERA-SAS81-PMO168</p>
                <p className="text-sm text-gray-600">COMMERCIAL | INDUSTRIAL</p>
                <p className="text-sm text-gray-600">Sector 102 A, IT City Road, Mohali</p>
              </div>
            </div>
  
            <div className="flex flex-col">
              <img src={p2} alt="img" />
              <div className="mt-4 border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-yellow-600">GMI Business Park</h3>
                <p className="text-sm text-gray-600">PBRERA-SAS81-PMO168</p>
                <p className="text-sm text-gray-600">COMMERCIAL | INDUSTRIAL</p>
                <p className="text-sm text-gray-600">Sector 102 A, IT City Road, Mohali</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <img src={p2} alt="img" />
              <div className="mt-4 border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-yellow-600">GMI Business Park</h3>
                <p className="text-sm text-gray-600">PBRERA-SAS81-PMO168</p>
                <p className="text-sm text-gray-600">COMMERCIAL | INDUSTRIAL</p>
                <p className="text-sm text-gray-600">Sector 102 A, IT City Road, Mohali</p>
              </div>
            </div>
          </div>
        </section>
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