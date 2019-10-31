var InicioController = (function () {
    function InicioController($scope) {
        this.$scope = $scope;
        console.debug('InicioController constructor');
        $scope.vm = this;
        $scope.vm.titulo = "Tutorial ES6";
        $scope.vm.piloto = new Piloto();
        $scope.vm.piloto.nombre = "sito pons";
        $scope.vm.mostrarAlerta = function () { return alert('Hola mundo'); };
    }
    InicioController.$inject = ["$scope"];
    return InicioController;
}());
//# sourceMappingURL=InicioController.js.map