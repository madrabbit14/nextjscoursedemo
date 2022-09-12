import { MongoClient } from "mongodb";

//server side code

async function handler(req, res) {
  //ensuring only POST work
  if (req.method === "POST") {
    const data = req.body;
    //const { title, image, description, address } = data;

    //secure place to use credentials, only server side
    console.log("API handler: connecting");
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.REACT_APP_DB_USER}:${process.env.REACT_APP_DB_PW}@${process.env.REACT_APP_DB_URL}${process.env.REACT_APP_DB_PARAMS}`
      );
    console.log("API handler: connected. getting db");
    const db = client.db();
    console.log("API handler: got DB, getting collection");

    const meetupsCollection = db.collection("meetups");
    console.log("API handler: got collection, inserting one");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
