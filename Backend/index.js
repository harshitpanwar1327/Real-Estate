import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { rateLimit } from 'express-rate-limit'
import { checkConnection } from './config/Database.js'
import createAllTables from './utils/CreateTables.js'
import AdminsRoutes from './routes/AdminsRoutes.js'
import ProjectsRoutes from './routes/ProjectsRoutes.js'
import UsersRoutes from './routes/UsersRoutes.js'
import EnquiriesRoutes from './routes/EnquiriesRoutes.js'
import PropertiesRoutes from './routes/PropertiesRoutes.js'
import MediaRoutes from './routes/MediaRoutes.js'

dotenv.config();

let app = express();
let PORT = process.env.PORT || 8080;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/uploads', express.static('uploads', {
  setHeaders: (res, path, stat) => {
    res.set('Cross-Origin-Resource-Policy', 'cross-origin');
  }
}));

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 1000
});
app.use(limiter);

app.use('/api/admin',AdminsRoutes);
app.use('/api/user', UsersRoutes);
app.use('/api/project', ProjectsRoutes);
app.use('/api/property', PropertiesRoutes);
app.use('/api/enquiry', EnquiriesRoutes);
app.use('/api/media', MediaRoutes);

app.use((req, res, next)=>{
    return res.status(404).json({message: "Route not found!"});
});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    return res.status(500).json({message: "Internal Server Error!"});
});

app.listen(PORT, async() => {
    console.log(`Listening to the port ${PORT}`);
    try {
        await checkConnection();
        await createAllTables();
    } catch (error) {
        console.log(error);
    }
});