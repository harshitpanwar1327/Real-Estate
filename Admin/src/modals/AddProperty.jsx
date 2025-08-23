import { useEffect, useState } from 'react'
import API from '../util/Api'
import { toast } from 'react-toastify'

const PropertyByCategory = {
  residential: ['Plot', 'Villa', 'High Rise Apartment', 'Low Rise Apartment'],
  commercial: ['Shops', 'SEO'],
  industrial: ['Plot', 'Built up'],
  agricultural: ['Land']
}

const AddProperty = ({setOpenAddModal, fetchProperties}) => {
  let [title, setTitle] = useState('');
  let [location, setLocation] = useState('');
  let [minPrice, setMinPrice] = useState('');
  let [maxPrice, setMaxPrice] = useState('');
  let [category, setCategory] = useState('');
  let [propertyType, setPropertyType] = useState('');
  let [bedrooms, setBedrooms] = useState('');
  let [bathrooms, setBathrooms] = useState('');
  let [balcony, setBalcony] = useState('');
  let [store, setStore] = useState('');
  let [superArea, setSuperArea] = useState('');
  let [carpetArea, setCarpetArea] = useState('');
  let [status, setStatus] = useState('');
  let [description, setDescription] = useState('');
  let [projectId, setProjectId] = useState('');
  let [allProjects, setAllProjects] = useState([]);

  let fetchAllProjects = async () => {
    try {
      let response = await API.get('/project/all-projects');
      setAllProjects(response.data.data);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchAllProjects();
  },[]);

  useEffect(()=>{
    setPropertyType('');
  },[category]);

  let handleAddProperty = async (e) => {
    e.preventDefault();
    try {
      let response = await API.post(`/property/properties`, {
        title,
        location,
        minPrice,
        maxPrice,
        category,
        property_type: propertyType,
        bedrooms,
        bathrooms,
        balcony,
        store,
        superArea,
        carpetArea,
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
      <form className='max-w-[85vw] bg-white p-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 max-h-[85vh] overflow-auto' onSubmit={handleAddProperty} onClick={(e)=>e.stopPropagation()}>
        <h2 className='p-2 font-semibold text-xl text-[#fdc940] md:col-span-2 lg:col-span-4'>Let's add a Property</h2>
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

          <label htmlFor="status">Status</label>
          <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)} className='p-1 border border-[#cdcdcd] rounded' required>
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="sold">Sold</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <div className='w-full p-2 rounded shadow-md flex flex-col gap-1'>
          <label htmlFor="category">Category</label>
          <select name="category" id="category" value={category} onChange={(e)=>setCategory(e.target.value)} className='p-1 border border-[#cdcdcd] rounded' required>
            <option value="">Select Category</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
            <option value="agricultural">Agricultural</option>
          </select>

          <label htmlFor="propertyType">Property Type</label>
          <select name="propertyType" id="propertyType" value={propertyType} onChange={(e)=>setPropertyType(e.target.value)} className='p-1 border border-[#cdcdcd] rounded' required>
            <option value="">Select Type</option>
            {category &&
              PropertyByCategory[category]?.map((type, index)=>(
                <option value={type} key={index}>{type}</option>
              ))
            }
          </select>

          <label htmlFor="minPrice">Starting Price</label>
          <input type="number" name="minPrice" id="minPrice" value={minPrice} onChange={(e)=>setMinPrice(e.target.value)} placeholder='Starting Amount' className='p-1 border border-[#cdcdcd] rounded'/>

          <label htmlFor="maxPrice">Maximum Price</label>
          <input type="number" name="maxPrice" id="maxPrice" value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} placeholder='Starting Amount' className='p-1 border border-[#cdcdcd] rounded'/>
        </div>
        
        <div className='w-full p-2 rounded shadow-md flex flex-col gap-1'>
          <label htmlFor="superArea">Super Area</label>
          <input type="number" name="superArea" id="superArea" value={superArea} onChange={(e)=>setSuperArea(e.target.value)} placeholder='Super Area' className='p-1 border border-[#cdcdcd] rounded'/>

          <label htmlFor="carpetArea">Carpet Area</label>
          <input type="number" name="carpetArea" id="carpetArea" value={carpetArea} onChange={(e)=>setCarpetArea(e.target.value)} placeholder='Carpet Area' className='p-1 border border-[#cdcdcd] rounded'/>

          <label htmlFor="bathrooms">Bathroom</label>
          <input type="number" name="bathrooms" id="bathrooms" value={bathrooms} onChange={(e)=>setBathrooms(e.target.value)} placeholder='Number of bathrooms' className='p-1 border border-[#cdcdcd] rounded'/>

          <label htmlFor="bedrooms">Bedroom</label>
          <input type="number" name="bedrooms" id="bedrooms" value={bedrooms} onChange={(e)=>setBedrooms(e.target.value)} placeholder='Number of bedrooms' className='p-1 border border-[#cdcdcd] rounded'/>
        </div>

        <div className='w-full p-2 rounded shadow-md flex flex-col gap-1'>
          <label htmlFor="balcony">Balcony</label>
          <input type="number" name="balcony" id="balcony" value={balcony} onChange={(e)=>setBalcony(e.target.value)} placeholder='Number of balcony' className='p-1 border border-[#cdcdcd] rounded'/>

          <label htmlFor="store">Store</label>
          <input type="number" name="store" id="store" value={store} onChange={(e)=>setStore(e.target.value)} placeholder='Number of store' className='p-1 border border-[#cdcdcd] rounded'/>
        
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Write a description' rows={3} className='p-1 border border-[#cdcdcd] rounded'></textarea>
        </div>
        
        <button className='py-1 px-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded place-self-end md:col-span-2 lg:col-span-4'>Add</button>
      </form>
    </div>
  )
}

export default AddProperty