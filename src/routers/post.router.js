import express from 'express';
import {
    findAll,
    createNewPost,
    updatePost
} from '../controllers/post.controller.js';

const router = express.Router();

router.get('/', findAll);
router.post('/', createNewPost);
router.put('/', updatePost);

export default router;
