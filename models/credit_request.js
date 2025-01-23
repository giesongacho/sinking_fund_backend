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
      DataTypes:DataTypes.INTEGER,
      allowNull:false
    },
    payment_terms: {
      DataTypes:DataTypes.INTEGER,
      allowNull:false
    },
    request_date: {
      DataTypes:DataTypes.DATE,
      allowNull:false
    },
    status: {
      DataTypes:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Credit_Request',
  });
  return Credit_Request;
};