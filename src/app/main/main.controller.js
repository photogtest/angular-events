(function() {
  'use strict';

  angular
    .module('angularEvents')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(moment, $scope) {
       
        var self = this;

        /////// VARS ////////
        self.events         = [];
        self.detailedData   = [];
        self.currentDay     = '';
        self.view = 'month';
        self.today = moment().startOf('month').toDate();
        self.currentPage = 1;
        self.maxSize = 10;
        
        /////// METHODS ////////
        self.dateClicked            = dateClicked;
        self.setDetailedData        = setDetailedData;
        self.resetData              = resetData;
        self.pageChange             = pageChange;
        activate();
        /////// DEFINITIONS ////////


        function activate() {
            self.events = [
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                {
                    title: 'Event Title',
                    price: '$ 200',
                    type: 'info',
                    startsAt: moment().startOf('month').toDate()
                },
                
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
            self.currentPage = 1;
            self.pageChange();
            
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
     
                
        function  pageChange() {
            var begin = ((self.currentPage - 1) * self.maxSize);
            var end = begin + self.maxSize;
            self.filteredData = self.detailedData.slice(begin, end);
        }

  }
})();
