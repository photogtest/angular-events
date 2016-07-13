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
                if (event != null){
                    event.startsAt = new Date(event.startsAt);
                    response.push(event);
                }
            });
            return response;
        }
        function remove(data){
            var deleteKey = null;
            angular.forEach(service.$storage.events, function (event, key) {
                if (event != null && event.title==data.title && event.startsAt == data.startsAt){
                    deleteKey = key;
                }
            });
             delete service.$storage.events[deleteKey];
        }
        function store(data){
            console.log(data);
            if (data!==null){
                service.$storage.events.push(data);
            }
            console.log(service.$storage.events);
        }
        function reset(){
            $localStorage.$reset();
            service.$storage.events =[];
        }
        

  }
})();
