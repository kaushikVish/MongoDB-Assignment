const { itemModel } = require("../model/model");

module.exports.create = async ({
  productName,
  quantity,
  isSanitized,
  unit,
  expiryDate,
}) => {
  let user = await itemModel.find({ product_name: productName });
//   console.log("user ====> ",user)

  if (user.length) {
    try {
        let id=user[0].id;
      let response = await itemModel.findByIdAndUpdate(id, {
        quantity,
        isSanitized,
      });
      response.quantity = quantity;
      response.isSanitized = isSanitized;
      return response;
    } catch (error) {
      return error;
    }
  } else {
    const user = await itemModel.create({
      product_name: productName,
      quantity,
      isSanitized,
      unit,
      expiryDate,
    });
    return user;
  }
};

module.exports.getAll = async () => {
  const users = await itemModel.find();
  return users;
};

module.exports.updateItem = async (id, data) => {
  try {
    const response = await itemModel.findByIdAndUpdate(id, {
      quantity: data.quantity,
      isSanitized: data.isSanitized,
    });
    response.quantity = data.quantity;
    response.isSanitized = data.isSanitized;
    return response;
  } catch (error) {
    console.log("=====>", error);
  }
};

module.exports.deleteItem = async (id) => {
  try {
    const response = await itemModel.findByIdAndDelete(id);
    return response;
  } catch (error) {
    return error;
  }
};
