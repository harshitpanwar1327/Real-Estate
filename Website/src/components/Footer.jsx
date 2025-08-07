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
    <div className="bg-[#171D23] text-white flex flex-col gap-6">
      <div className="p-6 grid grid-cols-5 gap-6">
        <div className='flex flex-col gap-4'>
          <img src={logo} alt="Property Shell" width={120} className='rounded'/>
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

        <div className='flex flex-col gap-4'>
          <h2 className="text-xl text-[#CFA336] font-semibold">Address</h2>
          <div className="flex items-center gap-4">
            <LocationPinIcon/>
            <div>
              <h2 className='text-xl'>Office</h2>
              <p>SCO 2A, First Floor, Madhya Marg, Sector 7-C, Chandigarh, 160019</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <PhoneIcon/>
            <div>
              <h2 className='text-xl'>Phone</h2>
              <p>+91 9876543210</p>
              <p>+91 9786534210</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <EmailRoundedIcon/>
            <div>
              <h2 className='text-xl'>Email</h2>
              <p>contact@propertyshell.com</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-md col-start-5">
          <iframe
            title="Old Seelampur Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.07240379927!2d77.26728935!3d28.6786729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd85d1e5e98b%3A0x5c24c7e360482e42!2s9%2F4853%2C%20Old%20Seelampur%2C%20Shahdara%2C%20Delhi%2C%20110031!5e0!3m2!1sen!2sin!4v1692969000000!5m2!1sen!2sin"
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