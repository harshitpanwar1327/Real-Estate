import express from 'express';
import { getEnquiries, postEnquiries, deleteEnquiries } from '../controllers/EnquiriesControllers.js'

let router = express.Router();

router.get('/enquiries', getEnquiries);
router.post('/enquiries', postEnquiries);
router.delete('/enquiries/:id', deleteEnquiries);

export default router;