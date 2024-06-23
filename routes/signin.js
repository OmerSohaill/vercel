const express=require('express')
const routes=express.Router();
const {setuser}=require('../auth/auth')
const umer=[{email:'muhammadumersohail27@gmail.com',password:"msohail"}]

routes.post('/', async function(req, res) {
    console.log("req is coming")
    const { email, password } = req.body;
    try {
        if (email === umer[0].email && password === umer[0].password) {
            const token = await setuser(email, password);
            res.cookie("token", token).render('home');
        } else {
            return res.status(400).render('signup');
        }
    } catch (error) {
        console.error("Error setting user token:", error);
        return res.status(500).send("Internal Server Error");
    }
});


module.exports=routes;