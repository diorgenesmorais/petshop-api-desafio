import express from 'express';
import { findAll, createNewPost } from '../controllers/post.controller.js';

const router = express.Router();

router.get('/', findAll);
router.post('/', createNewPost);

export default router;
