import { NavLink } from 'react-router-dom'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import RealEstateAgentOutlinedIcon from '@mui/icons-material/RealEstateAgentOutlined'
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined'

const NavigationBar = () => {
  const getNavClass = ({ isActive }) =>
    `px-6 my-8 flex items-center gap-2 transition-all duration-200 ${isActive ? 'border-l-4 border-white !text-white' : 'border-l-4 border-transparent !text-white/70'}`

  return (
    <div className="h-screen min-w-[220px] hidden lg:flex flex-col items-center py-8 bg-black text-white">
      <h2 className="w-full px-6 font-semibold italic text-2xl">PS</h2>
      <div className="grow w-full">
        <NavLink to="/projects" className={getNavClass}>
          <AddCircleOutlineOutlinedIcon /> Projects
        </NavLink>
        <NavLink to="/properties" className={getNavClass}>
          <RealEstateAgentOutlinedIcon /> Properties
        </NavLink>
        <NavLink to="/enquiries" className={getNavClass}>
          <ContactSupportOutlinedIcon /> Enquiries
        </NavLink>
      </div>
    </div>
  )
}

export default NavigationBar