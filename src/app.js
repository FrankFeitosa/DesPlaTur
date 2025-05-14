import express from 'express';
import userRoutes from '../src/routes/userRoutes.js'

const app = express();
app.use(express.json())

app.use('/user', userRoutes)

export default app;