import { useState, useEffect } from 'react'
import API from '../../util/Api.js'
import Menubar from '../../components/Menubar'
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import EditProperty from '../../modals/EditProperty.jsx'
import Swal from 'sweetalert2'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { motion } from 'motion/react'
import { toast } from 'react-toastify'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

const Properties = () => {
  let [propertyData, setPropertyData] = useState([]);
  let [openEditModal, setOpenEditModal] = useState(false);
  let [selectedProperty, setSelectedProperty] = useState({});
  let [search, setSearch] = useState('');
  let [totalData, setTotalData] = useState(1);
  let [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage = 15;

  let fetchProperties = async (currentPage, itemsPerPage, search) => {
    try {
      let response = await API.post(`/property/get-properties`, {
        page: currentPage,
        limit: itemsPerPage,
        search: search || '',
        propertyType: '',
        bedrooms: '',
        bathrooms: ''
      });
      setPropertyData(response.data.data);
      setTotalData(response.data.total);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    setCurrentPage(1);
    fetchProperties(currentPage, itemsPerPage, search);
  }, [search])

  useEffect(()=>{
    fetchProperties(currentPage, itemsPerPage, search);
  }, [currentPage]);

  let handleEdit = (property)=>{
    setOpenEditModal(true);
    setSelectedProperty(property);
  }

  let handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          let response = await API.delete(`/property/properties/${id}`);
          fetchProperties(currentPage, itemsPerPage, search);
          Swal.fire({
            title: "Deleted!",
            text: "Property has been deleted.",
            icon: "success"
          });
        }
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Property not deleted!');
    }
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  }

  return (
    <div className='grow flex flex-col gap-2'>
      <Menubar heading='Properties' projectButton={false} propertyButton={true} fetchProperties={()=>fetchProperties(currentPage, itemsPerPage, search)}/>

      <div className='mx-2 flex gap-2'>
        <div className='w-1/3 py-1 bg-white rounded-md rounded-tr-4xl flex justify-center items-center gap-2'>
          <input type="text" placeholder='Search here...' name='search' id='search' value={search} onChange={(e)=>setSearch(e.target.value)} className='w-1/2 p-1 border border-[#cdcdcd] rounded focus-visible:outline-0'/>
          <button className='bg-blue-500 hover:bg-blue-700 text-white p-1 rounded'><SearchRoundedIcon/></button>
        </div>
        <div className='w-2/3 bg-[#fdc940] rounded-md rounded-bl-4xl flex justify-center items-center font-semibold'>
          <motion.p
            animate={{ x: ['-50px', '50px', '-50px'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            PROPERTY SHELL
          </motion.p>
        </div>
      </div>

      <div className='mx-2 p-2 bg-white rounded-md grow overflow-auto'>
        <table className='w-full'>
          <thead>
            <tr className='bg-[#f5f3ff] border-b border-[#434343]'>
              <th className='text-start text-[#4a3f99] p-2'>Title</th>
              <th className='text-start text-[#4a3f99] p-2'>Location</th>
              <th className='text-start text-[#4a3f99] p-2'>Property type</th>
              <th className='text-start text-[#4a3f99] p-2'>Price</th>
              <th className='text-start text-[#4a3f99] p-2'>Gallery</th>
              <th className='text-start text-[#4a3f99] p-2'>Edit</th>
              <th className='text-start text-[#4a3f99] p-2'>Delete</th>
            </tr>
          </thead>
          <tbody>
           {propertyData.map((data,index)=>(
              <tr className='hover:bg-[#f8f7ff] border-b border-[#848484]' key={index}>
                <td className='p-2'>{data.title}</td>
                <td className='p-2'>{data.location}</td>
                <td className='p-2'>{data.property_type}</td>
                <td className='p-2'>{data.price}</td>
                <td className="p-2"><PhotoCameraBackIcon className='cursor-pointer text-pink-500 hover:text-pink-700'/></td>
                <td className='p-2'><ModeEditIcon className='cursor-pointer text-green-500 hover:text-green-700' onClick={()=>handleEdit(data)}/></td>
                <td className='p-2'><DeleteIcon className='cursor-pointer text-red-500 hover:text-red-700' onClick={()=>handleDelete(data.id)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openEditModal && <EditProperty setOpenEditModal={setOpenEditModal} selectedProperty={selectedProperty} fetchProperties={()=>fetchProperties(currentPage, itemsPerPage, search)}/>}

      <Stack spacing={2} className='pb-2'>
        <Pagination count={Math.ceil(totalData/itemsPerPage)} page={currentPage} onChange={handlePageChange} color="primary" />
      </Stack>
    </div>
  )
}

export default Properties