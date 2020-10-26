'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User,{
        foreignKey: "user_id"
      })
      Comment.belongsTo(models.Video,{
        foreignKey:"video_id"
      })
      Comment.hasMany(models.Reply,{
        foreignKey:"comment_id"
      })
    }
  };
  Comment.init({
    comment_text: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    video_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER
    },
     {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};