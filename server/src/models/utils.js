const {
  USERS_DATA,
  PRODUCTS_DATA,
  VARIANTS_DATA,
  CATEGORIES_DATA,
  OPTIONS_DATA,
  OPTIONVALUES_DATA,
} = require("./fixtures.js");

async function createUsers(userModel) {
  for (const user of USERS_DATA) {
    await userModel.create(user);
  }
}

async function createProducts(productModel) {
  for (const product of PRODUCTS_DATA) {
    await productModel.create(product);
  }
}

async function createVariants(variantModel, options) {
  for (const variant of VARIANTS_DATA) {
    await variantModel.create(variant, options);
  }
}

async function createCategories(categoryModel) {
  for (const category of CATEGORIES_DATA) {
    await categoryModel.create(category);
  }
}

async function createOptions(optionModel) {
  for (const option of OPTIONS_DATA) {
    await optionModel.create(option);
  }
}

async function createOptionValues(optionValueModel) {
  for (const optionValue of OPTIONVALUES_DATA) {
    await optionValueModel.create(optionValue);
  }
}

module.exports = {
  createUsers,
  createProducts,
  createVariants,
  createCategories,
  createOptions,
  createOptionValues,
};
