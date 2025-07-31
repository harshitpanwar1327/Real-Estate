import { useState, useEffect } from 'react'
import API from '../../util/Api.js'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import EditProject from '../../modals/EditProject.jsx'
import Menubar from '../../components/Menubar.jsx'
import Swal from 'sweetalert2'

const Projects = () => {
  let [projectsData, setProjectsData] = useState([]);
  let [openModal, setOpenModal] = useState(false);
  let [selectedProject, setSelectedProject] = useState({});

  let fetchProjects = async () => {
    try {
      let response = await API.get(`http://localhost:5000/api/project/projects`);
      setProjectsData(response.data.data);
    } catch (error) {
      console.log(response?.error?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchProjects();
  },[]);

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
            let response = await API.delete(`http://localhost:5000/api/project/projects/${id}`);
        
            fetchProjects();
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
    fetchProjects();
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
      
    </div>
  )
}

export default Projects