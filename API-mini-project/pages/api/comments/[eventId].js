function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    // add server side validation
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    res.status(210).json({ message: "added comment.", comment: newComment });
  }
  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "name", text: "a" },
      { id: "c2", name: "name2", text: "a2" },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
