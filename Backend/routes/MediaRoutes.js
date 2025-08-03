import express from 'express'
import { addMedia, getMedia, updateMedia } from '../controllers/MediaControllers.js'
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

const upload = multer({ storage: storage })

router.post('/add-media', upload.fields([
    {name: 'url1', maxCount: 1},
    {name: 'url2', maxCount: 1},
    {name: 'url3', maxCount: 1},
    {name: 'url4', maxCount: 1},
    {name: 'url5', maxCount: 1}
]), addMedia);
router.get('/get-media', getMedia);
router.put('/update-media/:id', upload.fields([
    {name: 'url1', maxCount: 1},
    {name: 'url2', maxCount: 1},
    {name: 'url3', maxCount: 1},
    {name: 'url4', maxCount: 1},
    {name: 'url5', maxCount: 1}
]), updateMedia);

export default router;