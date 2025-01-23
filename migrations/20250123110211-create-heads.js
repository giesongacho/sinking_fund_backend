'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Heads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      head_id: {
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
          key:'uuid'
        },
        onDelete: 'CASCADE'
      },
      head_count: {
        type: Sequelize.INTEGER,
        allowNull:FALSE
      },
      head_amount: {
        type: Sequelize.INTEGER,
        allowNull:FALSE
      },
      head_status: {
        type: Sequelize.INTEGER,
        allowNull:FALSE,
        defaultValue:0
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
    await queryInterface.dropTable('Heads');
  }
};