const { Sequelize, Model, DataTypes } = require("sequelize");
const {
  createUsers,
  createProducts,
  createVariants,
  createCategories,
  createOptions,
  createOptionValues,
  createProductOptions,
} = require("./seed/utils.js");

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
    password: { type: DataTypes.STRING, allowNull: false },
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
    categoryId: DataTypes.INTEGER,
  },
  { sequelize }
);

// *************** VARIANT MODEL ***************
class Variant extends Model {}
Variant.init(
  {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    productId: DataTypes.INTEGER,
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
    optionId: DataTypes.INTEGER,
  },
  { sequelize }
);

// *************** ORDER MODEL ***************
class Order extends Model {}
Order.init(
  {
    status: DataTypes.ENUM("UNFULFILLED", "FULFILLED"),
    totalPrice: DataTypes.DECIMAL(10, 2),
  },
  { sequelize }
);

// *************** ORDERLINE MODEL ***************
class OrderLine extends Model {}
OrderLine.init(
  {
    quantity: DataTypes.INTEGER,
    variantId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
  },
  { sequelize }
);

// *************** PRODUCTOPTION MODEL ***************
class ProductOption extends Model {}
ProductOption.init(
  {
    productId: DataTypes.INTEGER,
    optionId: DataTypes.INTEGER,
  },
  { sequelize }
);

// *************** ORDERLINEOPTIONVALUE MODEL ***************
class OrderLineOptionValue extends Model {}
OrderLineOptionValue.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderLineId: DataTypes.INTEGER,
    optionValueId: DataTypes.INTEGER,
  },
  { sequelize }
);

// (async () => {
//   // ***** CREATE TABLE ASSOCIATIONS *****
//   // One-to-Many
//   Category.hasMany(Product, { foreignKey: "categoryId" });
//   Product.belongsTo(Category, { foreignKey: "categoryId" });

//   Product.hasMany(Variant, { foreignKey: "productId" });
//   Variant.belongsTo(Product, { foreignKey: "productId" });

//   Option.hasMany(OptionValue, { foreignKey: "optionId" });
//   OptionValue.belongsTo(Option, { foreignKey: "optionId" });

//   Order.hasMany(OrderLine, { foreignKey: "orderId" });
//   OrderLine.belongsTo(Order, { foreignKey: "orderId" });

//   Variant.hasMany(OrderLine, { foreignKey: "variantId" });
//   OrderLine.belongsTo(Variant, { foreignKey: "variantId" });

//   // Many-to-Many
//   Product.belongsToMany(Option, {
//     through: ProductOption,
//     foreignKey: "productId",
//   });
//   Option.belongsToMany(Product, {
//     through: ProductOption,
//     foreignKey: "optionId",
//   });

//   OrderLine.belongsToMany(OptionValue, {
//     through: OrderLineOptionValue,
//     foreignKey: "orderLineId",
//   });
//   OptionValue.belongsToMany(OrderLine, {
//     through: OrderLineOptionValue,
//     foreignKey: "optionValueId",
//   });

//   // ***** SYNC DB WITH TABLES *****
//   await sequelize.sync({ alter: true });

//   // ***** SEED DB *****
//   // await createUsers(User);
//   await createCategories(Category);
//   await createProducts(Product);
//   await createVariants(Variant);
//   await createOptions(Option);
//   await createOptionValues(OptionValue);
//   await createProductOptions(ProductOption);
// })();

module.exports = {
  User,
  Product,
  Variant,
  Order,
  OrderLine,
  OrderLineOptionValue,
};
