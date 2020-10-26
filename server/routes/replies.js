const express = require('express');
const {asyncHandler} = require('./utilities/utils')
const {requireAuth, getUserToken} = require('./utilities/auth')
const {check, validationResult} = require('express-validator')
const {User, Follower, Playlist, PlaylistVideo, Reply, Video,Comment } =require('../db/models')

const router = express.Router();


const commentNotFound = (id) =>{
  const err = new Error('Comment was not found');
  err.status = 404
  err.title = "Comment was not found"
  return err
}

//router.use(requireAuth)

//get all replies for a comment

router.get('/:commentid', asyncHandler(async(req,res,next)=>{
  const commentId = parseInt(req.params.commentid,10);

  const replies = await Reply.findAll({
    where:{
      comment_id : commentid
    }
  })
  if(replies){
    res.json({reply})
  }else{
    next(commentNotFound(commentId))
  }

}))


module.exports = router;