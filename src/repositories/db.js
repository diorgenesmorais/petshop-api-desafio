import Sequelize from 'sequelize';

const connect = new Sequelize(
    process.env.DATABASE_URL,
    {
        dialect: 'postgres',
        define: {
            timestamps: false
        }
    }
);

export {
    connect
}