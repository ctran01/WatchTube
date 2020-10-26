'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Video.belongsTo(models.User,{
        foreignKey: 'user_id'
      })
      
      Video.belongsToMany(models.Playlist,{
        foreignKey:"video_id",
        through:"PlaylistVideos",
        otherKey:"playlist_id"
      })

      Video.belongsToMany(models.User,{
        as: 'followers',
        through: {
          model: 'Follower',
          scope:{
            followable_type: 'video'
          }
        },
        foreignKey: 'followable_id',
        constraints: false
      })
    }
  };
  Video.init({
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
    },
    views: {
      type: DataTypes.INTEGER,
    },
    dislikes:{
      type: DataTypes.INTEGER
    },
    //videoId or video.id
    source: {
      type: DataTypes.STRING
    },
    image_url:{
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};