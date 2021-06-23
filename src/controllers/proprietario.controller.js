import logger from '../register.logger.js';
import { getAll } from '../services/proprietario.service.js';

const findAll = async (req, res, next) => {
    try {
        const result = await getAll();
        res.status(200).send(result);
        logger.info('GET /proprietarios');
    } catch (error) {
        next(error);
    }
}

export {
    findAll
}
