import express from 'express';
import { findAll } from '../controllers/post.controller.js';

const router = express.Router();

router.get('/', findAll);

export default router;
