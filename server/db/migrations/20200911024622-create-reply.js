'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Replies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reply_text: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{model: "Users"},
        allowNull:false
      },
      comment_id: {
        type: Sequelize.INTEGER,
        references: {model: "Comments"},
        allowNull:false
      },
      likes: {
        type: Sequelize.INTEGER
      },
      dislikes:{
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Replies');
  }
};