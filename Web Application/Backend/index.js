import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { rateLimit } from 'express-rate-limit'
import { checkConnection } from './config/Database.js'
import createAllTables from './utils/CreateTables.js'

dotenv.config();

let app = express();
let PORT = process.env.PORT || 8080;

app.use(cors());
app.use(helmet());
app.use(express.json());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 1000
});
app.use(limiter);

// app.use(authMiddleware);

app.use((req,res,next)=>{
    return res.status(404).json("Route not found");
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    return res.status(500).json({message:"Internal Server Error!"});
});


app.listen(PORT, async()=>{
    console.log(`Listening to the port ${PORT}`);
    try {
        await checkConnection();
        await createAllTables();
    } catch (error) {
        console.log(error);
    }
});