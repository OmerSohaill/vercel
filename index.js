const http=require('http')
const express=require('express');
const app=express();
const path=require('path')
const server=http.createServer(app)
const {Server}=require('socket.io')
const io=new Server(server)


app.use(express.static(path.resolve("./public")))

app.get('/',function(req,res){
    return res.sendFile('./public/index.html')
})

app.get('/umer',function(req,res){
    res.render('form')
})

//Socket.io
io.on('connection',function(socket){

    socket.on('user-message',function(message){
       io.emit("message",message)
    })

})
const port=process.env.PORT || 3000

server.listen(3000,function(){
    console.log("Server is listening on port 3000")
})