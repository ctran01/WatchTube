'use strict';
const bcrypt=require("bcryptjs");
const {
  Model, UniqueConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Follower,{
        foreignKey: "user_id"
      })

      User.hasMany(models.Video,{
        foreignKey: "user_id"
      })

      User.hasMany(models.Playlist,{
        foreignKey: "user_id"
      })
      
      User.hasMany(models.Reply,{
        foreignKey: "user_id"
      })
      
      User.hasMany(models.Comment,{
        foreignKey: "user_id"
      })

      User.belongsToMany(models.Playlist,{
        as: 'followedPlaylists',
        through: {
          model: 'Follower',
          scope:{
            followable_type: 'playlist'
          }
        },
        foreignKey: 'user_id',
        constraints: false
      })

      User.belongsToMany(models.Video,{
        as: 'followedVideos',
        through:{
          model: 'Follower',
          scope:{
            followable_type: 'video'
          }
        },
        foreignKey: 'user_id',
        constraints: false
      })


    //To see if this user follows any other user
      User.belongsToMany(models.User,{
        as: 'followedUsers',
        through:{
          model: 'Follower',
          scope: {
            followable_type: 'user'
          }
        },
        foreignKey: 'user_id',
        constraints: false
      })
    //To ensure that this user can also be followed
      User.belongsToMany(models.User,{
        as: 'followers',
        through:{
          model: 'Follower',
          scope: {
            followable_type: 'user'
          }
        },
        foreignKey: 'user_id',
        constraints: false
      })



    }

    
      
  };
  User.init({
    username:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    email: {
     type: DataTypes.STRING,
     allowNull: false,
     unique:true
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url:{
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.prototype.validatePassword = function(password){
    return bcrypt.compareSync(password, this.hashed_password.toString());
  }
  return User;
};