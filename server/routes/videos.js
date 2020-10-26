const express = require('express');
const {asyncHandler} = require('./utilities/utils')
const {requireAuth, getUserToken} = require('./utilities/auth')
const {check, validationResult} = require('express-validator')
const {User, Follower, Playlist, PlaylistVideo, Reply, Video,Comment } =require('../db/models')

const router = express.Router();

//router.use(requireAuth)

router.get('/', asyncHandler(async(req,res,next)=>{

  const videos = await Video.findAll({})

  res.json({videos})
}))


module.exports = router;