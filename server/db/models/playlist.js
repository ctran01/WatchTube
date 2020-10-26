'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Playlist.belongsTo(models.User,{
        foreignKey: "user_id"
      })
      
      Playlist.belongsToMany(models.Video, {
        foreignKey:"playlist_id",
        through:"PlaylistVideos",
        otherKey: "video_id"
      })

      Playlist.belongsToMany(models.User,{
        as: 'followers',
        through: {
          model: 'Follower',
          scope:{
            followable_type: 'playlist'
          }
        },
        foreignKey: 'followable_id',
        constraints: false
      })
      
    }
  };
  Playlist.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};