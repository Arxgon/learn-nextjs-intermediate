import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    console.log("in api");

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email input." });
      console.log("wrong");
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://admin:PgnnXmNsOCIgC73e@cluster0.bcvsh.mongodb.net/events?retryWrites=true&w=majority"
    );
    const db = client.db();

    await db.collection("emails").insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
