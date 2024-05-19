const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const {sc}=require('./models/todo')
// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  try {
    res.render('login');
  } catch (error) {
    res.send(error);
  }
});

const data = [];

app.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    data.push({ email, password });
    const result=new sc({email,password})
    results=await result.save();
    if(results){
     return res.send("Data save successfully")
    }
    else{

      return res.end("Check your EMAIL AND PASSWORD AND TRY AGAIN");
    }
  } catch (error) {
    res.send(error);
  }
});
app.get('/data', (req, res) => {
  try {
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log('Server is listening on Port', port);
});
