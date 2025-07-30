import { useState, useEffect } from 'react'
import API from '../../util/Api.js'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddProjects from '../../modals/AddProjects.jsx'
import Edit from '../../modals/Edit.jsx'

const Projects = () => {
  let [tableData, setTableData] = useState([]);
  let [ openAddProjectModal, setOpenAddProjectModal ] = useState(false);
  let [openEditModal, setOpenEditModal] = useState(false);
  let [selectedData, setSelectedData] = useState({});

  let fetchData = async()=>{
    try {
      let response = await API.get(`http://localhost:5000/api/project/projects`);

      setTableData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  let deleteData = async(id)=>{
    try {
        let response = await API.delete(`http://localhost:5000/api/project/projects/${id}`);
        
        fetchData();
    } catch (error) {
        console.log(error);
    }
  }

  let handleEdit = (data)=>{
    setOpenEditModal(true);
    setSelectedData(data);
  }

  return (
    <div className='grow border-6'>
      <div className='w-90vw h-[50px]'>
        <button className='absolute top-2 right-5 bg-gray-400 text-white border-2 hover:bg-white hover:text-gray-400 hover:border hover:border-gray-400 hover:border-2' onClick={()=>setOpenAddProjectModal(true)}>Add Project</button>
      </div>
      <div className='!p-4 !w-full'>
        <table className='border-black w-full'>
          <thead className='h-[2.5rem]'>
            <tr className='bg-gray-200'>
              <th>Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>Status</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
           {tableData.map((data,index)=>(
              <tr key={index}>
                <td className='text-center'>{data.id}</td>
                <td className='text-center'>{data.name}</td>
                <td className='text-center'>{data.location}</td>
                <td className='text-center'>{data.status}</td>
                <td className='text-center'>{data.description}</td>
                <td className='text-center' ><ModeEditIcon className='cursor-pointer text-green-600 m-4' onClick={()=>handleEdit(data)}/></td>
                <td className='text-center'><DeleteIcon className='cursor-pointer text-red-600 m-4' onClick={()=>deleteData(data.id)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openAddProjectModal && <AddProjects setOpenAddProjectModal ={setOpenAddProjectModal} fetchData={fetchData}/>}
      {openEditModal && <Edit setOpenEditModal ={setOpenEditModal} 
      selectedData = {selectedData} fetchData={fetchData}/>}
    </div>
  )
}

export default Projects