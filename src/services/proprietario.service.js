import {
    getAllProprietarios,
    getByIdProprietario,
    createProprietario,
    updateProprietario,
    deleteProprietario
} from '../repositories/proprietario.repository.js';

const getAll = async () => getAllProprietarios();

const getById = async (id) => getByIdProprietario(id);

const save = async (entity) => createProprietario(entity);

const update = async (entity) => updateProprietario(entity);

const remove = async (id) => deleteProprietario(id);

export {
    getAll,
    getById,
    save,
    update,
    remove
}
