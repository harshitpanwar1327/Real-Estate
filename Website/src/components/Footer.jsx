import logo from '../assets/logo.jpeg'
import { NavLink } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import LocationPinIcon from '@mui/icons-material/LocationPin'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'

const Footer = () => {
  return (
    <div className="bg-[#171D23] mt-4 text-white flex flex-col gap-6">
      <div className="p-6 grid md:grid-rows-2 md:grid-cols-4 lg:grid-rows-1 lg:grid-cols-5 gap-6">
        <div className='flex flex-col gap-4'>
          <img src={logo} alt="Property Shell" width={150} className='rounded'/>
          <p className="font-semibold text-xl">Follow Us On</p>
          <div className="flex gap-6">
            <InstagramIcon sx={{ color: '#CFA336', cursor: 'pointer', transition: 'transform 0.5s', '&:hover': { transform: 'rotate(360deg)' } }} />
            <YouTubeIcon sx={{ color: '#CFA336', cursor: 'pointer', transition: 'transform 0.5s', '&:hover': { transform: 'rotate(360deg)' } }} />
            <FacebookRoundedIcon sx={{ color: '#CFA336', cursor: 'pointer', transition: 'transform 0.5s', '&:hover': { transform: 'rotate(360deg)' } }} />
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className="text-xl text-[#CFA336] font-semibold">Quick Links</h2>
          <NavLink to={'/about-us'}>About Us</NavLink>
          <NavLink to={'/contact-us'}>Contact Us</NavLink>
        </div>

        <div className='flex flex-col gap-4 md:col-span-2'>
          <h2 className="text-xl text-[#CFA336] font-semibold">Address</h2>
          <div className="flex items-center gap-4">
            <LocationPinIcon/>
            <div className='self-start'>
              <h2 className='text-xl'>Office</h2>
              <p>9/A-10, First Floor, Palam Vihar, Sector 3, Gurgaon, 122001</p>
            </div>
          </div>
          <div className="self-start flex items-center gap-4">
            <PhoneIcon/>
            <div>
              <h2 className='text-xl'>Phone</h2>
              <p>+91 8595994381</p>
              <p>+91 9311201990</p>
            </div>
          </div>
          <div className="self-start flex items-center gap-4">
            <EmailRoundedIcon/>
            <div>
              <h2 className='text-xl'>Email</h2>
              <p>harshitpanwar1327@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-md md:col-span-4 lg:col-span-1">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.7933924154113!2d77.0186575502157!3d28.491988022327934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e866299c83%3A0xf8ff44fa59a94962!2sBlock%20A%2C%20Ashok%20Vihar%20Phase%20III%20Extension%2C%20Gurugram%2C%20Haryana%20122006!5e1!3m2!1sen!2sin!4v1754666781514!5m2!1sen!2sin" 
            height={300}
            className="w-full rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="p-6 text-sm font-semibold text-center bg-[#12161B]">
        <p>&copy; 2025 Property Shell || All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer