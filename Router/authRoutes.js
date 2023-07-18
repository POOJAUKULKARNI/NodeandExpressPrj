const express= require("express")
const {getLogin,getSignup, postSignup, postLogin}=require("../Controller/authController")


let authRouter= express.Router()

authRouter.get('/signup',getSignup)
authRouter.get('/login',getLogin)
authRouter.post('/signup',postSignup)
authRouter.post('/login',postLogin)

module.exports = authRouter
