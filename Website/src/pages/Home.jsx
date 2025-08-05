import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Home = () => {
  return (
    <div className='w-screen '>
      <div className='pt-30'>
        <iframe width="560" height="360" src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=R-Bf85_3ZSfkdzwF&amp;start=10" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  className='w-screen'></iframe>
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
      
      <div className="h-screen w-full mt-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-[85vh]"
        >
          <SwiperSlide>
            <div className="flex items-center justify-center h-full text-8xl font-semibold bg-[url(/src/assets/luxe-living.jpg)] bg-cover bg-center text-white">
              Luxe Living
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-full text-8xl font-semibold bg-[url(/src/assets/thrive-more.jpg)] bg-cover bg-center text-white">
              Thrive More
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-full text-8xl font-semibold bg-[url(/src/assets/industrial.jpg)] bg-cover bg-center text-white">
              Industrial Power House
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-full text-8xl font-semibold bg-[url(/src/assets/redefining.jpg)] bg-cover bg-center text-white">
              Redefining Retail
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}

export default Home