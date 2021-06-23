import express from 'express';
import {
    findAll,
    findById,
    register
} from '../controllers/proprietario.controller.js';

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', register);

export default router;
