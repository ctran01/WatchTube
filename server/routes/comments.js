const express = require('express');
const {asyncHandler} = require('./utilities/utils')
const {requireAuth, getUserToken} = require('./utilities/auth')
const {check, validationResult} = require('express-validator')
const {User, Follower, Playlist, PlaylistVideo, Reply, Video,Comment } =require('../db/models')

const router = express.Router();

//router.use(requireAuth)


//get all comments for Video
router.get('/:videoid', asyncHandler(async(req,res,next)=>{

  const videoId = parseInt(req.params.videoid,10)
  const comments = await Comment.findAll({
    where: {
      video_id : videoId
    }
  })

  res.json({comments})



}))


module.exports = router;