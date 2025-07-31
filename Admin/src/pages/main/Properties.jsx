import { useState, useEffect } from 'react'
import API from '../../util/Api.js'
import Menubar from '../../components/Menubar'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import EditProperty from '../../modals/EditProperty.jsx'
import Swal from 'sweetalert2'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Properties = () => {
  let [propertyData, setPropertyData] = useState([]);
  let [openEditModal, setOpenEditModal] = useState(false);
  let [selectedProperty, setSelectedProperty] = useState({});
  let [totalData, setTotalData] = useState(1);
  let [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage = 15;

  let fetchProperties = async (currentPage, itemsPerPage) => {
    try {
      let response = await API.get(`/property/properties?page=${currentPage}&limit=${itemsPerPage}`);
      setPropertyData(response.data.data);
      setTotalData(response.data.total);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchProperties(currentPage, itemsPerPage);
  }, [currentPage]);

  let handleEdit = (property)=>{
    setOpenEditModal(true);
    setSelectedProperty(property);
    fetchProperties(currentPage, itemsPerPage);
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
          fetchProperties(currentPage, itemsPerPage);
          Swal.fire({
            title: "Deleted!",
            text: "Property has been deleted.",
            icon: "success"
          });
        }
      });

    } catch (error) {
        console.log(error);
    }
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  }

  return (
    <div className='grow flex flex-col gap-4'>
      <Menubar heading='Properties' projectButton={false} propertyButton={true}/>
      <div className='mx-4 p-2 bg-white rounded-md grow'>
        <table className='w-full'>
          <thead>
            <tr className='bg-[#f5f3ff] border-b border-[#434343]'>
              <th className='text-start text-[#4a3f99] p-2'>Title</th>
              <th className='text-start text-[#4a3f99] p-2'>Location</th>
              <th className='text-start text-[#4a3f99] p-2'>Property type</th>
              <th className='text-start text-[#4a3f99] p-2'>Price</th>
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
                <td className='p-2'><ModeEditIcon className='cursor-pointer text-green-500 hover:text-green-700' onClick={()=>handleEdit(data)}/></td>
                <td className='p-2'><DeleteIcon className='cursor-pointer text-red-500 hover:text-red-700' onClick={()=>handleDelete(data.id)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openEditModal && <EditProperty setOpenEditModal ={setOpenEditModal} selectedProperty={selectedProperty} fetchProperties={fetchProperties}/>}
      <Stack spacing={2} className='p-4'>
        <Pagination count={Math.ceil(totalData/itemsPerPage)} page={currentPage} onChange={handlePageChange} color="primary" />
      </Stack>
    </div>
  )
}

export default Properties