import express from 'express';
import path from 'path'

const app = express();

const PORT = 5000;
const publicDirectory = path.join(__dirname, "../../client/build");
app.use(express.static(publicDirectory))

app.get("*", (req, res) => {
  res.sendFile(publicDirectory);
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
