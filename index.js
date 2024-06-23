const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const server = http.createServer(app);
const {getuser}=require('../vercel/auth/auth')
 const cookieParser = require('cookie-parser'); 

app.use(express.json())
app.use(cookieParser());


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("./public")));
app.set('view engine', 'ejs');
app.set('views', './views')
//ALL MIDDLE WARE ARE HERE
app.use('/login',async function(req,res){
    const token=req.cookies.token;
    if(!token){
       return res.render('signup')
    }
    const user=await getuser(token)
    if(!user){
        return res.render('signup')
    }

  return  res.render('home')

})




const signin=require('../vercel/routes/signin')
app.use('/signin',signin)


// Socket.io
const port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log("Server is listening on port " + port);
});
