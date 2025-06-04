import express from 'express';
import { createPlace, deletePlaces, findPlace, getPlace, updatePlaces } from '../controllers/placesController.js';
import { validate } from '../middleware/validate.js';
import { placeCreateSchema, placeUpdateSchema } from '../schemas/placesSchema.js';
import { authenticate,  verifyUser } from '../middleware/authenticate.js';


const route = express.Router()

route.post('/', authenticate,verifyUser(['admin']),validate(placeCreateSchema), createPlace)
route.get('/', authenticate,verifyUser(['admin','user']),getPlace)
route.get('/:type', authenticate,verifyUser(['admin','user']), findPlace)
route.put('/:id', authenticate,verifyUser(['admin']),validate(placeUpdateSchema), updatePlaces)
route.delete('/:id', authenticate,verifyUser(['admin']),deletePlaces)


export default route;