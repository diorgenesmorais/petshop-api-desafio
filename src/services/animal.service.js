import {
    getAllAnimais,
    getByIdAnimal,
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getByProprietario
} from '../repositories/animal.repository.js';

const getAll = async () => getAllAnimais();

const getById = async (id) => getByIdAnimal(id);

const save = async (entity) => createAnimal(entity);

const update = async (entity) => updateAnimal(entity);

const remove = async (id) => deleteAnimal(id);

const filter = async (proprietarioId) => getByProprietario(proprietarioId);

export {
    getAll,
    getById,
    save,
    update,
    remove,
    filter
}
