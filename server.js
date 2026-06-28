import express from "express";
import sum from "./sum.js";
const app = express();
const PORT = 8000;

app.get("/home", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/sum/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const result = sum(Number(a), Number(b));
    res.json({ ans: result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});