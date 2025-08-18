import MissionImg from '../assets/HighriseBuilding.jpg'
import VissionImg from '../assets/TechOpenSpace.jpg'

const AboutUs = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[50vh] bg-[url(/src/assets/AboutUs.jpg)] bg-cover bg-center mt-20"></div>

      <div className="px-6 md:px-16 py-16 bg-white flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-3xl font-bold">CREATING BETTER</h2>
            <h2 className="text-[#8ec73f] text-3xl font-bold">COMMUNITIES</h2>
          </div>
          <p className="text-gray-500 text-justify">At <span className="font-semibold">Property Shell</span>, we believe that real estate is more than just buildings—it’s about creating vibrant communities where people can thrive. Over the last 5+ years, we have delivered premium residential and commercial spaces that blend innovative design, world-class amenities, and sustainable practices. Our developments are not just structures; they are thoughtfully crafted environments that inspire better living and foster meaningful connections. With a deep understanding of modern lifestyles and evolving business needs, we are redefining urban living one project at a time.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <img src={MissionImg} alt="Property Shell" className="w-full rounded shadow-md"/>
          <div className='flex flex-col gap-4'>
            <h2 className="text-[#8ec73f] text-3xl font-bold">OUR MISSION</h2>
            <p className="text-gray-500 text-justify">Our mission is simple yet powerful — to create spaces that enrich lives and empower businesses. At <span className="text-red-500 font-semibold">Property Shell</span>, we are committed to developing projects that balance functionality, aesthetics, and sustainability. We strive to understand the unique aspirations of our clients, translating them into tailor-made spaces that reflect quality, innovation, and trust. From residential homes that nurture families to commercial hubs that boost economic growth, every project we undertake is built with integrity and a long-term vision.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className='flex flex-col gap-4'>
            <h2 className="text-[#8ec73f] text-3xl font-bold">OUR VISSION</h2>
            <p className="text-gray-500 text-justify">Our vision is to be recognized as a leading force in shaping modern urban landscapes, where people and businesses can flourish in harmony. We aspire to expand our footprint across India and beyond, delivering developments that set new benchmarks in quality and design. By embracing cutting-edge technology, green building practices, and community-driven planning, we aim to create a legacy of sustainable, future-ready spaces that not only meet today’s needs but also anticipate tomorrow’s possibilities.</p>
          </div>
          <img src={VissionImg} alt="Property Shell Project" className="w-full rounded shadow-md"/>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          <div className='flex flex-col gap-4 md:col-span-2 lg:col-span-4'>
            <h2 className="text-2xl font-bold text-center">INNOVATING SPACES <span className='text-[#8ec73f]'>FOR A BETTER FUTURE</span></h2>
            <p className="text-gray-500 text-justify">We believe that great spaces go beyond walls and ceilings—they inspire progress, foster collaboration, and promote well-being. Our designs combine architectural excellence with sustainable solutions, ensuring that every square foot serves a greater purpose. From prime city locations to eco-conscious construction, our focus remains on delivering lasting value to our customers and communities.</p>
          </div>

          <div className="flex items-end justify-center p-2 h-[70vh] md:h-[40vh] lg:h-[70vh] bg-[url(/src/assets/Location.jpg)] bg-cover bg-center rounded hover:items-center group">
            <h2 className='text-white lg:text-xl group-hover:text-3xl font-bold text-center'>PRIME LOCATION</h2>
          </div>
          <div className="flex items-end justify-center p-2 h-[70vh] md:h-[40vh] lg:h-[70vh] bg-[url(/src/assets/BusinessHub.jpg)] bg-cover bg-center rounded hover:items-center group">
            <h2 className='text-white lg:text-xl group-hover:text-3xl font-bold text-center'>GLOBAL BUSINESS HUB</h2>
          </div>
          <div className="flex items-end justify-center p-2 h-[70vh] md:h-[40vh] lg:h-[70vh] bg-[url(/src/assets/Infrastructure.png)] bg-cover bg-center rounded hover:items-center group">
            <h2 className='text-white lg:text-xl group-hover:text-3xl font-bold text-center'>CONPREHENSIVE INFRASTRUCTURE</h2>
          </div>
          <div className="flex items-end justify-center p-2 h-[70vh] md:h-[40vh] lg:h-[70vh] bg-[url(/src/assets/Innovation.jpg)] bg-cover bg-center rounded hover:items-center group">
            <h2 className='text-white lg:text-xl group-hover:text-3xl font-bold text-center'>SUSTAINABILITY AND INNOVATION</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs