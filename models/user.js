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
    static associate({Heads,UserFund,Credit_Request}) {
      this.hasMany(Heads, {foreignKey: 'user_id',sourceKey: 'user_id',as:'heads',onDelete: 'CASCADE'})
      this.hasMany(UserFund, {foreignKey: 'user_id',sourceKey: 'user_id',as:'user_fund',onDelete: 'CASCADE'})
      this.hasMany(Credit_Request,{foreignKey: 'user_id',sourceKey: 'user_id',as:'credit',onDelete: 'CASCADE'})
    }
  }
  User.init({
    user_id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    firstname: {
      type:DataTypes.STRING,
      allowNull:false
    },
    lastname: {
      type:DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    tableName: 'Users',
    modelName: 'User',
  });
  return User;
};