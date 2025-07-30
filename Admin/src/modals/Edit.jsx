import { useState } from 'react'
import API from '../util/Api'

const Edit = ({setOpenEditModal, selectedData, fetchData}) => {
  let [name, setName] = useState(selectedData.name);
  let [location, setLocation] = useState(selectedData.location);
  let [status, setStatus] = useState(selectedData.status);
  let [description, setDescription] = useState(selectedData.description);

  let handleForm = async(e)=>{
    e.preventDefault();
    try {
      let response = await API.put(`http://localhost:5000/api/project/projects/${selectedData.id}`,{name,location,status,description});

      setOpenEditModal(false);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-[#0000003a]' onClick={()=>setOpenEditModal(false)}>
      <div className="bg-white p-4 rounded-md p-6 border-2 border-black " onClick={(e)=>e.stopPropagation()}>
        <form className='flex flex-col items-center' onSubmit={handleForm}>
          <h2 className='p-2 mb-2 font-semibold text-[20px]'>Update Project</h2>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text"  name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Project name' className='p-1 mb-2 ml-2 border-black' required/>
          </div>
         <div>
           <label htmlFor="location">Location: </label>
            <input type="text" name="location" id="location" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='Location' className='p-1 mb-2 ml-2 border-black' required/>
         </div>
         <div>
           <label htmlFor="status">Status: </label>
            <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)} className='p-1 mb-2 ml-2 border-black' required>
              <option value="">Select Status</option>
              <option value="completed">Completed</option>
              <option value="ongoing">Ongoing</option>
              <option value="upcoming">Upcoming</option>
            </select>
         </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description' className='p-1 border-black' required/>
          </div>
          <button className='!w-[100px] bg-blue-400 text-white border-2 hover:bg-white hover:text-black hover:border hover:border-2 m-2 ml-auto'>Edit</button>
        </form>
      </div>
    </div>
  )
}

export default Edit