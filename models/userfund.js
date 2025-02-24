'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFund extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Credit_Request,Credit_Balance}) {
      // define association here
      this.belongsTo(User,{foreignKey: "user_id",targetKey: 'user_id', as:'user'})
      this.hasMany(Credit_Request,{foreignKey: 'fund_id',sourceKey:'fund_id',as: 'credit_request',onDelete: 'CASCADE'})
    }
  }
  UserFund.init({
    fund_id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    user_id:{
      type: DataTypes.UUID,
      allowNull: false
    },
    amount_contributed: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    date_contributed: {
      type:DataTypes.DATEONLY,
      allowNull:false
    },
  }, {
    sequelize,
    tableName: 'UserFunds',
    modelName: 'UserFund',
  });
  return UserFund;
};