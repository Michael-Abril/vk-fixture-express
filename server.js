const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (_req, res) => res.send("Varity Express fixture OK :: ghapp-autodeploy-1782847833"));
app.listen(port, () => console.log("vk-fixture-express listening on " + port));