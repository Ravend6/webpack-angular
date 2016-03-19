require('./hello-webpack.scss');

export default function () {
  return {
    restrict: 'E',
    scope: {},
    template: require('./hello-webpack.html'),
    controllerAs: 'vm',
    controller: function () {
      const vm = this;
      vm.greeting = 'Hello Webpack';
    }
  };
}
