'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserFunds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      fund_id: {
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
      amount_contributed: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      date_contributed: {
        type: Sequelize.DATEONLY,
        allowNull:false
      },
      status: {
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
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['fund_id']
        },
        {
          fields: ['user_id']
        }
      ]
    }
  );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserFunds');
  }
};