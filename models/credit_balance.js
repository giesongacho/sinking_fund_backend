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
    static associate({Credit_Request}) {
      this.belongsTo(Credit_Request,{foreignKey: "request_id",targetKey: 'request_id', as:'credit_request'})
    }
  }
  Credit_Balance.init({
    request_id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:true
    },
    user_id:{
      type: DataTypes.UUID,
      allowNull: true
    },
    balance:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNulll:true,
      defaultValue:0
    },
    due_date: {
      type:DataTypes.DATEONLY,
      allowNull:true
    }
  }, {
    sequelize,
    tableName:'Credit_Balances',
    modelName: 'Credit_Balance',
  });
  return Credit_Balance;
};