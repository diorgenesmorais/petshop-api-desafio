import {
    getAllProprietarios,
    getByIdProprietario,
    createProprietario
} from '../repositories/proprietario.repository.js';

const getAll = async () => getAllProprietarios();

const getById = async (id) => getByIdProprietario(id);

const save = async (entity) => createProprietario(entity);

export {
    getAll,
    getById,
    save
}
