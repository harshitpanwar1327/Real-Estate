import { useState } from 'react'
import API from '../util/Api'
import {toast} from 'react-toastify'

const AddProperty = ({setOpenAddModal}) => {
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

  let handleForm = async(e)=>{
    e.preventDefault();
    try {
      let response = await API.post(`/property/properties`, {
        title:title,
        location:location,
        price:price,
        property_type:propertyType,
        bedrooms:bedrooms,
        bathrooms:bathrooms,
        area_sqft:areaSqft,
        status:status,
        description:description,
        project_id:projectId
      });
      setOpenAddModal(false);
      toast.success('Property added successfully');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-[#0000003a]' onClick={()=>setOpenAddModal(false)}>
      <div className="bg-white p-4 rounded-md p-6 border-2 border-black " onClick={(e)=>e.stopPropagation()}>
        <form className='flex flex-col items-center' onSubmit={handleForm}>
          <h2 className='p-2 mb-2 font-semibold text-[20px]'>Add Property</h2>
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text"  name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Property name' className='p-1 mb-2 ml-2 border-black' required/>
          </div>
         <div>
           <label htmlFor="location">Location: </label>
            <input type="text" name="location" id="location" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='Location' className='p-1 mb-2 ml-2 border-black' required/>
         </div>
         <div>
           <label htmlFor="propertyType">Property Type: </label>
            <select name="propertyType" id="propertyType" value={propertyType} onChange={(e)=>setPropertyType(e.target.value)} className='p-1 mb-2 ml-2 border-black' required>
              <option value="">Select Type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="plot">Plot</option>
            </select>
         </div>
          <div>
            <label htmlFor="price">Price: </label>
            <input type="number" name="price" id="price" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='price' className='p-1 border-black' required/>
          </div>
          <div>
            <label htmlFor="bedrooms">Bedroom: </label>
            <input type="number" name="bedrooms" id="bedrooms" value={bedrooms} onChange={(e)=>setBedrooms(e.target.value)} placeholder='No. of bedrooms' className='p-1 border-black'/>
          </div>
          <div>
            <label htmlFor="bathrooms">Bathroom: </label>
            <input type="number" name="bathrooms" id="bathrooms" value={bathrooms} onChange={(e)=>setBathrooms(e.target.value)} placeholder='No. of bathrooms' className='p-1 border-black'/>
          </div>
          <div>
            <label htmlFor="areaSqft">Area Sqft: </label>
            <input type="number" name="areaSqft" id="areaSqft" value={areaSqft} onChange={(e)=>setAreaSqft(e.target.value)} placeholder='area in squarefeet' className='p-1 border-black' required/>
          </div>
          <div>
           <label htmlFor="status">Status: </label>
            <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)} className='p-1 mb-2 ml-2 border-black' required>
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="sold">Sold</option>
              <option value="draft">Draft</option>
            </select>
         </div>
         <div>
           <label htmlFor="description">Description: </label>
            <input type="text" name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description' className='p-1 mb-2 ml-2 border-black'/>
         </div>
         <div>
            <label htmlFor="projectId">Project Id: </label>
            <input type="number" name="projectId" id="projectId" value={projectId} onChange={(e)=>setProjectId(e.target.value)} placeholder='Project ID' className='p-1 border-black' required/>
          </div>
          
          <button className='!w-[100px] bg-blue-400 text-white border-2 hover:bg-white hover:text-black hover:border hover:border-2 m-2 ml-auto'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddProperty