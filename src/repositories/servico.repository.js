import Servico from '../models/servico.model.js';
import Animal from '../models/animal.model.js';

const getAllServicos = async () => {
    try {
        return await Servico.findAll({
            include: [
                {
                    model: Animal
                }
            ]
        });
    } catch (error) {
        throw error;
    }
}

const getByIdServico = async (id) => {
    try {
        return await Servico.findByPk(id);
    } catch (error) {
        throw error;
    }
}

const createServico = async (servico) => {
    try {
        return await Servico.create(servico);
    } catch (error) {
        throw error;
    }
}

const updateServico = async (servico) => {
    try {
        await Servico.update(servico, {
            where:{
                id: servico.id
            }
        });
        return await getByIdServico(servico.id);
    } catch (error) {
        throw error;
    }
}

const deleteServico = async (id) => {
    try {
        return await Servico.destroy({
            where: {
                id: id
            }
        });
    } catch (error) {
        throw error;
    }
}

const getByProprietario = async (proprietariosId) => {
    try {
        return await Servico.findAll({
            include: [
                {
                    model: Animal,
                    where: {
                        proprietariosId
                    }
                }
            ]
        })
    } catch (error) {
        throw error;
    }
}

export {
    getAllServicos,
    getByIdServico,
    createServico,
    updateServico,
    deleteServico,
    getByProprietario
}
