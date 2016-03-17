export default function ($routeProvider) {
  $routeProvider
    .when('/', {
      template: require('../views/main.html'),
      controller: 'HomeController'
    })
    .when('/about', {
      template: require('../views/about.html'),
      controller: 'AboutController'
    })
    .when('/contact', {
      template: require('../views/contact.html'),
      controller: 'ContactController'
    })
    .otherwise({
      redirectTo: '/'
    });
}
