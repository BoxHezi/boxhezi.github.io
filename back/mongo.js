import { MongoClient } from "mongodb";

const DB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017";
const DB_NAME = process.env.MONGODB_NAME || "boxhezi";
// console.log(DB_URL, DB_NAME);

const connect = async () => {
  let mongo = await MongoClient.connect(DB_URL, (err, client) => {
    if (err) {
      console.log(err);
      throw err;
    }
  });
  return mongo;
};

const getData = async (endpoint, reverseOrder = false) => {
  let result = [];
  let client = await connect();
  let db = client.db(DB_NAME);
  const data = db.collection(endpoint).find({});
  for await (const doc of data) {
    result.push(doc);
  }

  if (reverseOrder) {
    result.reverse();
  }

  if (client) {
    await client.close();
  }
  return result;
};

export { getData };
