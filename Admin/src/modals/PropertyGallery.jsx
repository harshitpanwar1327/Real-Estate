import React, {useState, useEffect} from 'react'
import API from '../util/Api'
import {toast} from 'react-toastify'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const PropertyGallery = ({setOpenModal, selectedId}) => {
  let [cover, setCover] = useState(null);
  let [coverPreview, setCoverPreview] = useState(null);

  let [areaPlan, setAreaPlan] = useState(null);
  let [areaPlanPreview, setAreaPlanPreview] = useState(null);

  let [images, setImages] = useState([]);
  let [imagePreviews, setImagePreviews] = useState([]);
  
  let [value, setValue] = useState('1');
  const handleChange = (event, newValue) => setValue(newValue);

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCover(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const handleAreaPlanChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAreaPlan(file);
      setAreaPlanPreview(URL.createObjectURL(file));
    }
  };

   const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleImages = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (cover) formData.append('cover', cover);
    if (areaPlan) formData.append('area_plan', areaPlan);
    images.forEach(img => formData.append('images', img));

    formData.append('propertyId', selectedId);
    formData.append('type', 'Property');

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
      <form onSubmit={handleImages} className='bg-white p-2 rounded shadow-md flex flex-col gap-2 max-w-[90vw]' onClick={(e)=>e.stopPropagation()}>
        <h2 className="text-xl font-bold">Upload Images</h2>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                <Tab label="Cover Image" value="1" />
                <Tab label="Area Plan" value="2" />
                <Tab label="Images" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" className='flex flex-col items-start gap-2'>
              <div className='border border-[#cdcdcd] rounded w-70 h-50 md:w-85 md:h-65 flex justify-center items-center'>
                {coverPreview ? (
                  <img src={coverPreview} alt="Cover Image" className='w-full h-full' />
                ) : (
                  <p className='text-gray-500'>No Image Uploaded</p>
                )}
              </div>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload files
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleCoverChange}
                  multiple
                />
              </Button>
            </TabPanel>
            <TabPanel value="2" className='flex flex-col items-start gap-2'>
              <div className='border border-[#cdcdcd] rounded w-70 h-50 md:w-85 md:h-65 flex justify-center items-center'>
                {areaPlanPreview ? (
                  <img src={areaPlanPreview} alt="Area Plan Image" className='w-full h-full' />
                ) : (
                  <p className='text-gray-500'>No Image Uploaded</p>
                )}
              </div>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload files
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleAreaPlanChange}
                  multiple
                />
              </Button>
            </TabPanel>
            <TabPanel value="3" className='flex flex-col items-start gap-2'>
              <Swiper
                pagination={{
                  type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className='border border-[#cdcdcd] rounded w-70 h-50 md:w-85 md:h-65'
              >
                {imagePreviews.length > 0 ? (
                  imagePreviews.map((url, index)=>(
                    <SwiperSlide key={index}><img src={url} alt={`Image ${index}`} className='w-full h-full' /></SwiperSlide>
                  ))
                ) : (
                  <SwiperSlide>
                    <p className='text-center text-gray-500'>No Image Uploaded</p>
                  </SwiperSlide>
                )}
              </Swiper>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload files
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleImagesChange}
                  multiple
                />
              </Button>
            </TabPanel>
          </TabContext>
        </Box>
        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Save</button>
      </form>
    </div>
  )
}

export default PropertyGallery