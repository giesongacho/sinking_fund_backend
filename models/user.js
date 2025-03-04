'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({UserFund,Credit_Request,Credit_Payment,Credit_Balance}) {
      this.hasMany(UserFund, {foreignKey: 'user_id',sourceKey: 'user_id',as:'user_fund',onDelete: 'CASCADE'})
      this.hasMany(Credit_Request,{foreignKey: 'user_id',sourceKey: 'user_id',as:'credit',onDelete: 'CASCADE'})
      this.hasMany(Credit_Payment, {foreignKey: 'user_id',sourceKey: 'user_id',as:'credit_payment',onDelete: 'CASCADE'})
      this.hasMany(Credit_Balance,{foreignKey: 'user_id',sourceKey: 'user_id',as:'credit_balance',onDelete: 'CASCADE'})
    }
  }
  User.init({
    user_id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    firstname: {
      type:DataTypes.STRING,
      allowNull:false
    },
    lastname: {
      type:DataTypes.STRING,
      allowNull:false
    },
    head_count: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    head_amount: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    tableName: 'Users',
    modelName: 'User',
  });
  return User;
};