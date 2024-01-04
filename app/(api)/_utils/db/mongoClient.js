const { MongoClient } = require('mongodb');

const uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB_HOST}`;
let cachedClient = null;

async function getClient() {
  if (cachedClient) {
    return cachedClient;
  }
  const client = new MongoClient(uri);
  cachedClient = client;
  return cachedClient;
}

async function getDatabase() {
  const client = await getClient();
  return client.db();
}

module.exports = { getClient, getDatabase };
