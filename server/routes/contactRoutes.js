import express from 'express';
import { storeContact, getAllContacts, deleteContact } from '../controllers/contactController.js';

const router = express.Router();

router.post('/contacts', storeContact);
router.get('/contacts', getAllContacts);
router.delete('/contacts/:id', deleteContact);

export default router;
