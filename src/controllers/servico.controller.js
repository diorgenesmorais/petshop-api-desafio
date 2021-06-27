import logger from '../register.logger.js';
import {
    getAll,
    getById,
    remove,
    save,
    update,
    filter
} from '../services/servico.service.js';

const findAll = async (req, res, next) => {
    try {
        const { proprietariosId } = req.query;
        let result;
        if (proprietariosId) {
            result = await filter(proprietariosId);
        } else {
            result = await getAll();
        }
        res.status(200).send(result);
        logger.info('GET /servicos');
    } catch (error) {
        next(error);
    }
}

const findById = async (req, res, next) => {
    try {
        const result = await getById(req.params.id);
        res.status(200).send(result);
        logger.info('GET /servicos by id');
    } catch (error) {
        next(error);
    }
}

const validate = (servico) => {
    const { descricao, valor } = servico;
    if (!descricao || !valor) {
        throw new Error('Descrição e valor são obrigatórios');
    }
}

const register = async (req, res, next) => {
    try {
        const servico = req.body;
        validate(servico);
        const result = await save(servico);
        res.status(201).send(result);
        logger.info('POST /servico');
    } catch (error) {
        next(error);
    }
}

const updateServico = async (req, res, next) => {
    try {
        const servico = req.body;
        validate(servico);
        if (!servico.id) {
            throw new Error('O id é obrigatório');
        }
        const result = await update(servico);
        res.status(200).send(result);
        logger.info('PUT /servico');
    } catch (error) {
        next(error);
    }
}

const removeServico = async (req, res, next) => {
    try {
        const removed = await remove(req.params.id);
        const statusCode = removed ? 204 : 404;
        res.status(statusCode).end();
        logger.info('DELETE /servico');
    } catch (error) {
        next(error);
    }
}

export {
    findAll,
    findById,
    register,
    updateServico,
    removeServico
}
