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
    static associate({UserFund}) {
      // define association here
      this.belongsTo(UserFund,{foreignKey: "fund_id",targetKey: 'fund_id', as:'user_fund'})

    }
  }
  Credit_Request.init({
    request_amount: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    requested_amount_interest :{
      type:DataTypes.DECIMAL(3,2),
      allowNull:false,
      defaultValue:0.10,
      get() {
        const value = this.getDataValue('requested_amount_interest');
        return value ? Number(value).toFixed(2) : null;
      }
    },
    payment_terms: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    request_date: {
      type:DataTypes.DATEONLY,
      allowNull:false
    },
  }, {
    sequelize,
    tableName: 'Credit_Requests',
    modelName: 'Credit_Request',
  });
  return Credit_Request;
};