import { getClient } from './mongo.db.js';

const getAllPosts = async () => {
    const client = getClient();
    try {
        await client.connect();
        console.log('conectou ao Mongo DB');
        return await client.db('petshop').collection('posts').find({}).toArray();
    } catch (error) {
        throw error;
    } finally {
        await client.close();
    }
}

export {
    getAllPosts
}
