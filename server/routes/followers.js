const express = require('express');
const {asyncHandler} = require('./utilities/utils')
const {requireAuth, getUserToken} = require('./utilities/auth')
const {check, validationResult} = require('express-validator')
const {User, Follower, Playlist, PlaylistVideo, Reply, Video,Comment } =require('../db/models');


const router = express.Router();

//router.use(requireAuth)

const followedExist = (id) =>{
  const err = new Error('Follow Exists Already');
  err.status = 404
  err.title = "Follow Exists Already";
  return err
}

const followedDoesNotExist = (id) =>{
  const err = new Error('Follow does not exist');
  err.status = 404
  err.title = "Follow does not exist";
  return err
}

router.post('/user/:userid/:type/:typeid', asyncHandler(async(req,res,next)=>{
  const userId = parseInt(req.params.userid,10)
  const typeId = parseInt(req.params.typeid,10)
  const type = req.params.type

  const follow = await Follower.findOne({
    where: {
      user_id: userId,
      followable_id: typeId,
      followable_type: type
    }
  })
  if(follow){
    next(followedExist(typeId))
  }else{
    const follow = await Follower.create({followable_type: type, followable_id: typeId, user_id: userId})
    res.json({"message": "Followed"})
  }


}))

router.delete('/user/:userid/:type/:typeid', asyncHandler(async(req,res,next)=>{
  const userId = parseInt(req.params.userid,10)
  const typeId = parseInt(req.params.typeid,10)
  const type = req.params.type

  const unfollow = await Follower.findOne({
    where: {
      user_id: userId,
      followable_id: typeId,
      followable_type: type
    }
  })
  if(unfollow){
    next(followedDoesNotExist(typeId))
  }else{
    const unfollow = await Follower.destroy({followable_type:type, followable_id: typeId, user_id: userId})
    res.json({unfollow})
  }
}))



module.exports = router;