const { findIndexWithID, updateUserAttrs } = require("../utils/index.js");

let usuarios = [];

exports.read = (request, response) => {
  try {
    return response.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
};

exports.create = (request, response) => {
  try {
    const { nome, email, dataDeAniversario, morada, telefone, stack, sobre } =
      request.body;
    const id = crypto.randomUUID().toString();
    const payload = {
      id,
      nome,
      email,
      dataDeAniversario,
      morada,
      telefone,
      stack,
      sobre,
    };
    usuarios.push(payload);
    return response.status(201).json(usuarios);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
};

exports.update = (request, response) => {
  try {
    const { id } = request.params;
    const { nome, email, dataDeAniversario, morada, telefone, stack, sobre } =
      request.body;
    const index = findIndexWithID(usuarios, id);

    if (index === 404) {
      return response.status(404).json("Not found");
    }

    const payload = {
      id,
      nome,
      email,
      dataDeAniversario,
      morada,
      telefone,
      stack,
      sobre,
    };
    usuarios[index] = payload;
    return response.status(200).json(usuarios[index]);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
};

exports.updateOneAttr = (request, response) => {
  try {
    const { id } = request.params;
    const index = findIndexWithID(usuarios, id);
    if (index === 404) {
      return response.status(404).json("Not found");
    }
    const {
      nome = usuarios[index].nome,
      email = usuarios[index].email,
      dataDeAniversario = usuarios[index].dataDeAniversario,
      morada = usuarios[index].morada,
      telefone = usuarios[index].telefone,
      stack = usuarios[index].stack,
      sobre = usuarios[index].sobre,
    } = request.body;
    const payload = {
      nome,
      email,
      dataDeAniversario,
      morada,
      telefone,
      stack,
      sobre,
    };
    updateUserAttrs(usuarios, index, payload);
    return response.status(200).json(usuarios[index]);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
};

exports.remove = (request, response) => {
  try {
    const { id } = request.params;
    const index = findIndexWithID(usuarios, id);

    if (index === 404) {
      return response.status(404).json("Not found");
    }

    usuarios.splice(index, 1);
    return response.sendStatus(204);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
};
