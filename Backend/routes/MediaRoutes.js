import express from 'express'
import { getMedia, updateMedia } from '../controllers/MediaControllers.js'
import multer from 'multer'
import path from 'path'

let router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage });

router.get('/get-media', getMedia);
router.put('/update-media/:id', upload.fields([
    {name: 'cover', maxCount: 1},
    {name: 'images'},
    {name: 'area_plan', maxCount: 1}
]), updateMedia);

export default router;