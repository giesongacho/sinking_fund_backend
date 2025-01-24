'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Credit_Balance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Credit_Balance.init({
    balance: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    due_date: {
      type:DataTypes.DATEONLY,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Credit_Balance',
  });
  return Credit_Balance;
};