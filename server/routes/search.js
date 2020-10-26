const express = require('express');
const {asyncHandler} = require('./utilities/utils')
const {requireAuth, getUserToken} = require('./utilities/auth')
const {check, validationResult} = require('express-validator')
const {apiKey} = require('./utilities/apiKey')
const {youtube} = require('./utilities/youtube')
const {User, Follower, Playlist, PlaylistVideo, Reply, Video,Comment } =require('../db/models')


const router = express.Router()

router.get('/:searchterm', asyncHandler(async(req,res,next)=>{
  const searchTerm = req.params.searchterm;

  const response = await youtube.get(`/search?part=snippet&q=${searchTerm}&type=video&maxResults=25&key=${apiKey}`);
  
  // const response = await youtube.get('/search?part=snippet',{
  //   params: {
  //     q: searchTerm,
  //     type: "video",
  //     maxResults: 25,
  //     key: apiKey,
  //   },
  // })
  
  const {data:{items}} =response


  // console.log(response.data)
  res.json(response.data.items) //array of video
}))

module.exports = router