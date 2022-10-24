import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './src/routes/routes';
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/productsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

routes(app);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);