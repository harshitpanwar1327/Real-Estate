import express from 'express';
import { getProjectsById, allProjects, getProjects, postProjects, updateProjects, deleteProjects } from '../controllers/ProjectsControllers.js'
import { authMiddleware } from '../middleware/AuthMiddlewares.js'

let router = express.Router();

router.get('/projects/:id', getProjectsById);
router.get('/all-projects', allProjects);
router.get('/projects', getProjects);

router.use(authMiddleware);
router.post('/projects', postProjects);
router.put('/projects/:id', updateProjects);
router.delete('/projects/:id', deleteProjects);

export default router;