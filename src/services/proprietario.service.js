import {
    getAllProprietarios,
    getByIdProprietario
} from '../repositories/proprietario.repository.js';

const getAll = async () => getAllProprietarios();

const getById = async (id) => getByIdProprietario(id);

export {
    getAll,
    getById
}
