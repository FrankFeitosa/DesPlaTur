import express from 'express';
import userRoutes from '../src/routes/userRoutes.js'
import adminRoutes from '../src/routes/adminRoutes.js'
import placeRoutes from    '../src/routes/placesRoutes.js'

const app = express();
app.use(express.json())

app.use('/user', userRoutes)

app.use('/admin', adminRoutes)

app.use('/places', placeRoutes)

export default app;