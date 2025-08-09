import React from 'react'
import {motion} from 'motion/react'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <motion.div className='flex lg:hidden flex-col bg-white shadow-md w-full absolute top-15 left-0 z-10'
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{type: 'spring', stiffness: 100, damping: 15, delay: 0.2}}
    >
        <NavLink to='/projects' className="!text-black p-4 border-b border-[#cdcdcd]">Projects</NavLink>
        <NavLink to='/properties' className="!text-black p-4 border-b border-[#cdcdcd]">Properties</NavLink>
        <NavLink to='/enquiries' className="!text-black p-4">Enquiries</NavLink>
    </motion.div>
  )
}

export default MobileNavigation