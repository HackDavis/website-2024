import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
let cachedClient = null;

export async function getClient() {
  if (cachedClient) {
    return cachedClient;
  }
  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    cachedClient = client;
    console.log('connected to mongoDB');
    return cachedClient;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

export async function getDatabase() {
  const client = await getClient();
  return client.db('teamDB');
}

export async function getMailCollection() {
  const db = await getDatabase();
  return db.collection('mailing_list25');
}
