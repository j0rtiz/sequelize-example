const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        unique: true,
        validate: {
          isEmail: true,
        },
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
