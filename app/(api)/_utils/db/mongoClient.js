const { MongoClient } = require('mongodb');

const uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB_HOST}`;
let cachedClient = null;

async function dbConnect() {
  if (cachedClient) {
    console.log('Cache Hit!');
    return cachedClient;
  }
  const client = new MongoClient(uri);
  cachedClient = client;
  console.log('Cache Miss :(');
  return cachedClient;
}

module.exports = dbConnect;
