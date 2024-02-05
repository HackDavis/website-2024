import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let cachedClient = null;

export async function getClient() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return cachedClient;
}

export async function getDatabase() {
  const client = await getClient();
  return client.db('teamDB');
}
