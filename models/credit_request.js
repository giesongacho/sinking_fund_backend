'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Credit_Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Credit_Request.init({
    request_amount: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    payment_terms: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    request_date: {
      type:DataTypes.DATEONLY,
      allowNull:false
    },
    status: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Credit_Request',
  });
  return Credit_Request;
};