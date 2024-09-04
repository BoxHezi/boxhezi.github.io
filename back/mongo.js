import { MongoClient } from "mongodb";

// const url = "mongodb://localhost:27017";
const url = "mongodb://boxhezi-db:27017"; // docker
const dbName = "boxhezi";

const connect = async () => {
  let mongo = await MongoClient.connect(url, (err, client) => {
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
  let db = client.db(dbName);
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
