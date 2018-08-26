const express = require("express");

const app = express();
const router = express.Router();

const home = require("./routes/index.js");
const about = require("./routes/about.js");

// app.get(`/`, (req,res) => res.end(`Error 403: Access Denied`));

app.use(`/`, home);
app.use(`/about`, about);

app.set(`port`, (process.env.PORT || 3000));

app.listen(app.get(`port`), () => console.log(`Server running on port ${app.get(`port`)}`));
