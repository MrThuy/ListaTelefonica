angular.module("listaTelefonica").directive("uiAlert", function(){
  return {
    templateUrl: "view/alert.html",
    replace: true,
    restrict: "AE",
    scope: {
      title: "@",  // title: "@title"
      message: "=" // message: "=message"
    },
    transclude: true,
  }
});