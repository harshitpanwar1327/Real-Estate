import React from 'react'
import { useState, useEffect } from 'react'
import Menubar from '../../components/Menubar'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { motion } from 'motion/react'
import API from '../../util/Api.js'
import DeleteIcon from '@mui/icons-material/Delete'
import Swal from 'sweetalert2'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Enquiries = () => {
  let [search, setSearch] = useState('');
  let [enquiryData, setEnquiryData] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [totalData, setTotalData] = useState(1);
  let itemsPerPage = 15;

  let fetchEnquiries = async(currentPage, itemsPerPage)=>{
    try {
      let response = await API.get(`/enquiry/enquiries?page=${currentPage}&limit=${itemsPerPage}&search=${search}`);
      setEnquiryData(response.data.data);
      setTotalData(response.data.total);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchEnquiries(currentPage, itemsPerPage);
  },[currentPage, search]);

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
          let response = await API.delete(`/enquiry/enquiries/${id}`);
          fetchEnquiries(currentPage, itemsPerPage);
          Swal.fire({
            title: "Deleted!",
            text: "Project has been deleted.",
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
    <div className='grow flex flex-col gap-2'>
      <Menubar heading='Enquiries' projectButton={false} propertyButton={false}/>
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
              <th className='text-start text-[#4a3f99] p-2'>Name</th>
              <th className='text-start text-[#4a3f99] p-2'>Email</th>
              <th className='text-start text-[#4a3f99] p-2'>Phone No.</th>
              <th className='text-start text-[#4a3f99] p-2'>Subject</th>
              <th className='text-start text-[#4a3f99] p-2'>Message</th>
              <th className='text-start text-[#4a3f99] p-2'>Delete</th>
            </tr>
          </thead>
          <tbody>
           {enquiryData.map((data,index)=>(
              <tr className='hover:bg-[#f8f7ff] border-b border-[#848484]' key={index}>
                <td className='p-2'>{data.name}</td>
                <td className='p-2'>{data.email}</td>
                <td className='p-2'>{data.phone}</td>
                <td className='p-2'>{data.subject}</td>
                <td className='p-2'>{data.message}</td>
                <td className='p-2'><DeleteIcon className='cursor-pointer text-red-500 hover:text-red-700' onClick={()=>handleDelete(data.id)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Stack spacing={2} className='pb-2'>
        <Pagination count={Math.ceil(totalData/itemsPerPage)} page={currentPage} onChange={handlePageChange} color="primary" />
      </Stack>
    </div>
  )
}

export default Enquiries