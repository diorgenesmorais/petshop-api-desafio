import express from 'express';
import {
    findAll,
    findById,
    register,
    updateProprietario
} from '../controllers/proprietario.controller.js';

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', register);
router.put('/', updateProprietario);

export default router;
