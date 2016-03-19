export default function ($rootScope, $log) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $log.debug('success changed routes');
    // $log.debug(event);
    // $log.debug(current);
    // $log.debug(previous);
    // console.log('------');
  });

  $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
    $log.debug('error changed routes');
    // $log.debug(event);
    // $log.debug(current);
    // $log.debug(previous);
    // console.log(rejection);
    // console.log('------');
  });
}
