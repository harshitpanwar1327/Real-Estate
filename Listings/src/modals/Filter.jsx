import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { toast } from 'react-toastify'

const categories = ['', 'Residential', 'Commercial', 'Industrial', 'Agricultural'];
const propertyTypes = ['', 'Plot', 'Villa', 'High Rise Apartment', 'Low Rise Apartment', 'Shops', 'SEO', 'Built up', 'Land'];
const bedroomsArray = ['', '1', '2', '3', '4', '5'];
const bathroomsArray = ['', '1', '2', '3', '4', '5'];
const balconiesArray = ['', '1', '2', '3', '4', '5'];
const storesArray = ['', '1', '2', '3', '4', '5'];

const Filter = ({setOpenModal, applyFilter}) => {
  const [category, setCategory] = useState(categories[0]);
  const [propertyType, setPropertyType] = useState(propertyTypes[0]);
  const [bedrooms, setBedrooms] = useState(bedroomsArray[0]);
  const [bathrooms, setBathrooms] = useState(bathroomsArray[0]);
  const [balconies, setBalconies] = useState(balconiesArray[0]);
  const [stores, setStores] = useState(storesArray[0]);
  const [price, setPrice] = useState([2500000, 100000000]);
  const [superArea, setSuperArea] = useState([250, 10000]);
  const [carpetArea, setCarpetArea] = useState([250, 10000]);

  const handleCategoriesChange = (event, newValue) => {
    setCategory(categories[newValue]);
  };

  const selectedCategoriesIndex = categories.indexOf(category);

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

    const handleBalconiesChange = (event, newValue) => {
    setBalconies(bathroomsArray[newValue]);
  };

  const selectedBalconiesArrayChange = balconiesArray.indexOf(balconies);

    const handleStoresChange = (event, newValue) => {
    setStores(storesArray[newValue]);
  };

  const selectedStoresArrayChange = storesArray.indexOf(stores);

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleSuperAreaChange = (event, newValue) => {
    setSuperArea(newValue);
  };

  const handleCarpetAreaChange = (event, newValue) => {
    setCarpetArea(newValue);
  };

  const handleFilter = (e) => {
    e.preventDefault();

    try {
      applyFilter({category, propertyType, bedrooms, bathrooms, balconies, stores, minPrice: price[0], maxPrice: price[1], minSuperArea: superArea[0], maxSuperArea: superArea[1], minCarpetArea: carpetArea[0], maxCarpetArea: carpetArea[1]});
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

        <h2 className='font-semibold'>Categories</h2>
        <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 787, lg: 1024 }, bgcolor: 'background.paper' }} className="border border-[#cdcdcd] rounded-md">
          <Tabs
            value={selectedCategoriesIndex}
            onChange={handleCategoriesChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {categories.map((type, index) => (
              <Tab key={index} label={type===''? 'All': type} />
            ))}
          </Tabs>
        </Box>
        <hr className='text-[#cdcdcd]'/>

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
          <Box sx={{ width: '100%' }}>
            <Slider
              value={price}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={2500000}
              max={100000000}
              step={2500000}
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Min: ₹{price[0].toLocaleString()}</span>
              <span>Max: ₹{price[1].toLocaleString()}</span>
            </div>
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
        <hr className='text-[#cdcdcd]'/>

        <h2 className='font-semibold'>Balconies</h2>
        <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 787, lg: 1024 }, bgcolor: 'background.paper' }} className="border border-[#cdcdcd] rounded-md">
          <Tabs
            value={selectedBalconiesArrayChange}
            onChange={handleBalconiesChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {balconiesArray.map((data, index) => (
              <Tab key={index} label={data===''? 'Any': data} />
            ))}
          </Tabs>
        </Box>
        <hr className='text-[#cdcdcd]'/>

        <h2 className='font-semibold'>Stores</h2>
        <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 787, lg: 1024 }, bgcolor: 'background.paper' }} className="border border-[#cdcdcd] rounded-md">
          <Tabs
            value={selectedStoresArrayChange}
            onChange={handleStoresChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {storesArray.map((data, index) => (
              <Tab key={index} label={data===''? 'Any': data} />
            ))}
          </Tabs>
        </Box>
        <hr className='text-[#cdcdcd]'/>

        <h2 className='font-semibold'>Super Area</h2>
        <div className="py-4">
          <Box sx={{ width: '100%' }}>
            <Slider
              value={superArea}
              onChange={handleSuperAreaChange}
              valueLabelDisplay="auto"
              min={250}
              max={10000}
              step={250}
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Min: {superArea[0].toLocaleString()} sq.ft.</span>
              <span>Max: {superArea[1].toLocaleString()} sq.ft.</span>
            </div>
          </Box>
        </div>

        <h2 className='font-semibold'>Carpet Area</h2>
        <div className="py-4">
          <Box sx={{ width: '100%' }}>
            <Slider
              value={carpetArea}
              onChange={handleCarpetAreaChange}
              valueLabelDisplay="auto"
              min={250}
              max={10000}
              step={250}
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Min: {carpetArea[0].toLocaleString()} sq.ft.</span>
              <span>Max: {carpetArea[1].toLocaleString()} sq.ft.</span>
            </div>
          </Box>
        </div>

        <button className='bg-[#106c50] text-white py-2 rounded cursor-pointer'>Apply Filter</button>
      </form>
    </div>
  )
}

export default Filter