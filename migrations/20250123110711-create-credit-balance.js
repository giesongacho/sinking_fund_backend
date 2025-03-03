'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Credit_Balances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      request_id: {
        type:Sequelize.UUID,
        allowNull:true,
        references: {
          model:'Credit_Requests',
          key:'request_id'
        },
        onDelete: 'CASCADE'
      },
      user_id: {
        type:Sequelize.UUID,
        allowNull:true,
        references: {
          model:'Users',
          key:'user_id'
        },
        onDelete: 'CASCADE'
      },
      balance: {
        type: Sequelize.INTEGER,
        allowNull:true,
      },
      due_date: {
        type: Sequelize.DATEONLY,
        allowNull:true
      },
      status: {
        type: Sequelize.INTEGER,
        allowNulll:true,
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
    await queryInterface.dropTable('Credit_Balances');
  }
};