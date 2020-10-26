'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   const users = await queryInterface.bulkInsert('Users',
   [
     {
     username: 'Demo',
     email: 'demo@email.com',
     hashed_password: bcrypt.hashSync('password'),
     },

     {
      username: 'Quinn XCII',
      email: 'QuinnXCII@email.com',
      hashed_password: bcrypt.hashSync('password')
    
    }
     ],
       {returning:true});
    
  const videos = await queryInterface.bulkInsert('Videos',
  [
    {
      title: 'Quinn XCII - "Stacy" Live Performance | Vevo',
      description: 'Quinn XCII - Stacy (Live Performance) \n\nWe don\'t have a lot of artists arrive at the Vevo studios with a string trio, but Quinn XCII had two violinists and a cellist in tow when he arrived to drop a poignant spin on his brand new song, "Stacy." Fans know Quinn\'s been turning heads for the last few years; his last two albums, \'The Story of Us\' and \'From Michigan With Love,\' moved him forward on the pop racetrack - these days more and more people are declaring their love for the Detroit native (whose real name is Mikael Temrowski). Massive Spotify streaming numbers for "Straightjacket" and "Flareguns" helped a lot towards this victory. Ditto for videos such "Tough," whose track featured Noah Kahan. See where the strings and piano take him in this stripped-down version of "Stacy." \n\nViolin: Molly Fletcher\nViolin: Chiara Fasi\nCello: Kristine Kruta\nPiano: J.T. Becker \n\nExecutive Producer: Micah Bickham\nDirector: Kyle Goldberg\nProducer: Sacha Noelle\nDirector of Photography: Bram Vandermark\nEditor: Ramy Elsokary\nMusic & Talent: Gabriela Prisciandaro, Sam Mackoff\n\nVevo \nhttp://facebook.com/vevo\nhttp://twitter.com/vevo\nhttp://instagram.com/vevo\n\nQuinn XCII:\nhttp://quinnxcii.com/\nhttps://www.facebook.com/quinnxcii\nhttps://twitter.com/quinnxcii\nhttps://www.instagram.com/quinnxcii \n\nWatch Quinn XCII music videos:  https://bit.ly/2Jzfjh1\nListen to "Stacy" https://youtu.be/wMIXt_9lZAU  \n\n#QuinnXCII  #QuinnXCIILive  #Stacy\n\nhttp://vevo.ly/kK6b34',
      user_id: 2,
      likes: 4851,
      views: 169453,
      dislikes: 46,
      source: "J0lKgt7dxbU",
      image_url: "https://i.ytimg.com/vi/J0lKgt7dxbU/default.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
    {returning:true});


  const comments = await queryInterface.bulkInsert('Comments',
  [
    {
      comment_text: "Test Comment",
      video_id: 1,
      user_id: 1,
      likes: 69,
      dislikes: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],{returning:true});
  

  const playlists = await queryInterface.bulkInsert('Playlists',
  [
    {
      user_id: 1,
      name: 'Test Playlist',
      description: 'my playlist',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])

  const playlistvideos = await queryInterface.bulkInsert('PlaylistVideos',
  [
    {
      playlist_id: 1,
      video_id: 1
    }
  ],{returning:true});

  const replies = await queryInterface.bulkInsert('Replies',
  [
    {
      reply_text: "Awesome reply",
      user_id: 2,
      comment_id: 1,
      likes: 70,
      dislikes: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {returning:true});

  const followers = await queryInterface.bulkInsert('Followers',
  [
    {
      followable_type: "playlist",
      followable_id: 1,
      user_id: 2
    }
  ], {returning: true})
},
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Followers',null,{});
     await queryInterface.bulkDelete('Replies',null,{});
     await queryInterface.bulkDelete('PlaylistVideos',null,{});
     await queryInterface.bulkDelete('Playlists',null,{});
     await queryInterface.bulkDelete('Comments',null,{});
     await queryInterface.bulkDelete('Videos',null,{});
     await queryInterface.bulkDelete('Users',null,{});
  }
};
