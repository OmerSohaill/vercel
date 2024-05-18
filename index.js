const express = require('express');


const path = require('path');
const { sc } = require('./models/todo')
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
const mongoose = require('mongoose')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const data = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoURI = 'mongodb+srv://umer:umer@cluster0.avg1bjf.mongodb.net/railway?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });



  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  }
);

app.get('/', function (req, res) {
  try {

    res.render('login');
  } catch (error) {
    res.send(error)
  }
});

app.post('/', async function (req, res) {
  try {
    const { email, password } = req.body;
    data.push(email, password);
    const result = new sc({ email, password })
    await result.save();
    console.log(result)
    if (!result) {
      res.send('you got some error')
    }
   

    res.send({ message: "Data save successfully " })

  } catch (error) {
    res.send(error)
  }



})
app.get('/data', function (req, res) {
  try {

    res.send(data)
  } catch (error) {
    res.send(error)
  }
})
app.listen(port, () => {
  console.log('Server is listening on Port', port);
});
