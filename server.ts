// @ts-ignore
import express from 'express';
const app = express();

app.get('/hello', (req, res) =>
res.send("Hello World!"));

const port = 4000;
app.listen(port);