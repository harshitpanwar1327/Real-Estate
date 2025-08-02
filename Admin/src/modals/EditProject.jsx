import { useState } from 'react'
import API from '../util/Api'

const EditProject = ({setOpenModal, selectedProject, fetchProjects}) => {
  let [name, setName] = useState(selectedProject.name);
  let [location, setLocation] = useState(selectedProject.location);
  let [status, setStatus] = useState(selectedProject.status);
  let [description, setDescription] = useState(selectedProject.description);

  let handleForm = async(e)=>{
    e.preventDefault();
    try {
      let response = await API.put(`/project/projects/${selectedProject.id}`,{name,location,status,description});
      setOpenModal(false);
      fetchProjects();
      toast.success('Project edited successfully');
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Unable to edit project!');
    }
  }

  return (
    <div className='fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-[#0000005a] z-1' onClick={()=>setOpenModal(false)}>
      <form className='w-1/3 bg-white p-4 rounded shadow-md flex flex-col gap-2' onSubmit={handleForm} onClick={(e)=>e.stopPropagation()}>
        <h2 className='p-2 font-semibold text-xl text-center text-[#fdc940]'>Update Project</h2>
        
        <label htmlFor="name">Name</label>
        <input type="text"  name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Project name' className='p-2 border border-[#cdcdcd] rounded' required/>
        
        <label htmlFor="location">Location</label>
        <input type="text" name="location" id="location" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='Location' className='p-2 border border-[#cdcdcd] rounded' required/>
        
        <label htmlFor="status">Status</label>
        <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)} className='p-2 border border-[#cdcdcd] rounded' required>
          <option value="">Select Status</option>
          <option value="completed">Completed</option>
          <option value="ongoing">Ongoing</option>
          <option value="upcoming">Upcoming</option>
        </select>
        
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description' className='p-2 border border-[#cdcdcd] rounded'/>
        
        <button className='py-1 px-4 bg-blue-400 text-white font-semibold hover:bg-blue-500 rounded self-end'>Edit</button>
      </form>
    </div>
  )
}

export default EditProject