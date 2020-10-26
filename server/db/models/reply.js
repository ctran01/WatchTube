'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reply.belongsTo(models.Comment,{
        foreignKey:"comment_id"
      })
      Reply.belongsTo(models.User,{
        foreignKey: "user_id"
      })
    }
  };
  Reply.init({
    reply_text: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    likes: {
      type: DataTypes.INTEGER
    },
    dislikes: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Reply',
  });
  return Reply;
};