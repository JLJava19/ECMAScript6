let Visualizer = window["ui-router-visualizer"].Visualizer;
const app = angular.module("myApp", ["ui.router"]);

app 
  .controller("inicioController", InicioController);

app.config([
  "$urlRouterProvider",
  "$stateProvider",
  ($urlRouterProvider: angular.ui.IUrlRouterProvider, $stateProvider: angular.ui.IStateProvider) => {
    console.log("Entrando en la configuracion");

    $urlRouterProvider.when("", "/inicio");
    $stateProvider
      .state("leeme", { 
        url: "/leeme",
        templateUrl: "views/leeme.html"        
      })
      .state("var-let", { 
        url: "/var-let",
        templateUrl: "views/let-var.html"        
      })
      .state("arrow", { 
        url: "/arrow",
        templateUrl: "views/arrow.html"        
      })
      .state("rest-parameter", { 
        url: "/rest-parameter",
        templateUrl: "views/rest-parameter.html"        
      })
      .state("destructuring", { 
        url: "/destructuring",
        templateUrl: "views/destructuring.html"        
      })
      .state("spread", { 
        url: "/spread",
        templateUrl: "views/spread.html"        
      })
      .state("template-literal", { 
        url: "/template-literal",
        templateUrl: "views/template-literal.html"        
      })
      .state("inicio", {
        url: "/inicio",
        templateUrl: "views/inicio.html",
        controller: InicioController
      });

  }
]);

app.run([
  "$uiRouter",
  $uiRouter => {
    const pluginInstance = $uiRouter.plugin(Visualizer);
  }
]);
