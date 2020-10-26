'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Follower.init({
    followable_type: DataTypes.STRING,
    followable_id: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'Users'
      }
    }
  }, {
    sequelize,
    modelName: 'Follower',
  });
  return Follower;
};