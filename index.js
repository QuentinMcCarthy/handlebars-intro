const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const router = express.Router();

const home = require("./routes/index.js");
const about = require("./routes/about.js");

app.engine(`handlebars`, exphbs({ defaultLayout: `main` }));

// app.get(`/`, (req,res) => res.end(`Error 403: Access Denied`));

app.use(`/`, home);
app.use(`/about`, about);
app.use(express.static(path.join(__dirname, `public`)));

app.set(`port`, (process.env.PORT || 3000));
app.set(`view engine`, `handlebars`);

app.listen(app.get(`port`), () => console.log(`Server running on port ${app.get(`port`)}`));
