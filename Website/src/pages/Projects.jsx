import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../utils/API'

const Projects = () => {
  const [cover, setCover] = useState('');
  const [areaPlan, setAreaPlan] = useState('');
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const {id} = useParams();
  const [projectDetails, setProjectDetails] = useState([]);

  const fetchProjectDetails = async () => {
    try {
      let response = await API.get(``);
      setProjectDetails(response.data.data);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  }

  useEffect(()=>{
    fetchProjectDetails();
  }, []);

  return (
    <div>Projects</div>
  )
}

export default Projects