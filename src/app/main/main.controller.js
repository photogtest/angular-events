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
        self.currentDay     = '';
        self.view = 'month';
        self.today = moment().startOf('month').toDate();
        
        /////// METHODS ////////
        self.dateClicked = dateClicked;
        self.setDetailedData = setDetailedData;
        self.resetData   = resetData;
        activate();
        /////// DEFINITIONS ////////


        function activate() {
            self.events = [
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Non-draggable event',
                    type: 'info',
                    startsAt: moment().startOf('month').add(1, 'day').toDate()
                }
            ];
            self.setDetailedData(moment());
        }
        
        /**
         * callback to refresh the detailed data
         * 
         * @param {type} date
         * @returns {undefined}
         */
        function dateClicked(date){
            self.setDetailedData(date);
        }
        /**
         * get the events data
         * 
         * @param {type} date
         * @returns {undefined}
         */
        function setDetailedData(date){
            self.detailedData   = [];
            var formatedDate = moment(date);
            self.currentDay = formatedDate.format("MMM Do YY");
            angular.forEach(self.events, function(event) {
                var diff = date - event.startsAt;
                if (diff == 0){
                    self.detailedData.push(event)
                }
            });
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
