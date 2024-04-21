const mongoose=require('mongoose')

const scam=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
    required:true
    }

})

const sc=mongoose.model('sc',scam)
module.exports={
    sc:sc
}