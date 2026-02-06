import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import {createUser,getUsers,deleteUser,updateUser } from '../controllers/users.js';



const router = express.Router();

router.get('/',getUsers);


// Create a new rout : to add a new user to the users array
router.post('/', createUser);

// Dlete a user by ID
router.delete('/:id',deleteUser);

// PATCH request to update a user by ID
router.patch('/:id',updateUser);

export default router;