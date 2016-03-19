// configs
import route from './configs/route.js';
import run from './configs/run.js';
// controllers
import {MainController} from './controllers/MainController.js';
import {HomeController} from './controllers/HomeController.js';
import {AboutController} from './controllers/AboutController.js';
import {ContactController} from './controllers/ContactController.js';
// directives
import helloWebpack from './directives/hello-webpack/hello-webpack.js';
// services
// import MovieService from './services/MovieService.js';

export const myApp = angular.module('myApp', [
  'ngRoute',
]);

myApp.config(route);
myApp.run(run);

// myApp.factory('$movie', MovieService.init);

myApp.controller('MainController', MainController);
myApp.controller('HomeController', HomeController);
myApp.controller('AboutController', AboutController);
myApp.controller('ContactController', ContactController);

myApp.directive('helloWebpack', helloWebpack);

