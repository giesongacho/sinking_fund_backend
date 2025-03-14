'use strict';
const bcrpyt = require('bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Login.init({
    username: {
      type:DataTypes.STRING,
      allowNull:false
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    token:{
      type:DataTypes.STRING,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'Login',
    tableName: 'Logins',
    hooks:{
      beforeCreate: async (user) => {
        user.password = await bcrpyt.hash(user.password,10);
      }
    }
  });
  Login.prototype.validPassword = function(password){
    return bcrpyt.compareSync(password,this.password);
  }
  return Login;
};