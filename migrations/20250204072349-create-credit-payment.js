'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Credit_Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      request_id: {
        type:Sequelize.UUID,
        allowNull:false,
        references: {
          model:'Credit_Requests',
          key:'request_id'
        },
        onDelete: 'CASCADE'
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
      credit_payment_amount : {
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0
      },
      credit_payment_date:{
        type:Sequelize.DATEONLY,
        allowNull:true,
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
    await queryInterface.dropTable('Credit_Payments');
  }
};