import { useEffect, useState } from 'react'
import API from '../util/Api'
import { toast } from 'react-toastify'

const AddProperty = ({setOpenAddModal, fetchProperties}) => {
  let [title, setTitle] = useState('');
  let [location, setLocation] = useState('');
  let [price, setPrice] = useState('');
  let [propertyType, setPropertyType] = useState('');
  let [bathrooms, setBathrooms] = useState('');
  let [bedrooms, setBedrooms] = useState('');
  let [areaSqft, setAreaSqft] = useState('');
  let [status, setStatus] = useState('');
  let [description, setDescription] = useState('');
  let [projectId, setProjectId] = useState('');
  let [allProjects, setAllProjects] = useState([]);

  let fetchAllProjects = async () => {
    try {
      let response = await API.get('/project/projects-name');
      setAllProjects(response.data.data);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchAllProjects();
  },[]);

  let handleAddProperty = async (e) => {
    e.preventDefault();
    try {
      let response = await API.post(`/property/properties`, {
        title,
        location,
        price,
        property_type: propertyType,
        bedrooms,
        bathrooms,
        area_sqft: areaSqft,
        status,
        description,
        project_id: projectId
      });
      fetchProperties();
      setOpenAddModal(false);
      toast.success('Property added successfully');
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Unable to add property!');
    }
  }

  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#0000005a] z-1' onClick={()=>setOpenAddModal(false)} >
      <form className='w-1/2 bg-white p-4 rounded shadow-md grid grid-cols-2 place-items-center gap-1' onSubmit={handleAddProperty} onClick={(e)=>e.stopPropagation()}>
        <h2 className='p-2 font-semibold text-xl text-[#fdc940] col-span-2'>Let's add a Property</h2>

        <div className='w-full p-2 rounded shadow-md flex flex-col gap-1'>
          <label htmlFor="projectId">Project</label>
          <select name="projectId" id="projectId" value={projectId} onChange={(e)=>setProjectId(e.target.value)} className='p-1 border border-[#cdcdcd] rounded' required>
            <option value="">Select Project</option>
            {allProjects.map((data) => (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            ))}
          </select>

          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Property name' className='p-1 border border-[#cdcdcd] rounded' required/>

          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='Location' className='p-1 border border-[#cdcdcd] rounded' required/>

          <label htmlFor="propertyType">Property Type</label>
          <select name="propertyType" id="propertyType" value={propertyType} onChange={(e)=>setPropertyType(e.target.value)} className='p-1 border border-[#cdcdcd] rounded' required>
            <option value="">Select Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="plot">Plot</option>
          </select>

          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Amount' className='p-1 border border-[#cdcdcd] rounded' required/>

          <label htmlFor="areaSqft">Area Sqft</label>
          <input type="number" name="areaSqft" id="areaSqft" value={areaSqft} onChange={(e)=>setAreaSqft(e.target.value)} placeholder='Area in sq.ft.' className='p-1 border border-[#cdcdcd] rounded' required/>
        </div>
        
        <div className='w-full p-2 rounded shadow-md flex flex-col gap-1'>
          <label htmlFor="status">Status</label>
          <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)} className='p-1 border border-[#cdcdcd] rounded' required>
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="sold">Sold</option>
            <option value="draft">Draft</option>
          </select>

          <label htmlFor="bathrooms">Bathroom</label>
          <input type="number" name="bathrooms" id="bathrooms" value={bathrooms} onChange={(e)=>setBathrooms(e.target.value)} placeholder='Number of bathrooms' className='p-1 border border-[#cdcdcd] rounded'/>

          <label htmlFor="bedrooms">Bedroom</label>
          <input type="number" name="bedrooms" id="bedrooms" value={bedrooms} onChange={(e)=>setBedrooms(e.target.value)} placeholder='Number of bedrooms' className='p-1 border border-[#cdcdcd] rounded'/>
        
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" rows={6} value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Write a description' className='p-1 border border-[#cdcdcd] rounded'></textarea>
        </div>
        
        <button className='py-1 px-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded place-self-end col-span-2'>Add</button>
      </form>
    </div>
  )
}

export default AddProperty