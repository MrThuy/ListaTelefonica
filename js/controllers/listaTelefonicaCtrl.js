angular.module("listaTelefonica")
      .controller("listaTelefonicaCtrl", function ($scope, contatosAPIService, operadorasAPIService, serialGenerator) {

        $scope.app = "Lista Telefonica";

        console.log(serialGenerator.generate());

        $scope.error = "Não foi possível carregar os dados";

        $scope.contatos = [{
            nome: "FULANO da silva",
            telefone: "9999-9999",
            data: new Date(),
            operadora: {
              nome: "Tim",
              codigo: "21"
            },
            cor: "green"
          },
          {
            nome: "Beltrano",
            telefone: "8888-8888",
            data: new Date(),
            operadora: {
              nome: "Oi",
              codigo: "14"
            },
            cor: "yellow"
          },
          {
            nome: "Ciclano",
            telefone: "9999-8888",
            data: new Date(),
            operadora: {
              nome: "Claro",
              codigo: "41"
            },
            cor: "blue"
          },
        ];

        var carregarContatos = function () {
          contatosAPIService.getContatos().then(function (response) {
            $scope.contatos = response.data;
          }).catch(function (response) {
            console.error(response);
          });
        };

        var adicionarContatos = function (contato) {
          contato.serial = serialGenerator.generate();
          contato.data = new Date();
          contatosAPIService.saveContato(contato).then(function (response) {
            $scope.contato = {};
            $scope.contatoForm.$setPristine();
            carregarContatos();
          }).catch(function (response) {
            console.error(response);
          });
        };

        var carregaOperadoras = function () {
          operadorasAPIService.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
          }).catch(function (response) {
            console.error(response);
          });
        };

        $scope.operadoras = [{
            nome: "Oi",
            codigo: 14,
            categoria: "Celular",
            preco: 2
          },
          {
            nome: "Vivo",
            codigo: 15,
            categoria: "Celular",
            preco: 1
          },
          {
            nome: "Tim",
            codigo: 21,
            categoria: "Celular",
            preco: 0.5
          },
          {
            nome: "Claro",
            codigo: 41,
            categoria: "Fixo",
            preco: 1
          },
          {
            nome: "Correios",
            codigo: 12,
            categoria: "Fixo",
            preco: 3
          }
        ];
        $scope.contato = {};

        $scope.classe = "selecionado";
        $scope.classe = "negrito";

        $scope.adicionarContato = function (contato) {
          $scope.contatos.push(contato);
          $scope.contato = {};
          $scope.contatoForm.$setPristine();
        };

        $scope.apagarContatos = function (contatos) {
          $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado)
              return contato;
          });
        };


        $scope.isContatoSelecionado = function (contatos) {
          return contatos.some(function (contato) {
            return contato.selecionado;
          });
        };

        $scope.ordernarPor = function (campo) {
          $scope.criterioDeOrdenacao = campo;
          $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };
      });