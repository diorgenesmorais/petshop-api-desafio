import logger from '../register.logger.js';
import {
    getAll,
    getById
} from '../services/proprietario.service.js';

const findAll = async (req, res, next) => {
    try {
        const result = await getAll();
        res.status(200).send(result);
        logger.info('GET /proprietarios');
    } catch (error) {
        next(error);
    }
}

const findById = async (req, res, next) => {
    try {
        const result = await getById(req.params.id);
        res.status(200).send(result);
        logger.info('GET /proprietarios by id');
    } catch (error) {
        next(error);
    }
}

export {
    findAll,
    findById
}
