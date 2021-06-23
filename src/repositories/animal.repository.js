import { connect } from './db.js';

const getAllAnimais = async () => {
    const conn = await connect();
    try {
        const result = await conn.query('SELECT * FROM animais');
        return result.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

const getByIdAnimal = async (id) => {
    const conn = await connect();
    try {
        const result = await conn.query('SELECT * FROM animais WHERE id = $1', [id]);
        return result.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

const createAnimal = async (animal) => {
    const conn = await connect();
    try {
        const { nome, tipo, proprietarios_id } = animal;
        const sql = `INSERT INTO animais
                        (nome, tipo, proprietarios_id)
                    VALUES ($1, $2, $3) RETURNING *`;
        const values = [nome, tipo, proprietarios_id];
        const result = await conn.query(sql, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

const updateAnimal = async (animal) => {
    const conn = await connect();
    try {
        const { id, nome, tipo } = animal;
        const sql = `UPDATE animais
                    SET nome = $1, tipo = $2
                    WHERE id = $3 RETURNING *`;
        const values = [nome, tipo, id];
        const result = await conn.query(sql, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

const deleteAnimal = async (id) => {
    const conn = await connect();
    try {
        const { rowCount } = await conn.query('DELETE FROM animais WHERE id = $1', [id]);
        return rowCount;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

const getByProprietario = async (proprietarioId) => {
    const conn = await connect();
    try {
        const sql = 'SELECT * FROM animais WHERE proprietarios_id = $1';
        const result = await conn.query(sql, [proprietarioId]);
        return result.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
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
