interface IInicioControllerScope extends ng.IScope {
  vm: InicioController;
}
class InicioController implements ng.IController {
 
 
  public titulo: string; 
  public piloto: Piloto;
  public mostrarAlerta: any;

  public static $inject = ["$scope"];

  constructor(private $scope: IInicioControllerScope) {

    console.debug('InicioController constructor');
    $scope.vm = this;
    //this.titulo = "Tutorial ES6";
    $scope.vm.titulo = "Tutorial ES6";
    $scope.vm.piloto = new Piloto();
    $scope.vm.piloto.nombre = "sito pons";  // Llamamos al setter
    //$scope.vm.piloto.pepito = "pepito pons";  Cuidado con las variables
    $scope.vm.mostrarAlerta = () => alert('Hola mundo'); 

  }
}
