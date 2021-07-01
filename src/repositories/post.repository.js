import mongodb from 'mongodb';
import { getClient } from './mongo.db.js';

const getAllPosts = async () => {
    const client = getClient();
    try {
        await client.connect();
        return await client.db('petshop').collection('posts').find({}).toArray();
    } catch (error) {
        throw error;
    } finally {
        await client.close();
    }
}

const createPost = async (post) => {
    const client = getClient();
    try {
        await client.connect();
        const { ops } = await client.db('petshop').collection('posts').insertOne(post);
        return ops[0];
    } catch (error) {
        throw error;
    } finally {
        await client.close();
    }
}

const updateOne = async (post) => {
    const client = getClient();
    try {
        const { _id, titulo, conteudo } = post;
        await client.connect();
        const { modifiedCount } = await client.db('petshop').collection('posts').updateOne(
            { _id: mongodb.ObjectId(_id) },
            {$set: { titulo, conteudo }}
        );
        return modifiedCount;
    } catch (error) {
        throw error;
    } finally {
        await client.close();
    }
}

export {
    getAllPosts,
    createPost,
    updateOne
}
