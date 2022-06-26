angular.module("listaTelefonica").factory("contatosAPIService", function($http, config) {
  var _getContatos = function() {
    return $http.get(baseURL + "/contatos");
  };

  var _saveContato = function(contato) {
    return $http.post(baseURL + "/contatos", contato);
  }

  return {
    getContatos: _getContatos,
    saveContato: _saveContato
  };
});

//Factory

var criarPessoa = function(nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
}

var maria = criarPessoa("Maria", 20);