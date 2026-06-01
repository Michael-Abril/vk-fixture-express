const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (_req, res) => res.send("Varity Express fixture OK"));
app.listen(port, () => console.log("vk-fixture-express listening on " + port));
