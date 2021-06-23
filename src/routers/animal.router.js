import express from 'express';
import {
    findAll,
    findById,
    register,
    updateAnimal,
    removeAnimal
} from '../controllers/animal.controller.js';

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', register);
router.put('/', updateAnimal);
router.delete('/:id', removeAnimal);

export default router;
