import express from 'express';
import {
    findAll,
    findById
} from '../controllers/proprietario.controller.js';

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);

export default router;
