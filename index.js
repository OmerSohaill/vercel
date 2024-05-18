const express = require('express');


const path = require('path');
const { sc } = require('./models/todo')
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  try {

    res.render('login');
  } catch (error) {
    res.send(error)
  }
});
const data = [];

app.post('/', async function (req, res) {
  try {
    const { email, password } = req.body;
    data.push(email, password);
   

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
