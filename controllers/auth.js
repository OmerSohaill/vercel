const jwt=require('jsonwebtoken')
const secret="umer"
function setuser(user){
    const password=user.password;
    return jwt.sign(user,secret)
}

function getuser(token){
    if(!token)return null;

    return jwt.verify(token,secret)

}
module.exports={
    setuser,
    getuser
}