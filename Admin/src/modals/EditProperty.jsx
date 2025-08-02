import { useState } from 'react'
import API from '../util/Api'

const EditProperty = ({setOpenEditModal, selectedProperty, fetchProperties}) => {
  let [title, setTitle] = useState(selectedProperty.title || '');
  let [location, setLocation] = useState(selectedProperty.location || '');
  let [price, setPrice] = useState(selectedProperty.price || '');
  let [propertyType, setPropertyType] = useState(selectedProperty.property_type || '');
  let [bathrooms, setBathrooms] = useState(selectedProperty.bathrooms || '');
  let [bedrooms, setBedrooms] = useState(selectedProperty.bedrooms || '');
  let [areaSqft, setAreaSqft] = useState(selectedProperty.area_sqft || '');
  let [status, setStatus] = useState(selectedProperty.status || '');
  let [description, setDescription] = useState(selectedProperty.description || '');
  let [projectId, setProjectId] = useState(selectedProperty.project_id || '');

  let handleEditProperty = async(e)=>{
    e.preventDefault();
    try {
      let response = await API.put(`/property/properties/${projectId}`, {
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
      setOpenEditModal(false);
      fetchProperties();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-[#0000005a] z-1' onClick={()=>setOpenEditModal(false)}>
      <form className='w-1/2 bg-white p-4 rounded shadow-md grid grid-cols-2 place-items-center gap-1' onSubmit={handleEditProperty} onClick={(e)=>e.stopPropagation()}>
        <h2 className='p-2 font-semibold text-xl text-[#fdc940] col-span-2'>Edit Property</h2>
        
        <div className='w-full p-2 rounded shadow-md flex flex-col gap-1'>
          <label htmlFor="projectId">Project Id</label>
          <input type="number" name="projectId" id="projectId" value={projectId} onChange={(e)=>setProjectId(e.target.value)} className='p-1 border border-[#cdcdcd] rounded opacity-40 cursor-not-allowed' disabled/>

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
          <input type="number" name="price" id="price" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='price' className='p-1 border border-[#cdcdcd] rounded' required/>

          <label htmlFor="areaSqft">Area Sqft</label>
          <input type="number" name="areaSqft" id="areaSqft" value={areaSqft} onChange={(e)=>setAreaSqft(e.target.value)} placeholder='area in squarefeet' className='p-1 border border-[#cdcdcd] rounded' required/>
        </div>
        
        <div className='w-full p-2 rounded shadow-md flex flex-col gap-1'>
          <label htmlFor="bedrooms">Bedroom</label>
          <input type="number" name="bedrooms" id="bedrooms" value={bedrooms} onChange={(e)=>setBedrooms(e.target.value)} placeholder='Number of bedrooms' className='p-1 border border-[#cdcdcd] rounded'/>

          <label htmlFor="bathrooms">Bathroom</label>
          <input type="number" name="bathrooms" id="bathrooms" value={bathrooms} onChange={(e)=>setBathrooms(e.target.value)} placeholder='Number of bathrooms' className='p-1 border border-[#cdcdcd] rounded'/>
      
          <label htmlFor="status">Status</label>
          <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)} className='p-1 border border-[#cdcdcd] rounded' required>
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="sold">Sold</option>
            <option value="draft">Draft</option>
          </select>
        
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} rows={6} placeholder='Write a description' className='p-1 border border-[#cdcdcd] rounded'/>
        </div>
        
        <button className='py-1 px-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded place-self-end col-span-2'>Update</button>
      </form>
    </div>
  )
}

export default EditProperty