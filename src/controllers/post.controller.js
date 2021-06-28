import logger from '../register.logger.js';
import { getAllPosts } from '../repositories/post.repository.js';

const findAll = async (req, res, next) => {
    try {
        res.send(await getAllPosts());
        logger.info('GET /posts');
    } catch (error) {
        next(error);
    }
}

export {
    findAll
}