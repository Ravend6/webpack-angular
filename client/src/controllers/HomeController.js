export class HomeController {
  constructor($scope) {
    $scope.title = 'Main Page';
    $scope.users = ['Vova', 'Lena', 'Olga'];
    $('[data-toggle="tooltip"]').tooltip();
  }
}
