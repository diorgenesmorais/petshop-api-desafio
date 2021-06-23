import { getAllProprietarios } from '../repositories/proprietario.repository.js';

const getAll = async () => getAllProprietarios();

export {
    getAll
}
