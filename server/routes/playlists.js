const express = require('express');
const {asyncHandler} = require('./utilities/utils')
const {requireAuth, getUserToken} = require('./utilities/auth')
const {check, validationResult} = require('express-validator')
const {User, Follower, Playlist, PlaylistVideo, Reply, Video,Comment } =require('../db/models')

const router = express.Router();

//router.use(requireAuth)

const userNotFound =(id)=>{
  const err = new Error('User not found')
  err.status = 404
  err.title= "User not found"
  return err
}
const playlistNotFound = (id)=>{
  const err = new Error('Playlist not found')
  err.status = 404
  err.title = "Playlist not found"
  return err
}

//Get all playlists for user

router.get('/:userid', asyncHandler(async(req,res,next)=>{
  const userId = parseInt(req.params.userId,10)
  const playlists = await Playlist.findAll({
    where:{
      user_id : userId
    }
  })
  if(playlists){
    res.json({playlists})
  }else{
    next(userNotFound(userId))
  }

router.get('/:playlistid/user/:userid', asyncHandler(async(req,res,next)=>{
  const playlistId = parseInt(req.params.playlistid,10)
  const userId = parseInt(req.params.userid,10)
  const playlist = await Playlist.findByPK(playlistId)
}))
  if(playlist){
    res.json({playlist});
  }else{
    next(playlistNotFound(playlistId))
  }
}))



//get information for one playlist



module.exports = router;