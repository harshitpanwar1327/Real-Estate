import express from 'express';
import { propertyDetails, getProperties, postProperties, updateProperties, deleteProperties } from '../controllers/PropertiesControllers.js'

let router = express.Router();

router.get('/property-details/:id', propertyDetails);
router.post('/get-properties', getProperties);
router.post('/properties', postProperties);
router.put('/properties/:id', updateProperties);
router.delete('/properties/:id', deleteProperties);

export default router;