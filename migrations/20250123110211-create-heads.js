'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Heads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      head_id: {
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false
      },
      user_id: {
        type:Sequelize.UUID,
        allowNull:false,
        references: {
          model:'Users',
          key:'user_id'
        },
        onDelete: 'CASCADE'
      },
      head_count: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      head_amount: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      head_status: {
        type: Sequelize.INTEGER,
        allowNull:false,
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