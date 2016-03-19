export default function ($routeProvider) {
  $routeProvider
    .when('/', {
      // templateUrl: '/src/views/page/home.html',
      template: require('../views/page/home.html'),
      controller: 'HomeController'
    })
    .when('/about', {
      template: require('../views/page/about.html'),
      controller: 'AboutController'
    })
    .when('/contact', {
      template: require('../views/page/contact.html'),
      controller: 'ContactController'
    })
    .otherwise({
      redirectTo: '/'
    });
}
