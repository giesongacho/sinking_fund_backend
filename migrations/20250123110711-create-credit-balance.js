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
      fund_id: {
        type:Sequelize.UUID,
        allowNull:false,
        unique:true,
        references: {
          model:'UserFunds',
          key:'fund_id'
        },
        onDelete: 'CASCADE'
      },
      balance: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      due_date: {
        type: Sequelize.DATEONLY,
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
    await queryInterface.dropTable('Credit_Balances');
  }
};