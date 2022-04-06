db.produtos.updateMany(
  { nome: { $not: /McChicken/i } },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });