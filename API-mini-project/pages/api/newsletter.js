function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    console.log("in api");

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email input." });
      console.log("wrong");
      return;
    }

    console.log(userEmail);
    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
