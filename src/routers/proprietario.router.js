import express from 'express';
import {
    findAll,
    findById,
    register,
    updateProprietario,
    removeProprietario
} from '../controllers/proprietario.controller.js';

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', register);
router.put('/', updateProprietario);
router.delete('/:id', removeProprietario);

export default router;
