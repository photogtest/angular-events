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
            return service.$storage.events;
            
        }
        function remove(index){
            
        }
        function store(data){
            
        }
        function update(index, data){
            
        }
        
        function reset(){
            $localStorage.$reset();
        }
        

  }
})();
