'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserFunds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      fund: {
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey: true,
        allowNull:false
      },
      user_id: {
        type:Sequelize.UUID,
        allowNull:false,
        references: {
          model:'User',
          key:'user_id'
        },
        onDelete: 'CASCADE'
      },
      user_contributed: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      date_contribute: {
        type: Sequelize.DATEONLY,
        allowNull:false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull:false
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserFunds');
  }
};