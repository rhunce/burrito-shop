const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("burrito_shop", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

// *************** USER MODEL ***************
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
    // TODO: PASSWORD
  },
  { sequelize }
);

// *************** PRODUCT MODEL ***************
class Product extends Model {}
Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
  },
  { sequelize }
);

// *************** VARIANT MODEL ***************
class Variant extends Model {}
Variant.init(
  {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
  },
  { sequelize }
);

// *************** CATEGORY MODEL ***************
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

// *************** OPTION MODEL ***************
class Option extends Model {}
Option.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    optionType: DataTypes.ENUM("DROPDOWN", "MULTISELECT"),
  },
  { sequelize }
);

// *************** OPTION VALUE MODEL ***************
class OptionValue extends Model {}
OptionValue.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);

// *************** ORDER MODEL ***************
class Order extends Model {}
Order.init(
  {
    status: DataTypes.ENUM("UNFULFILLED", "FULFILLED"),
  },
  { sequelize }
);

// *************** ORDERLINE MODEL ***************
class OrderLine extends Model {}
OrderLine.init(
  {
    quantity: DataTypes.INTEGER,
  },
  { sequelize }
);

(async () => {
  // ***** CREATE TABLE ASSOCIATIONS *****
  Category.hasMany(Product);
  Product.belongsTo(Category);

  Product.hasMany(Variant);
  Variant.belongsTo(Product);

  Option.hasMany(OptionValue);
  OptionValue.belongsTo(Option);

  Order.hasMany(OrderLine);
  OrderLine.belongsTo(Order);

  Product.belongsToMany(Option, { through: "Product_Option" });
  Option.belongsToMany(Product, { through: "Product_Option" });

  OrderLine.belongsToMany(OptionValue, { through: "OrderLine_OptionValue" });
  OptionValue.belongsToMany(OrderLine, { through: "OrderLine_OptionValue" });

  // ***** SYNC DB WITH TABLES *****
  await sequelize.sync({ force: true });

  // ***** SEED DB *****
  //   const rayUser = await User.create({
  //     firstName: "Raymond",
  //     lastName: "Hunce",
  //     email: "hunce18c@gmail.com",
  //     type: "MANAGER",
  //   });
  //   console.log("RAY USER: ", rayUser.toJSON());
})();

module.exports = { User };
