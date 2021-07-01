import express from 'express';
import {
    findAll,
    createNewPost,
    updatePost,
    findById
} from '../controllers/post.controller.js';

const router = express.Router();

router.get('/', findAll);
router.post('/', createNewPost);
router.put('/', updatePost);
router.get('/:id', findById);

export default router;
