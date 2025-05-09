'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        unique:true,
        allowNull:false
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull:false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull:false
      },
      head_count: {
        type:Sequelize.INTEGER,
        allowNull:false
      },
      head_amount: {
        type:Sequelize.INTEGER,
        allowNull:false
      },
      status:{
        type:Sequelize.INTEGER,
        defaultValue:0,
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
    await queryInterface.dropTable('Users');
  }
};