import Animal from '../models/animal.model.js';

const getAllAnimais = async () => {
    try {
        return await Animal.findAll();
    } catch (error) {
        throw error;
    }
}

const getByIdAnimal = async (id) => {
    try {
        return await Animal.findByPk(id);
    } catch (error) {
        throw error;
    }
}

const createAnimal = async (animal) => {
    try {
        return await Animal.create(animal);
    } catch (error) {
        throw error;
    }
}

const updateAnimal = async (animal) => {
    try {
        await Animal.update(animal, {
            where:{
                id: animal.id
            }
        });
        return await getByIdAnimal(animal.id);
    } catch (error) {
        throw error;
    }
}

const deleteAnimal = async (id) => {
    try {
        return await Animal.destroy({
            where: {
                id: id
            }
        });
    } catch (error) {
        throw error;
    }
}

const getByProprietario = async (proprietarioId) => {
    try {
        return await Animal.findAll({
            where: {
                proprietariosId: proprietarioId
            }
        })
    } catch (error) {
        throw error;
    }
}

export {
    getAllAnimais,
    getByIdAnimal,
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getByProprietario
}
