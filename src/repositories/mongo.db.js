import mongodb from 'mongodb';

export function getClient() {
    return new mongodb.MongoClient(process.env.DB_MONGO, {useUnifiedTopology: true});
}
