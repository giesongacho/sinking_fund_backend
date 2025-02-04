'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Credit_Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Credit_Request}) {
      this.belongsTo(Credit_Request,{foreignKey: "request_id",targetKey: 'request_id', as:'credit_request'})
    }
  }
  Credit_Payment.init({
    credit_payment_amount : {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    credit_payment_date:{
      type:DataTypes.DATEONLY,
      allowNull:true,
    },
  }, {
    sequelize,
    tableName:'Credit_Payments',
    modelName: 'Credit_Payment',
  });
  return Credit_Payment;
};