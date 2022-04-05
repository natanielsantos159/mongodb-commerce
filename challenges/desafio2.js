db.produtos
  .find({}, { vendidos: 1, _id: 0, nome: 1 })
  .sort({ vendidos: 1 });
