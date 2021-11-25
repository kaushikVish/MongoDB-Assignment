const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  product_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  isSanitized: Boolean,
  unit: {
    type: String,
    required: true,
  },
  expiryDate: Date,
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: null,
  },
  //   category: [
  //     {
  //       Grocery: String,
  //       Medical: String,
  //       Fruits_Veg: String,
  //       Berverages: String,
  //       Babycare: String,
  //       Cleaning: String,
  //     },
  //   ],
  //   location: [
  //     {
  //       Store: String,
  //       Kitchen: String,
  //     },
  //   ],
});

itemSchema.pre("update", function () {
  this.set({ updatedDate: Date.now() });
});

const itemModel = mongoose.model("item", itemSchema);

module.exports = {
  itemModel,
};
