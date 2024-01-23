//export default nomeDaFuncao || module.exports = ...
//export {funcao} || module.exports {funcao}
//export funcao || exports.funcao

let usuarios = [];

exports.read = (request, response) => {
    try {
        return response.status(200).json(usuarios);
      } catch (error) {
        console.error(error);
        return response.status(500).json(error);
      }
}

exports.create = (request, response) => {
        try {
          const { nome, email, dataDeAniversario, morada, telefone, stack, sobre } = request.body;
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
}

exports.update = (request, response) => {
    try {
        const { id } = request.params;
        const { nome, email, dataDeAniversario, morada, telefone, stack, sobre } = request.body;
        const index = findIndexWithID(usuarios, id);
        if (index) {
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
          return response.status(200).json(usuarios[i]);
        }
        return response.status(404).json({ error: 'Usuário não encontrado' });
      } catch (error) {
        console.error(error);
        return response.status(500).json(error);
      }
}

exports.updateOneAttr = (request, response) => {
    try {
        const { id } = request.params;
        const { nome, email, dataDeAniversario, morada, telefone, stack, sobre } = request.body;
        const index = findIndexWithID(usuarios, id);
        const payload = {
          nome: nome || usuarios[index].nome,
          email: email || usuarios[index].email,
          dataDeAniversario: dataDeAniversario || usuarios[index].dataDeAniversario,
          morada: morada || usuarios[index].morada,
          telefone: telefone || usuarios[index].telefone,
          stack: stack || usuarios[index].stack,
          sobre: sobre || usuarios[index].sobre,
        };
        updateUserAttrs(usuarios, index, payload);
        return response.status(200).json(usuarios[index]);
      } catch (error) {
        console.error(error);
        return response.status(500).json(error);
      }
}

exports.remove = (request, response) => {
    try {
        const { id } = request.params;
        const index = findIndexWithID(usuarios, id);
        usuarios.splice(index, 1);
        return response.sendStatus(204);
      } catch (error) {
        console.error(error);
        return response.status(500).json(error);
      }
}