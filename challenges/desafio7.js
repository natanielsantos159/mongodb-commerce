db.produtos.find(
  { $and: [{ vendidos: { $not: { $eq: 50 } } }, { tags: { $exists: false } }] },
  { vendidos: 1, _id: 0, nome: 1 },
);
