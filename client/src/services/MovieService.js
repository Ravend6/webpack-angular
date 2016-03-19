const HTTP = new WeakMap();

export default class MovieService {

  constructor($http) {
    HTTP.set(this, $http);
  }

  static init($http) {
    return new MovieService($http);
  }

  load() {
    return HTTP.get(this).get('/data/movies.json');
  }

  find(movies, id) {
    return movies.filter(function (movie) {
      if (id === movie.id) return movie;
    })[0];
  }
}

// export default function ($http) {
//   return {
//     load: function () {
//       return $http.get('/data/movies.json');
//     },
    // find: function (id, movies) {
    //   movies.forEach(function (movie, index) {
    //     if (id === movie.id) {
    //       return movie;
    //     }
    //   });
//     }
//   };
// }
