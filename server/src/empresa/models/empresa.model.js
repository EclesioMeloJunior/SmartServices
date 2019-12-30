function buildEmpresaModel() {
  return function empresaModel({
    nomeFantasia,
    razaoSocial,
    cnpj,
    nomeResponsavel,
    cpfResponsavel,
    email,
    senha
  } = {}) {
    return {
      getCnpj: () => cnpj,
      getSenha: () => senha,
      getEmail: () => email,
      getRazaoSocial: () => razaoSocial,
      getNomeFantasia: () => nomeFantasia,
      getCpfResponsavel: () => cpfResponsavel,
      getNomeResponsavel: () => nomeResponsavel
    };
  };
}

module.exports = buildEmpresaModel;
