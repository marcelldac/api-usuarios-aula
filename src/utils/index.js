exports.updateUserAttrs = (data, index, payload) => {
  data[index].nome = payload.nome;
  data[index].email = payload.email;
  data[index].dataDeAniversario = payload.dataDeAniversario;
  data[index].morada = payload.morada;
  data[index].telefone = payload.telefone;
  data[index].stack = payload.stack;
  data[index].sobre = payload.sobre;
};

exports.findIndexWithID = (data, id) => {
  const index = data.findIndex((d) => {
    return d.id === id;
  });
  return index;
};
