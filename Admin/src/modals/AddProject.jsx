import { useState } from 'react'
import API from '../util/Api'
import { toast } from 'react-toastify'

const AddProject = ({ setOpenModal, fetchProjects }) => {
  let [name, setName] = useState('');
  let [location, setLocation] = useState('');
  let [status, setStatus] = useState('');
  let [description, setDescription] = useState('');

  let handleForm = async(e)=>{
    e.preventDefault();
    try {
      let response = await API.post(`/project/projects`, {
        name,
        location,
        status,
        description
      });
      fetchProjects();
      setOpenModal(false);
      toast.success('Project added successfully');
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Unable to add project!');
    }
  }

  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#0000005a] z-1' onClick={()=>setOpenModal(false)}>
      <form className='w-1/3 bg-white p-4 rounded shadow-md flex flex-col gap-2' onSubmit={handleForm} onClick={(e)=>e.stopPropagation()}>
        <h2 className='p-2 font-semibold text-xl text-center text-[#fdc940]'>Let's add a Project</h2>

        <label htmlFor="name">Name</label>
        <input type="text"  name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Project Name' className='p-2 border border-[#cdcdcd] rounded' required/>

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

        <button className='py-1 px-4 bg-blue-400 text-white font-semibold hover:bg-blue-500 rounded self-end'>Add</button>
      </form>
    </div>
  )
}

export default AddProject