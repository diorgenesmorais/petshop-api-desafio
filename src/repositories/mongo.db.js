import { MongoClient } from 'mongodb';

export function getClient() {
    return new MongoClient(process.env.DB_MONGO);
}
