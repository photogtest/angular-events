(function () {
    'use strict';

    angular
            .module('angularEvents.modals')
            .controller('ModalController', ModalController);

    /** @ngInject */
    function ModalController($modalInstance) {


        /////// VARS ////////
        self = this;
        /////// METHODS ////////
        self.cancel     = cancel;
        self.submmit    = submmit;


        /////// DEFINITIONS ////////
        function  cancel() {
            $modalInstance.dismiss('cancel');
        };
        
        function submmit (data){
            $modalInstance.close(data);
        }
        
    }
})();