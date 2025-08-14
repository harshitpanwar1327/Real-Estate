import express from 'express';
import { propertyDetails, getPropertiesById, getProperties, postProperties, updateProperties, deleteProperties } from '../controllers/PropertiesControllers.js'
import { authMiddleware } from '../middleware/AuthMiddlewares.js'

let router = express.Router();

router.get('/property-details/:id', propertyDetails);
router.post('/properties/:id', getPropertiesById);

router.use(authMiddleware);
router.post('/get-properties', getProperties);
router.post('/properties', postProperties);
router.put('/properties/:id', updateProperties);
router.delete('/properties/:id', deleteProperties);

export default router;