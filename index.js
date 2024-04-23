
const express = require('express');

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const upload = multer();
const cors = require('cors');
const app = express();

const { sc } = require('./models/todo')
const passwords="msohail";
const port = 3000;
const {setuser, getuser}=require('./controllers/auth')
app.use(cors());
// Enable form-data parsing middleware for file uploads
app.use(upload.none());
app.use(cookieParser());
// Set the views directory (optional, as 'views' is the default)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const fs=require('express')


const mongoURI = 'mongodb+srv://umer:umer@cluster0.avg1bjf.mongodb.net/railway?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

//routes




// Body parsers should be placed before route definitions
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// Routes

app.get('/', function (req, res) {
  res.render('login')

})

app.post('/', async function (req, res) {
  const {password}=req.body;
  try {
    if(password==passwords){
      const token=await setuser(password);
      res.cookies('token',token);
    }

    const token=req.cookies.token;

    if(!token){
      res.render('login')
    }
    const u=await getuser(password)
    if(!u){
      res.render('login')
    }
    if(u){
      res.render('umer')
    }

    
    

  } catch (error) {
    res.send(error)
  }})



  // Start the serve
  app.listen(port, () => {
    console.log('Server is listening on Port', port);
  })