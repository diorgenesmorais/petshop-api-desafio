import express from 'express';
import {
    findAll,
    findById,
    register,
    updateServico,
    removeServico
} from '../controllers/servico.controller.js';

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', register);
router.put('/', updateServico);
router.delete('/:id', removeServico);

export default router;
