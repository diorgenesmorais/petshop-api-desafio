import logger from '../register.logger.js';
import { getAllPosts, createPost } from '../repositories/post.repository.js';

const findAll = async (req, res, next) => {
    try {
        res.send(await getAllPosts());
        logger.info('GET /posts');
    } catch (error) {
        next(error);
    }
}

const validate = (post) => {
    const isNull = !post.titulo || !post.conteudo;
    if (isNull) {
        throw new Error('Um post deve ter um título e um conteúdo!');
    }
}

const createNewPost = async (req, res, next) => {
    const post = req.body;
    try {
        validate(post);
        const result = await createPost(post);
        res.status(201).send(result);
    } catch (error) {
        next(error);
    }
}

export {
    findAll,
    createNewPost
}