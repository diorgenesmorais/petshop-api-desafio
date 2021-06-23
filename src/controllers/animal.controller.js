import logger from '../register.logger.js';
import {
    getAll,
    getById,
    remove,
    save,
    update,
    filter
} from '../services/animal.service.js';

const findAll = async (req, res, next) => {
    try {
        const { proprietarios_id } = req.query;
        let result;
        if (proprietarios_id) {
            result = await filter(proprietarios_id);
        } else {
            result = await getAll();
        }
        res.status(200).send(result);
        logger.info('GET /animais');
    } catch (error) {
        next(error);
    }
}

const findById = async (req, res, next) => {
    try {
        const result = await getById(req.params.id);
        res.status(200).send(result);
        logger.info('GET /animals by id');
    } catch (error) {
        next(error);
    }
}

const validate = (animal) => {
    const { nome, tipo } = animal;
    if (!nome || !tipo) {
        throw new Error('Nome e tipo são obrigatórios');
    }
}

const register = async (req, res, next) => {
    try {
        const animal = req.body;
        validate(animal);
        const result = await save(animal);
        res.status(201).send(result);
        logger.info('POST /animal');
    } catch (error) {
        next(error);
    }
}

const updateAnimal = async (req, res, next) => {
    try {
        const animal = req.body;
        validate(animal);
        if (!animal.id) {
            throw new Error('O id é obrigatório');
        }
        const result = await update(animal);
        res.status(200).send(result);
        logger.info('PUT /animal');
    } catch (error) {
        next(error);
    }
}

const removeAnimal = async (req, res, next) => {
    try {
        const removed = await remove(req.params.id);
        const statusCode = removed ? 204 : 404;
        res.status(statusCode).end();
        logger.info('DELETE /animal');
    } catch (error) {
        next(error);
    }
}

export {
    findAll,
    findById,
    register,
    updateAnimal,
    removeAnimal
}
