import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Crud app listening on port ${PORT}!`))