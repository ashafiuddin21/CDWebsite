const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let emailList = []; // In-memory storage

app.post("/api/signup", (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "Invalid email address." });
  }

  if (emailList.includes(email)) {
    return res.status(409).json({ message: "Email already signed up." });
  }

  emailList.push(email);
  console.log("New email signed up:", email);

  res.status(200).json({ message: "Successfully signed up!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
