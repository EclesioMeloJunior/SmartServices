function buildClienteModel(cpfValidator) {
  return function clienteModel({
    email,
    nome,
    sobrenome,
    cpf,
    telefone,
    isActive
  } = {}) {};
}

module.exports = buildClienteModel;
