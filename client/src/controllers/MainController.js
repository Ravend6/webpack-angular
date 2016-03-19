export class MainController {
  constructor($scope, $location) {
    $scope.isActive = function (viewLocation) {
      let active = (viewLocation === $location.path());
      return active;
    };
  }
}

// MainController.$inject = ['$scope'];
