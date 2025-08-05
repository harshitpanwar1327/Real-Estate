import React, {useState, useEffect} from 'react'
import API from '../util/Api'
import {toast} from 'react-toastify'

const ProjectGallery = ({setOpenModal, selectedId}) => {
  let [cover, setCover] = useState(null);
  let [areaPlan, setAreaPlan] = useState(null);
  let [images, setImages] = useState([]);

  const handleImages = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (cover) formData.append('cover', cover);
    if (areaPlan) formData.append('area_plan', areaPlan);
    images.forEach(img => formData.append('images', img));

    formData.append('projectId', selectedId);
    formData.append('type', 'project');

    try {
      let response = await API.put(`/media/update-media/${selectedId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setOpenModal(false);
      toast.success('Images uploaded successfully');
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Images not uploaded!");
    }
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#0000005a] z-1 flex justify-center items-center' onClick={()=>setOpenModal(false)}>
      <form onSubmit={handleImages} className='bg-white p-2 rounded shadow-md' onClick={(e)=>e.stopPropagation()}>
        <h2 className="text-xl font-bold">Upload Images</h2>

        <div>
          <label className="block font-semibold">Cover Image</label>
          <input type="file" accept="image/*" onChange={e => setCover(e.target.files[0])} />
        </div>

        <div>
          <label className="block font-semibold">Images</label>
          <input type="file" accept="image/*" multiple onChange={e => setImages([...e.target.files])} />
        </div>

        <div>
          <label className="block font-semibold">Area Plan</label>
          <input type="file" accept="image/*" onChange={e => setAreaPlan(e.target.files[0])} />
        </div>

        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Save</button>
      </form>
    </div>
  )
}

export default ProjectGallery