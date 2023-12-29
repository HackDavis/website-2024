const dbConnect = require('./mongoClient.js');

async function dbInit() {
  try {
    const client = await dbConnect();
    console.log('connected to db');
    const db = client.db();

    // Drop existing collections
    const collectionNames = await db.listCollections().toArray();
    collectionNames.forEach((collection) => db.dropCollection(collection.name));

    // Create collections if they don't already exist
    await db.createCollection('trainers');
    await db.createCollection('pokemon');
    console.log('created collections');

    await client.close();
  } catch (error) {
    console.log(error);
  }
}

dbInit();
