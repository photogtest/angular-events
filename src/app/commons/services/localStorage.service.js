(function() {
  'use strict';

  angular
    .module('angularEvents.common')
    .service('LocalStorageService', LocalStorageService);

  
  function LocalStorageService($localStorage, moment) {
      var service = {
            //Resources
            get: get,
            remove: remove,
            store: store,
            reset: reset,
            $storage : $localStorage,
        };

        return service;
        function get() {
            if (service.$storage.events === undefined) {
                service.$storage.events = [];
            }
            var response = [];
            angular.forEach(service.$storage.events, function (event) {
                if (event !=null){
                    event.startsAt = new Date(event.startsAt);
                    response.push(event);
                }
            });
            return response;
        }
        function remove(index){
            delete service.$storage.events[index];
        }
        function store(data){
            service.$storage.events.push(data);
        }
        function reset(){
            $localStorage.$reset();
            service.$storage.events =[];
        }
        

  }
})();
