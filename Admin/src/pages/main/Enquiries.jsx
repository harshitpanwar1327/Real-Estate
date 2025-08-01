import React from 'react'
import Menubar from '../../components/Menubar'

const Enquiries = () => {
  return (
    <div className='grow flex flex-col'>
      <Menubar heading='Enquiries' projectButton={false} propertyButton={false}/>
    </div>
  )
}

export default Enquiries