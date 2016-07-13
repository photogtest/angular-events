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
            update: update,
            reset: reset,
            $storage : $localStorage,
            
       
            
            
        };

        return service;
        function get(){
            var response = [];
            angular.forEach(service.$storage.events, function(event) {
                event.startsAt = new Date(event.startsAt);
                response.push(event);
            });
            return response;
        }
        function remove(index){
            
        }
        function store(data){
            service.$storage.events.push(data);
        }
        function update(index, data){
            
        }
        function reset(){
            $localStorage.$reset();
            service.$storage.events =[];
        }
        

  }
})();
