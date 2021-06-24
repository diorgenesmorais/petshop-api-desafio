import Sequelize from 'sequelize';
import { connect } from '../repositories/db.js';

const Proprietario = connect.define('proprietarios', {
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
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { underscored: true });

export default Proprietario;
