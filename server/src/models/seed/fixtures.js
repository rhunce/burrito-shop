const USERS_DATA = [
  {
    firstName: "Raymond",
    lastName: "Hunce",
    email: "hunce18c@gmail.com",
    userType: "MANAGER",
    password: "admin",
  },
  {
    firstName: "Ray",
    lastName: "Hunt",
    email: "hunt18c@msn.com",
    userType: "EMPLOYEE",
    password: "admin",
  },
];

const PRODUCTS_DATA = [
  {
    name: "Burrito",
    description:
      "The greatest burrito you'll ever have! Your choice of tortilla, meat, toppings and sauces! Choose from Small, Medium, and Large, and Regular or Supreme. Supreme Burritos made using secret ingredients that extend your life by 1 day per burrito!",
    categoryId: 1,
  },
  {
    name: "Taco",
    description:
      "The greatest taco you'll ever have! Your choice of tortilla, meat, toppings and sauces!",
    categoryId: 1,
  },
  {
    name: "Bowl",
    description:
      "The greatest bowl you'll ever have! Your choice of meat, toppings and sauces!",
    categoryId: 1,
  },
];

const VARIANTS_DATA = [
  {
    name: "Burrito Small Regular",
    price: 5.0,
    productId: 1,
  },
  {
    name: "Burrito Medium Regular",
    price: 7.0,
    productId: 1,
  },
  {
    name: "Burrito Large Regular",
    price: 9.0,
    productId: 1,
  },
  {
    name: "Burrito Small Supreme",
    price: 10.0,
    productId: 1,
  },
  {
    name: "Burrito Medium Supreme",
    price: 14.0,
    productId: 1,
  },
  {
    name: "Burrito Large Supreme",
    price: 18.0,
    productId: 1,
  },
];

const CATEGORIES_DATA = [
  {
    name: "Burritos",
  },
  {
    name: "Tacos",
  },
  {
    name: "Bowls",
  },
];

const OPTIONS_DATA = [
  {
    name: "Tortilla",
    optionType: "DROPDOWN",
  },
  {
    name: "Meat",
    optionType: "DROPDOWN",
  },
  {
    name: "Toppings",
    optionType: "MULTISELECT",
  },
  {
    name: "Sauces",
    optionType: "MULTISELECT",
  },
];

const OPTIONVALUES_DATA = [
  {
    name: "Corn",
    optionId: 1,
  },
  {
    name: "Flour",
    optionId: 1,
  },
  {
    name: "Chicken",
    optionId: 2,
  },
  {
    name: "Steak",
    optionId: 2,
  },
  {
    name: "Chorizo",
    optionId: 2,
  },
  {
    name: "Pico De Gallo",
    optionId: 3,
  },
  {
    name: "Cheese",
    optionId: 3,
  },
  {
    name: "Rice",
    optionId: 3,
  },
  {
    name: "Beans",
    optionId: 3,
  },
  {
    name: "Peppers",
    optionId: 3,
  },
  {
    name: "Sour Cream",
    optionId: 4,
  },
  {
    name: "Guacamole",
    optionId: 4,
  },
  {
    name: "Mild Salsa",
    optionId: 4,
  },
  {
    name: "Medium Salsa",
    optionId: 4,
  },
  {
    name: "Hot Salsa",
    optionId: 4,
  },
];

const PRODUCTOPTION_DATA = [
  {
    productId: 1,
    optionId: 1,
  },
  {
    productId: 1,
    optionId: 2,
  },
  {
    productId: 1,
    optionId: 3,
  },
  {
    productId: 1,
    optionId: 4,
  },
  {
    productId: 2,
    optionId: 1,
  },
  {
    productId: 2,
    optionId: 2,
  },
  {
    productId: 2,
    optionId: 3,
  },
  {
    productId: 2,
    optionId: 4,
  },
  {
    productId: 3,
    optionId: 2,
  },
  {
    productId: 3,
    optionId: 3,
  },
  {
    productId: 3,
    optionId: 4,
  },
];

module.exports = {
  USERS_DATA,
  PRODUCTS_DATA,
  VARIANTS_DATA,
  CATEGORIES_DATA,
  OPTIONS_DATA,
  OPTIONVALUES_DATA,
  PRODUCTOPTION_DATA,
};
