import Proprietario from '../models/proprietario.model.js';

const getAllProprietarios = async () => {
    try {
        return null;
    } catch (error) {
        throw error;
    }
}

const getByIdProprietario = async (id) => {
    try {
        return null;
    } catch (error) {
        throw error;
    }
}

const createProprietario = async (proprietario) => {
    try {
        return await Proprietario.create(proprietario);
    } catch (error) {
        throw error;
    }
}

const updateProprietario = async (proprietario) => {
    try {
        return null;
    } catch (error) {
        throw error;
    }
}

const deleteProprietario = async (id) => {
    try {
        return null;
    } catch (error) {
        throw error;
    }
}

export {
    getAllProprietarios,
    getByIdProprietario,
    createProprietario,
    updateProprietario,
    deleteProprietario
}
