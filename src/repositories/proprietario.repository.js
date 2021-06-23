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

const createProprietario = async (proprietario) => {
    const conn = await connect();
    try {
        const { nome, telefone } = proprietario;
        const sql = `INSERT INTO proprietarios
                        (nome, telefone)
                    VALUES ($1, $2) RETURNING *`;
        const values = [nome, telefone];
        const result = await conn.query(sql, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

const updateProprietario = async (proprietario) => {
    const conn = await connect();
    try {
        const { id, nome, telefone } = proprietario;
        const sql = `UPDATE proprietarios
                    SET nome = $1, telefone = $2
                    WHERE id = $3 RETURNING *`;
        const values = [nome, telefone, id];
        const result = await conn.query(sql, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

const deleteProprietario = async (id) => {
    const conn = await connect();
    try {
        const { rowCount } = await conn.query('DELETE FROM proprietarios WHERE id = $1', [id]);
        return rowCount;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

export {
    getAllProprietarios,
    getByIdProprietario,
    createProprietario,
    updateProprietario,
    deleteProprietario
}
