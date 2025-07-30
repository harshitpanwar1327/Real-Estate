import React, {useState, useEffect} from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import PropertyCard from '../components/PropertyCard'
import API from '../utils/API'

const PropertyListing = () => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [search, setSearch] = useState('');

  const fetchProperties = async () => {
    try {
      let response = await API.get('/property/properties');
      setPropertiesData(response.data.data);
    } catch (error) {
      console.log(response?.error?.data?.message || error);
    }
  }

  const filteredData = propertiesData.filter(data => data.location.toLowerCase().includes(search.toLowerCase()) || data.title.toLowerCase().includes(search.toLowerCase()));
  
  useEffect(()=>{
    fetchProperties();
  }, []);

  return (
    <>
      <div className='flex w-screen h-screen overflow-auto'>
        <div className='w-screen h-2/3 bg-[url(/src/assets/listing-cover-image.jpg)] bg-cover bg-center flex justify-center items-center'>
          <h1 className="bg-black/40 text-white p-4 rounded">Know your next move</h1>
        </div>
        <div className="absolute top-2/3 left-1/2 w-2/3 py-20 bg-white -translate-x-1/2 -translate-y-1/2 rounded shadow-md flex justify-center items-center">
          <div className='w-2/3 p-3 border-t-2 border-l-2 border-b-2 border-gray-300 flex justify-between'>
            <input className='w-2/3 focus-visible:outline-0' type="text" placeholder='Try a location or property title' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button className='border text-[#5c5c5c] py-1 px-2 rounded cursor-pointer'><TuneRoundedIcon /> Filters</button>
          </div>
          <button className='bg-green-600 text-white text-xl font-semibold p-4 border-2 border-green-600 cursor-pointer flex items-center gap-1'><SearchRoundedIcon />Search</button>
        </div>
      </div>

      <div className='w-2/3 flex flex-col'>
        <h2 className='text-2xl font-semibold'>Dream Homes</h2>
        <div className='py-4 px-1 grid grid-cols-3 gap-10 overflow-x-auto'>
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
              <PropertyCard key={index} data={data}/>
            ))
          ) : (
            <p>No property available</p>
          )}
        </div>
      </div>
    </>
  )
}

export default PropertyListing