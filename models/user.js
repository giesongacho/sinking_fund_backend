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
    static associate(models) {
      // define association here
    }
  }
  User.init({
    uuid: {
      DataTypes:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    firstName: {
      DataTypes:DataTypes.STRING,
      allowNull:false
    },
    lastName: {
      DataTypes:DataTypes.STRING,
      allowNull:false
    },
    status: {
      DataTypes:DataTypes.INTEGER,
      allowNull:FALSE
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users'
  });
  return User;
};