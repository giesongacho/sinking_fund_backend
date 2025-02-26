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
    static associate({UserFund,Credit_Balance,Credit_Payment,User}) {
      // define association here
      this.belongsTo(User,{foreignKey:'user_id', targetKey: 'user_id' , as: 'user'})
      this.hasMany(Credit_Balance,{foreignKey: 'request_id',sourceKey:'request_id',as: 'credit_balance',onDelete: 'CASCADE'})
      this.hasMany(Credit_Payment,{foreignKey: 'request_id',sourceKey:'request_id',as: 'credit_payment',onDelete: 'CASCADE'})
    }
  }
  Credit_Request.init({
    request_id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    user_id:{
      type: DataTypes.UUID,
      allowNull: false
    },
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
    status:{
      type: DataTypes.INTEGER,
      allowNulll:false,
      defaultValue:0
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