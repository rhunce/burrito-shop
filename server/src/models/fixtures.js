const USERS_DATA = [
  {
    firstName: "Raymond",
    lastName: "Hunce",
    email: "hunce18c@gmail.com",
    type: "MANAGER",
  },
  {
    firstName: "Ray",
    lastName: "Hunt",
    email: "hunt18c@msn.com",
    type: "EMPLOYEE",
  },
];

const PRODUCTS_DATA = [
  {
    name: "Burrito",
    description:
      "The greatest burrito you'll ever have! Your choice of tortilla, meat, toppings and sauces! Choose from Small, Medium, and Large, and Regular or Supreme. Supreme Burritos made using secret ingredients that extend your life by 1 day per burrito!",
  },
  {
    name: "Taco",
    description:
      "The greatest taco you'll ever have! Your choice of tortilla, meat, toppings and sauces!",
  },
  {
    name: "Bowl",
    description:
      "The greatest bowl you'll ever have! Your choice of meat, toppings and sauces!",
  },
];

const VARIANTS_DATA = [
  {
    name: "Burrito Small Regular",
    price: 5.0,
  },
  {
    name: "Burrito Medium Regular",
    price: 7.0,
  },
  {
    name: "Burrito Large Regular",
    price: 9.0,
  },
  {
    name: "Burrito Small Supreme",
    price: 10.0,
  },
  {
    name: "Burrito Medium Supreme",
    price: 14.0,
  },
  {
    name: "Burrito Large Supreme",
    price: 18.0,
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
  },
  {
    name: "Flour",
  },
  {
    name: "Chicken",
  },
  {
    name: "Steak",
  },
  {
    name: "Chorizo",
  },
  {
    name: "Pico De Gallo",
  },
  {
    name: "Cheese",
  },
  {
    name: "Rice",
  },
  {
    name: "Beans",
  },
  {
    name: "Peppers",
  },
  {
    name: "Sour Cream",
  },
  {
    name: "Guacamole",
  },
  {
    name: "Mild Salsa",
  },
  {
    name: "Medium Salsa",
  },
  {
    name: "Hot Salsa",
  },
];

module.exports = {
  USERS_DATA,
  PRODUCTS_DATA,
  VARIANTS_DATA,
  CATEGORIES_DATA,
  OPTIONS_DATA,
  OPTIONVALUES_DATA,
};
