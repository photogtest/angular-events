(function() {
  'use strict';

  angular
    .module('angularEvents')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
