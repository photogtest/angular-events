(function() {
  'use strict';

  angular
    .module('angularEvents.common')
    .service('LocalStorageService', LocalStorageService);

  
  function LocalStorageService() {
      var service = {
            //Resources
            get: get,
            remove: remove,
            store: store,
            update: update,
        };

        return service;
        
        function get(){
            
        }
        function remove(){
            
        }
        function store(){
            
        }
        function update(){
            
        }
        

  }
})();
