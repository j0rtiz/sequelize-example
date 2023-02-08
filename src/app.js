const { createUser } = require("./services/user");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const response = await createUser(req.body);

    return res.status(201).json(response);
  } catch (error) {
    return res.status(error.status).json(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
