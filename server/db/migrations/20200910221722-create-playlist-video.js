'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PlaylistVideos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playlist_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Playlists'},
        allowNull: false
      },
      video_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Videos'},
        allowNull:false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PlaylistVideos');
  }
};