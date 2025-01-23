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
    static associate(models) {
      // define association here
    }
  }
  UserFund.init({
    fund_id: {
      DataTypes:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    user_contributed: {
      DataTypes:DataTypes.INTEGER,
      allowNull:false
    },
    date_contribute: {
      DataTypes:DataTypes.DATE,
      allowNull:false
    },
    status: {
      DataTypes:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'UserFund',
  });
  return UserFund;
};