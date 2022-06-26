angular.module('listaTelefonica').filter('nameFilter', function() {

  return function(input) {
    var outPut = input.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    return outPut;
  };
});