import express from 'express';
import { getProperties, postProperties, updateProperties, deleteProperties } from '../controllers/PropertiesControllers.js'

let router = express.Router();

router.post('/get-properties', getProperties);
router.post('/properties', postProperties);
router.put('/properties/:id', updateProperties);
router.delete('/properties/:id', deleteProperties);

export default router;