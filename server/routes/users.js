const express = require('express');
const bcrypt = require('bcryptjs');
const {asyncHandler} = require('./utilities/utils')
const {requireAuth, getUserToken} = require('./utilities/auth')
const {check, validationResult} = require('express-validator')
const {User} =require('../db/models')

const router = express.Router();


validateUserFields = [
  check("username")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a username"),
  check("email")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a valid email"),
  check("password")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a valide password")
]

const validateEmailPassword = [
  check("email")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a valid email"),
  check("password")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a valid password")
]


router.post('/signup', validateUserFields, asyncHandler(async(req,res)=>{
  const {username, email, password} = req.body
  const hashedPassword = await bcrypt.hash(password,10);

  try{
    const user = await User.create({username: username, email: email, hashed_password: hashedPassword})
    const token = getUserToken(user)

    res.status(201).json({
      user: {id: user.id},
      token
    })
  }catch(err){
      res.status(422).send(err.message)
  }

}))

router.post('/login', validateEmailPassword, asyncHandler(async(req,res,next)=>{
  const {email, password} = req.body
  
  if(!email || !password) {
    return res.status(422).send({error: 'Must provide email and password'})
  }

  const user = await User.findOne({
    where:{
      email
    }
  })

  if(!user || !user.validatePassword(password)){
    const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["the provided credentials were invalid"];
        return next(err);
  }
  const token = getUserToken(user);

  res.json({
    token, 
    user: { id: user.id }
  })
}))

module.exports = router;