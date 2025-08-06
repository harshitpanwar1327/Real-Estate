import express from 'express';
import { getEnquiries, postEnquiries, deleteEnquiries } from '../controllers/EnquiriesControllers.js'
import { authMiddleware } from '../middleware/AuthMiddlewares.js'

let router = express.Router();

router.post('/enquiries', postEnquiries);

router.use(authMiddleware);
router.get('/enquiries', getEnquiries);
router.delete('/enquiries/:id', deleteEnquiries);

export default router;