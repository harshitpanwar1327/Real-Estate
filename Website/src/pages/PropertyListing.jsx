import React, {useState, useEffect} from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import PropertyCard from '../components/PropertyCard'
import API from '../utils/API'
import Filter from '../modals/Filter'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useParams } from 'react-router-dom'

const PropertyListing = () => {
  let {id} = useParams();
  const [propertiesData, setPropertiesData] = useState([]);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [totalData, setTotalData] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [filters, setFilters] = useState({category: '', propertyType: '', bedrooms: '', bathrooms: '', balconies: '', stores: '', minPrice: 0, maxPrice: 1000000000, minSuperArea: 0, maxSuperArea: 100000, minCarpetArea: 0, maxCarpetArea: 100000});

  const fetchProperties = async (currentPage, itemsPerPage, search, filters = {}) => {
    try {
      let response = await API.post(`/property/get-properties/${id}`, {
        page: currentPage,
        limit: itemsPerPage,
        search,
        category: filters.category || '',
        propertyType: filters.propertyType || '',
        bedrooms: filters.bedrooms || '',
        bathrooms: filters.bathrooms || '',
        balconies: filters.balconies || '',
        stores: filters.stores || '',
        minPrice: filters.minPrice,
        maxPrice: filters.maxPrice,
        minSuperArea: filters.minSuperArea,
        maxSuperArea: filters.maxSuperArea,
        minCarpetArea: filters.minCarpetArea,
        maxCarpetArea: filters.maxCarpetArea
      });
      setPropertiesData(response.data.data);
      setTotalData(response.data.total);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    setCurrentPage(1);
    fetchProperties(1, itemsPerPage, search, filters);
  }, [search, filters]);
  
  useEffect(()=>{
    fetchProperties(currentPage, itemsPerPage, search, filters);
  }, [currentPage]);

  const applyFilter = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
    fetchProperties(1, itemsPerPage, search, filters);
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  }

  return (
    <>
      <div className='flex w-screen h-[65vh] md:h-[60vh] lg:h-screen overflow-auto mt-20'>
        <div className='w-screen h-[45vh] lg:h-[60vh] bg-[url(/src/assets/ListingCover.jpg)] bg-cover bg-center flex justify-center items-center'>
          <h2 className="bg-black/40 text-white font-bold text-3xl md:text-5xl p-4 rounded">Know your next move</h2>
        </div>
        <div className="absolute top-[60vh] md:top-[50vh] lg:top-[75vh] left-1/2 w-4/5 md:w-2/3 py-8 md:py-16 bg-white -translate-x-1/2 -translate-y-1/2 rounded shadow-md flex justify-center items-center">
          <div className='w-4/5 md:w-2/3 md:p-3 border-t-2 border-l-2 border-b-2 border-gray-300 flex justify-between'>
            <input className='w-2/3 focus-visible:outline-0' type="text" placeholder='Try a location or title' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button className='border text-[#5c5c5c] py-1 px-2 rounded cursor-pointer' onClick={()=>setOpenModal(true)}><TuneRoundedIcon /> Filters</button>
          </div>
          <button className='hidden md:block bg-green-600 text-white text-xl font-semibold p-4 border-2 border-green-600 cursor-pointer flex items-center gap-1'><SearchRoundedIcon />Search</button>
        </div>
        {openModal && <Filter setOpenModal={setOpenModal} applyFilter={applyFilter} />}
      </div>

      <div className='w-3/4 flex flex-col m-auto'>
        <h2 className='text-2xl font-semibold'>Dream Homes</h2>
        <div className='py-4 px-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto'>
          {propertiesData.length > 0 ? (
            propertiesData.map((data, index) => (
              <PropertyCard key={index} data={data}/>
            ))
          ) : (
            <p>No property available</p>
          )}
        </div>
      </div>
      <Stack spacing={2} className='py-4 m-auto'>
        <Pagination count={Math.ceil(totalData/itemsPerPage)} page={currentPage} onChange={handlePageChange} color="primary" />
      </Stack>
    </>
  )
}

export default PropertyListing