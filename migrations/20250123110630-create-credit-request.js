'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Credit_Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      request_id: {
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,   
        allowNull:false,
        unique:true
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
      request_amount: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      requested_amount_interest :{
        type:Sequelize.DECIMAL(3,2),
        allowNull:false,
        defaultValue:0.10
      },
      requested_interest:{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0
      },
      payment_terms: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      request_date: {
        type: Sequelize.DATEONLY,
        allowNull:false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNulll:false,
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
    await queryInterface.dropTable('Credit_Requests');
  }
};