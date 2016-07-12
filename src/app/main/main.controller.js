(function() {
  'use strict';

  angular
    .module('angularEvents')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(moment) {
       
        var self = this;

        /////// VARS ////////
        self.events         = [];
        self.detailedData   = [];
        self.currentDay     = '2016/06/12';
        self.view = 'month';
        self.today = moment().startOf('month').toDate();
        
        /////// METHODS ////////
        self.dateClicked = dateClicked;
        self.getDateData = getDateData;
        self.resetData   = resetData;
        activate();
        /////// DEFINITIONS ////////


        function activate() {
            
        }
        
        /**
         * callback to refresh the detailed data
         * 
         * @param {type} date
         * @returns {undefined}
         */
        function dateClicked(date){
            console.log('Click date: ' + date);
        }
        /**
         * get the events data
         * 
         * @param {type} date
         * @returns {undefined}
         */
        function getDateData(date){
            
        }   
        /**
         * Delete all event for this user.
         * 
         * @returns {undefined}
         */
        function  resetData(){
            console.log('reset data');
        }
     
            
        

  }
})();
