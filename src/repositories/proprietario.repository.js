import Proprietario from '../models/proprietario.model.js';

const getAllProprietarios = async () => {
    try {
        return await Proprietario.findAll();
    } catch (error) {
        throw error;
    }
}

const getByIdProprietario = async (id) => {
    try {
        return await Proprietario.findByPk(id);
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
        await Proprietario.update(proprietario, {
            where:{
                id: proprietario.id
            }
        });
        return await getByIdProprietario(proprietario.id);
    } catch (error) {
        throw error;
    }
}

const deleteProprietario = async (id) => {
    try {
        return await Proprietario.destroy({
            where: {
                id: id
            }
        });
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
