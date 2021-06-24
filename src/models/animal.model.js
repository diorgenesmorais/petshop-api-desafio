import Sequelize from "sequelize";
import { connect } from '../repositories/db.js';
import Proprietario from './proprietario.model.js';

const Animal = connect.define('animais', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { underscored: true });

Animal.belongsTo(Proprietario, { foreignKey: 'proprietariosId' });

export default Animal;