import React, { useState, useEffect } from 'react'
import Login from '../modals/Login'

const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 220);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full py-4 px-12 flex items-center justify-between ${scrolled ? 'backdrop-blur-md bg-white/30': 'bg-transparent'}`}>
      <h2 className='text-2xl font-semibold'>Property Shell</h2>
      <p className="font-semibold cursor-pointer border-b-3 border-transparent hover:border-green-500 inline-block" onClick={()=>setOpenModal(true)}>Login</p>
      {openModal && <Login setOpenModal={setOpenModal} />}
    </div>
  )
}

export default Navigation