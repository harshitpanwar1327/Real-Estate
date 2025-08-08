import React, {useState, useEffect} from "react"
import logo from '../assets/logo.jpeg'
import { NavLink } from 'react-router-dom'
import API from '../utils/API'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import {motion} from 'motion/react'

const NavigationBar = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchProjects = async () => {
    try {
      let response = await API.get('/project/projects-name');
      setProjectsData(response.data.data);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchProjects();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between px-8 py-2 font-semibold z-10">
      <div className="hidden md:flex items-center gap-8">
        <NavLink to={'/home'}><h2 className="hover:text-[#8ec73f] transition-colors duration-300">HOME</h2></NavLink>
        <div className="relative group">
          <h2 className="hover:text-[#8ec73f] transition-colors duration-300 cursor-pointer">OUR PROJECTS <span className="inline-block text-sm group-hover:rotate-180 transition-rotate duration-600">&#9660;</span></h2>
          <div className="absolute hidden group-hover:block bg-white border border-[#cdcdcd] shadow-md z-20 min-w-[180px]">
            {projectsData.length > 0 ? (
              projectsData.map((project, index) => (
                <NavLink to={`/projects/${project.name}`} key={index} className="block px-4 py-2 hover:bg-gray-100 hover:text-[#8ec73f] transition-colors duration-200">{project.name}</NavLink>
              ))
            ) : (
              <p className="px-4 py-2 text-gray-400 italic">No projects</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <img src={logo} alt="Logo" width={120} />
      </div>

      <div className="hidden md:flex items-center gap-8">
        <NavLink to={'/about-us'}><h2 className="hover:text-[#8ec73f] transition-colors duration-300">ABOUT US</h2></NavLink>
        <NavLink to={'/contact-us'}><h2 className="hover:text-[#8ec73f] transition-colors duration-300">CONTACT US</h2></NavLink>
      </div>

      <div className="md:hidden" onClick={()=>setIsOpen(!isOpen)}>
        {!isOpen ? <MenuIcon sx={{fontSize: '32px'}} /> : <CloseIcon sx={{fontSize: '32px'}} />}
      </div>
      {isOpen && 
        <motion.div className='flex md:hidden flex-col bg-white w-full absolute top-20 left-0'
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{type: 'spring', stiffness: 100, damping: 15, delay: 0.2}}
        >
          <NavLink to='/home' className="!text-black p-4 border-b">Users</NavLink>
          <NavLink to='/about-us' className="!text-black p-4 border-b">Generate</NavLink>
          <NavLink to='/contact-us' className="!text-black p-4 border-b">Licenses</NavLink>
        </motion.div>
      }
    </div>
  );
};

export default NavigationBar;