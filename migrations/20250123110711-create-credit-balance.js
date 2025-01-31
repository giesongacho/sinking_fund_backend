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
      credit_payment : {
        type:Sequelize.INTEGER,
        allowNull:false
      },
      balance: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      credit_payment_date:{
        type:Sequelize.DATEONLY,
        allowNull:false
      },
      due_date: {
        type: Sequelize.DATEONLY,
        allowNull:true
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