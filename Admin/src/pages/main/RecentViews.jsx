import React from 'react'
import Menubar from '../../components/Menubar'

const RecentViews = () => {
  return (
    <div className='grow flex flex-col gap-2'>
      <Menubar heading='Recent Views' projectButton={false} propertyButton={false} />
      <div className='flex justify-center items-center bg-white rounded grow'>
        <h1>Coming Soon...</h1>
      </div>
    </div>
  )
}

export default RecentViews