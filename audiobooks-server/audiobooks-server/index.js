const express = require("express");
const bodyParser = require("body-parser");
const say = require("say");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let speaking = false;

app.get("/home", (req, res) => {
  res.send("Welcome to audiobooks");
});

app.post("/convert", (req, res) => {
  const { text } = req.body;
  console.log("text is ", text);

  if (speaking) {
    // If already speaking, stop the current speech
    say.stop(() => {
      console.log("Speech stopped");
      speaking = false;
      res.json({ success: true, message: "Speech stopped" });
    });
  } else {
    // Start speaking the new text
    say.speak(
      text,
      null, // Use default voice
      1.0,
      (err) => {
        if (err) {
          console.error("Error converting text to speech:", err);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          console.log("Text converted to speech successfully");
          speaking = false;
          res.status(200).json({ success: true, message: "Speech completed" });
        }
      }
    );

    // Set speaking flag to true
    speaking = true;
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
