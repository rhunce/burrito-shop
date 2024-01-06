const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("burrito_shop", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

// USER MODEL
class User extends Model {}
User.init(
  {
    email: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userType: {
      type: DataTypes.ENUM("MANAGER", "EMPLOYEE"),
      defaultValue: "EMPLOYEE",
    },
  },
  { sequelize }
);

// ITEM MODEL
class Item extends Model {}
Item.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    // variants: DataTypes.STRING // TODO
    // category FK // TODO
  },
  { sequelize }
);

// CATEGORY MODEL
class Category extends Model {}
Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);

(async () => {
  // Foreign Key Relationships
  Category.hasMany(Item);
  Item.belongsTo(Category);

  await sequelize.sync({ force: true });
  //   const rayUser = await User.create({
  //     firstName: "Raymond",
  //     lastName: "Hunce",
  //     email: "hunce18c@gmail.com",
  //     type: "MANAGER",
  //   });
  //   console.log("RAY USER: ", rayUser.toJSON());
})();

module.exports = { User, Item };
