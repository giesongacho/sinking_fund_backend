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
    static associate(models) {
      // define association here
    }
  }
  Heads.init({
    head_id: {
      DataTypes:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    head_count: {
      DataTypes:DataTypes.INTEGER,
      allowNull:FALSE
    },
    head_amount: {
      DataTypes:DataTypes.INTEGER,
      allowNull:FALSE
    },
    head_status: {
      DataTypes:DataTypes.INTEGER,
      allowNull:FALSE
    },
  }, {
    sequelize,
    modelName: 'Heads',
  });
  return Heads;
};