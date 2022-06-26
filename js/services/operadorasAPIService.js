angular.module("listaTelefonica").service("operadorasAPIService", function($http, config) {

  this.getOperadoras = function() {
    return $http.get(baseURL + "/operadoras");
  };

});

var Pessoa = function(nome, idade) {
  this.nome = nome;
  this.idade = idade;
};

var Carlos = new Pessoa("Carlos", 25);