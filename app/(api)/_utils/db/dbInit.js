const { getClient } = require('./mongoClient.js');
const readline = require('readline');
const collections = require('../../_data/collections.json');
const schema = require('../../_data/schemaValidation.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function dbInit(wipe) {
  try {
    const client = await getClient();
    const db = client.db();

    if (wipe === 'y') {
      // Drop existing collections
      const collectionNames = await db.listCollections().toArray();
      collectionNames.forEach((collection) =>
        db.dropCollection(collection.name)
      );
      console.log('Deleted existing collections');
    }
    console.log('\n');

    // Create collections if they don't already exist
    for (const c of collections) {
      await db.createCollection(c, {
        validator: {
          $jsonSchema: schema[c],
        },
      });
      console.log(`Created collection: ${c}...`);
    }
    console.log('Created collections');

    await client.close();
  } catch (error) {
    console.log(error);
  }
}

// decide if we want to wipe the database
let wipe = '';
rl.question('Would you like to reset your database? (y/n): ', function (str) {
  const lowerStr = str.toLowerCase();
  if (lowerStr === 'y' || lowerStr === 'n') {
    wipe = lowerStr;
  }
  dbInit(wipe);
  rl.close();
});
