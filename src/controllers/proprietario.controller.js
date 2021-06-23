import logger from '../register.logger.js';
import {
    getAll,
    getById,
    save,
    update
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

const validate = (proprietario) => {
    const { nome, telefone } = proprietario;
    if (!nome || !telefone) {
        throw new Error('Nome e telefone são obrigatórios');
    }
}

const register = async (req, res, next) => {
    try {
        const proprietario = req.body;
        validate(proprietario);
        const result = await save(proprietario);
        res.status(201).send(result);
        logger.info('POST /proprietarios');
    } catch (error) {
        next(error);
    }
}

const updateProprietario = async (req, res, next) => {
    try {
        const proprietario = req.body;
        validate(proprietario);
        if (!proprietario.id) {
            throw new Error('O id é obrigatório');
        }
        const result = await update(proprietario);
        res.status(200).send(result);
        logger.info('PUT /proprietarios');
    } catch (error) {
        next(error);
    }
}

export {
    findAll,
    findById,
    register,
    updateProprietario
}
