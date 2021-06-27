import Sequelize from "sequelize";
import { connect } from '../repositories/db.js';
import Animal from "./animal.model.js";

const Servico = connect.define('servicos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
});

Servico.belongsTo(Animal, { foreignKey: 'animais_id' });

export default Servico;
