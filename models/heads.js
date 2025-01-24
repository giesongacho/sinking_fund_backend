'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Heads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // // define association here
      this.belongsTo(User,{foreignKey: "user_id",targetKey: 'user_id', as:'user'})
    }
  }
  Heads.init({
    head_id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    head_count: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    head_amount: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    head_status: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    tableName: 'Heads',
    modelName: 'Heads',
  });
  return Heads;
};