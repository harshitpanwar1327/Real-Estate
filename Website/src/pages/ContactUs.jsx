import React, { useRef } from 'react'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const ContactUs = () => {
  const form = useRef();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.success('Message not sent!');
        },
      );
  }

  return (
    <div className='mt-25'>
      <h2 className='text-center text-4xl font-bold tracking-wide'>Get in Touch</h2>
      <div className='flex justify-center gap-8 m-10'>
        <div className='w-[35vw] flex flex-col items-center gap-4'>
          <h2 className='font-semibold text-xl'>Speak with Our Team</h2>
          <div className='flex flex-col items-center gap-2 bg-white border border-[#cdcdcd] rounded-lg shadow-md p-2 min-w-[65%]'>
            <MailOutlinedIcon/>
            <h3 className='font-bold'>Email</h3>
            <p className='text-sm text-gray-500'>harshitpanwar1327@gmail.com</p>
            <a href="mailto:harshitpanwar1327@gmail.com"><p className='text-sm text-gray-500 font-semibold cursor-pointer'>Mail <ArrowForwardIcon sx={{fontSize: '14px'}}/></p></a>
          </div>
          <div className='flex flex-col items-center gap-2 bg-white border border-[#cdcdcd] rounded-lg shadow-md p-2 min-w-[65%]'>
            <WhatsAppIcon/>
            <h3 className='font-bold'>Whatsapp</h3>
            <p className='text-sm text-gray-500'>+91 8595994381</p>
            <a href="https://wa.me/918595994381" target='_blank'><p className='text-sm text-gray-500 font-semibold cursor-pointer'>Chat <ArrowForwardIcon sx={{fontSize: '14px'}}/></p></a>
          </div>
        </div>

        <form className='w-[45vw] flex flex-col items-center gap-4' ref={form} onSubmit={handleSendMessage}>
          <h2 className='font-semibold text-xl'>Submit Your Query</h2>
          <input type="text" name='user_name' id='name' placeholder='Enter your name' className='border border-[#7c7c7c] rounded-lg p-2 w-[50%]'/>
          <input type="email" name='user_email' id='email' placeholder='Enter your email' className='border border-[#7c7c7c] rounded-lg p-2 w-[50%]'/>
          <input type="number" name="user_phone" id="phone" placeholder='Enter your phone number*' className='border border-[#7c7c7c] rounded-lg p-2 w-[50%]' required/>
          <textarea name="message" id="message" placeholder='Enter your message*' className='border border-[#7c7c7c] rounded-lg p-2 w-[50%]' required></textarea>
          <button className='bg-black text-white p-2 flex items-center gap-2 rounded cursor-pointer'>Send Message <SendRoundedIcon sx={{fontSize: '16px', transform: 'rotate(-45deg)'}}/></button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs