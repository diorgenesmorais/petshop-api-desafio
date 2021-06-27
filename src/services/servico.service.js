import {
    getAllServicos,
    getByIdServico,
    createServico,
    updateServico,
    deleteServico,
    getByProprietario
} from '../repositories/servico.repository.js';

const getAll = async () => getAllServicos();

const getById = async (id) => getByIdServico(id);

const save = async (entity) => createServico(entity);

const update = async (entity) => updateServico(entity);

const remove = async (id) => deleteServico(id);

const filter = async (proprietarioId) => getByProprietario(proprietarioId);

export {
    getAll,
    getById,
    save,
    update,
    remove,
    filter
}
