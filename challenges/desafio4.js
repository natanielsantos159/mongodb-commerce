db.produtos
  .find({ vendidos: { $gt: 50, $lt: 100 } }, { vendidos: 1, _id: 0, nome: 1 })
  .sort({ vendidos: 1 });