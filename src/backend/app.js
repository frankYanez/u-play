import express from 'express';
import dotenv from 'dotenv'
import { dbConnect } from './config/mongo.js';
import authRouter from './routes/auth.routes.js'
import songsRouter from './routes/songs.routes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'



dotenv.config()

const app = express();


app.use(cors({ origin: 'http://localhost:5173', credentials: true, }))
app.use(cookieParser())
app.use(express.json())

app.use(authRouter)
app.use(songsRouter)

const PORT = 3001
app.listen(PORT, () => {
    console.log('Server is running on port' + PORT);
})

dbConnect()