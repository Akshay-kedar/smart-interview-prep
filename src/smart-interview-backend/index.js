const express= require('express')
const cors=require('cors')
const bodyParser=require('body-parser');
require('dotenv').config()

const questionsRoute = require('./routes/questions');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api', questionsRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });