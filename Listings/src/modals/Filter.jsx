import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { toast } from 'react-toastify'

const propertyTypes = ['', 'Apartment', 'Villa', 'Plot'];
const bedroomsArray = ['', '1', '2', '3', '4', '5'];
const bathroomsArray = ['', '1', '2', '3', '4', '5'];
function priceValue(value) {
  return `Rs. ${value}`;
}

const Filter = ({setOpenModal, applyFilter}) => {
  const [propertyType, setPropertyType] = useState(propertyTypes[0]);
  const [bedrooms, setBedrooms] = useState(bedroomsArray[0]);
  const [bathrooms, setBathrooms] = useState(bathroomsArray[0]);
  const [price, setPrice] = useState([2000000, 50000000]);

  const handlePropertyTypeChange = (event, newValue) => {
    setPropertyType(propertyTypes[newValue]);
  };

  const selectedPropertyTypeIndex = propertyTypes.indexOf(propertyType);

  const handleBedroomsChange = (event, newValue) => {
    setBedrooms(bedroomsArray[newValue]);
  };

  const selectedBedroomsArrayChange = bedroomsArray.indexOf(bedrooms);

  const handleBathroomsChange = (event, newValue) => {
    setBathrooms(bathroomsArray[newValue]);
  };

  const selectedBathroomsArrayChange = bathroomsArray.indexOf(bathrooms);

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleFilter = (e) => {
    e.preventDefault();

    try {
      applyFilter({propertyType, bedrooms, bathrooms});
      toast.success('Filter applied');
      setOpenModal(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed to apply filter');
    }
  }

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-white/90 z-100 flex justify-center overflow-y-auto'>
      <form className='w-2/3 p-4 flex flex-col gap-5' onSubmit={handleFilter}>
        <p className='cursor-pointer self-end' onClick={()=>setOpenModal(false)}>Close X</p>
        <h2 className='font-semibold'>Property Types</h2>
        <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 787, lg: 1024 }, bgcolor: 'background.paper' }} className="border border-[#cdcdcd] rounded-md">
          <Tabs
            value={selectedPropertyTypeIndex}
            onChange={handlePropertyTypeChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {propertyTypes.map((type, index) => (
              <Tab key={index} label={type===''? 'All': type} />
            ))}
          </Tabs>
        </Box>
        <hr className='text-[#cdcdcd]'/>

        <h2 className='font-semibold'>Price</h2>
        <div className="py-4">
          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => 'Price range'}
              value={price}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              getAriaValueText={priceValue}
            />
          </Box>
        </div>
        <hr className='text-[#cdcdcd]'/>

        <h2 className='font-semibold'>Bedrooms</h2>
        <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 787, lg: 1024 }, bgcolor: 'background.paper' }} className="border border-[#cdcdcd] rounded-md">
          <Tabs
            value={selectedBedroomsArrayChange}
            onChange={handleBedroomsChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {bedroomsArray.map((data, index) => (
              <Tab key={index} label={data===''? 'Any': data} />
            ))}
          </Tabs>
        </Box>
        <hr className='text-[#cdcdcd]'/>

        <h2 className='font-semibold'>Bathrooms</h2>
        <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 787, lg: 1024 }, bgcolor: 'background.paper' }} className="border border-[#cdcdcd] rounded-md">
          <Tabs
            value={selectedBathroomsArrayChange}
            onChange={handleBathroomsChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {bathroomsArray.map((data, index) => (
              <Tab key={index} label={data===''? 'Any': data} />
            ))}
          </Tabs>
        </Box>

        <button className='bg-[#106c50] text-white py-2 rounded cursor-pointer'>Apply Filter</button>
      </form>
    </div>
  )
}

export default Filter