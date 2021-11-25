const item = require("../services/service");

module.exports.create = async (req, res) => {
  const response = await item.create(req.body);
  res.send(response);
};

module.exports.getAll = async (req, res) => {
  const response = await item.getAll();
  res.send(response);
};

module.exports.updateItem = async (req, res) => {
  const response = await item.updateItem(req.params.id, req.body);
  res.send(response);
};

module.exports.deleteItem = async (req,res) => {
    console.log(req.params.id);
    const response = await item.deleteItem(req.params.id);
    res.send(response);
}