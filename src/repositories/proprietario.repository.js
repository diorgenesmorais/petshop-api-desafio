import { connect } from './db.js';

const getAllProprietarios = async () => {
    const conn = await connect();
    try {
        const result = await conn.query('SELECT * FROM proprietarios');
        return result.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

const getByIdProprietario = async (id) => {
    const conn = await connect();
    try {
        const result = await conn.query('SELECT * FROM proprietarios WHERE id = $1', [id]);
        return result.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

export {
    getAllProprietarios,
    getByIdProprietario
}
