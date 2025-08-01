import { useState, useEffect } from 'react'
import API from '../../util/Api.js'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import EditProject from '../../modals/EditProject.jsx'
import Menubar from '../../components/Menubar.jsx'
import Swal from 'sweetalert2'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Projects = () => {
  let [projectsData, setProjectsData] = useState([]);
  let [openModal, setOpenModal] = useState(false);
  let [selectedProject, setSelectedProject] = useState({});
  let [currentPage, setCurrentPage] = useState(1);
  let [totalData, setTotalData] = useState(1);
  let itemsPerPage = 15;


  let fetchProjects = async (currentPage, itemsPerPage) => {
    try {
      let response = await API.get(`/project/projects?page=${currentPage}&limit=${itemsPerPage}`);
      setProjectsData(response.data.data);
      setTotalData(response.data.total);
    } catch (error) {
      console.log(response?.error?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchProjects(currentPage, itemsPerPage);
  },[currentPage]);

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
            let response = await API.delete(`/project/projects/${id}`);

            fetchProjects(currentPage, itemsPerPage);
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

  let handleEdit = (project)=>{
    setOpenModal(true);
    setSelectedProject(project);
    fetchProjects(currentPage, itemsPerPage);
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  }

  return (
    <div className='grow flex flex-col gap-4'>
      <Menubar heading='Projects' projectButton={true} propertyButton={false}/>
      <div className='mx-4 p-2 bg-white rounded-md grow overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='bg-[#f5f3ff] border-b border-[#434343]'>
              <th className='text-start text-[#4a3f99] p-2'>Name</th>
              <th className='text-start text-[#4a3f99] p-2'>Location</th>
              <th className='text-start text-[#4a3f99] p-2'>Status</th>
              <th className='text-start text-[#4a3f99] p-2'>Description</th>
              <th className='text-start text-[#4a3f99] p-2'>Edit</th>
              <th className='text-start text-[#4a3f99] p-2'>Delete</th>
            </tr>
          </thead>
          <tbody>
           {projectsData.map((data,index)=>(
              <tr className='hover:bg-[#f8f7ff] border-b border-[#848484]' key={index}>
                <td className='p-2'>{data.name}</td>
                <td className='p-2'>{data.location}</td>
                <td className='p-2'>{data.status}</td>
                <td className='p-2'>{data.description}</td>
                <td className='p-2'><ModeEditIcon className='cursor-pointer text-green-500 hover:text-green-700' onClick={()=>handleEdit(data)}/></td>
                <td className='p-2'><DeleteIcon className='cursor-pointer text-red-500 hover:text-red-700' onClick={()=>handleDelete(data.id)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openModal && <EditProject setOpenModal ={setOpenModal} selectedProject={selectedProject} fetchProjects={fetchProjects}/>}
      <Stack spacing={2} className='p-4'>
        <Pagination count={Math.ceil(totalData/itemsPerPage)} page={currentPage} onChange={handlePageChange} color="primary" />
      </Stack>
      
    </div>
  )
}

export default Projects