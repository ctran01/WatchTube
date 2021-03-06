'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      description: {
        type: Sequelize.TEXT
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Users',
          key: 'id'
        }
      },
      likes: {
        type: Sequelize.INTEGER
      },
      dislikes:{
        type: Sequelize.INTEGER
      },
      views: {
        type: Sequelize.INTEGER
      },
      source:{
        type: Sequelize.STRING(100)
      },
      image_url:{
        type: Sequelize.STRING(100)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Videos');
  }
};