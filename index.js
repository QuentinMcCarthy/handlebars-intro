const express = require("express");

const app = express();

app.get(`/`, (req,res) => res.end("Server running"));

app.set(`port`, (process.env.PORT || 3000));

app.listen(app.get(`port`), () => console.log(`Server running on port ${app.get(`port`)}`));
