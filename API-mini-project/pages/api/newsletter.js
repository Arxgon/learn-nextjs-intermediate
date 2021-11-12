import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:PgnnXmNsOCIgC73e@cluster0.bcvsh.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

async function insertDocument(client, document) {
  const db = client.db();

  await db.collection("emails").insertOne(document);
}

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    console.log("in api");

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email input." });
      console.log("wrong");
      return;
    }

    let client;

    try {
      const client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "connecting to database failed" });
      return;
    }

    try {
      await insertDocument(client, { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "inserting failed" });
      return;
    }

    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
