const mongoose=require('mongoose')

const scam=new mongoose.Schema({
    email:{
        type:String,
       
        
    },
    password:{
        type:String,

    }

})

const sc=mongoose.model('sc',scam)
module.exports={
    sc:sc
}