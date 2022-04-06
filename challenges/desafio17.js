const totalProdutos = db.produtos.find().count();

db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos,
});

db.resumoProdutos.findOne(
  { franquia: "McDonalds" },
  { franquia: 1, totalProdutos: 1, _id: 0 },
);
