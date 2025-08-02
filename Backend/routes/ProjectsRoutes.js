import express from 'express';
import { getProjects, postProjects, updateProjects, deleteProjects, allProjects } from '../controllers/ProjectsControllers.js'

let router = express.Router();

router.get('/projects-name', allProjects);
router.get('/projects', getProjects);
router.post('/projects', postProjects);
router.put('/projects/:id', updateProjects);
router.delete('/projects/:id', deleteProjects);

export default router;