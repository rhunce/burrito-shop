const { sequelize } = require("../index.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM("MANAGER", "EMPLOYEE"),
    },
    // password: {
    //   field: "user_password",
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
  }
  // {
  //   hooks: {
  //     beforeCreate: async (user) => {
  //       if (user.password) {
  //         const salt = await bcrypt.genSaltSync(10, "a");
  //         user.password = bcrypt.hashSync(user.password, salt);
  //       }
  //     },
  //     beforeUpdate: async (user) => {
  //       if (user.password) {
  //         const salt = await bcrypt.genSaltSync(10, "a");
  //         user.password = bcrypt.hashSync(user.password, salt);
  //       }
  //     },
  //   },
  //   instanceMethods: {
  //     validPassword: (password) => {
  //       return bcrypt.compareSync(password, this.password);
  //     },
  //   },
  // }
);

User.sync().then(() => {
  console.log("User Model synced");
});

module.exports = { User };
