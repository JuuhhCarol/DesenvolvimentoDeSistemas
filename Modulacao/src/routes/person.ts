import express, { Router } from 'express';
import PersonController from '../controllers/personController.js';

const router: Router = express.Router();

router
    // .post('/register', )
    .get('/people', PersonController.getUsers);
    
export default router;