(function() {
  'use strict';

  angular
    .module('angularEvents')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(moment, $scope, LocalStorageService, $modal, $timeout) {
       
        var self = this;

        /////// VARS ////////
        self.events         = [];
        self.detailedData   = [];
        self.currentDay     = '';
        self.view = 'month';
        self.today = moment().startOf('month').toDate();
        self.currentPage = 1;
        self.maxSize = 10;
        self.alerts = [];
        self.dayFiltered = '';
        /////// METHODS ////////
        self.dateClicked            = dateClicked;
        self.setDetailedData        = setDetailedData;
        self.resetData              = resetData;
        self.pageChange             = pageChange;
        self.addEvent               = addEvent;
        self.deleteEvent            = deleteEvent;
        activate();
        /////// DEFINITIONS ////////


        function activate() {
            self.events = LocalStorageService.get();
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
            delete self.detailedData;
            self.detailedData   = [];
            self.detailedData.totalSum = 0;
            var formatedDate = moment(date);
            self.dayFiltered = date;
            self.currentDay = formatedDate.format("MMM Do YY");
            angular.forEach(self.events, function(event, $index) {
                var diff = date - new Date(event.startsAt);
                if (diff == 0){
                    event.index = $index;
                    self.detailedData.totalSum += parseFloat(event.price);
                    self.detailedData.push(event);
                }
            });
            self.pageChange();
        }
        
        
        /**
         * Delete all event for this user.
         * 
         * @returns {undefined}
         */
        function  resetData(){
           LocalStorageService.reset();
           self.detailedData   = [];
           self.events   = [];
           
           self.pageChange();
        }
     
        function  pageChange() {
            var begin = ((self.currentPage - 1) * self.maxSize);
            var end = begin + self.maxSize;
            self.filteredData = self.detailedData.slice(begin, end);
        }
        
        
        function addEvent() {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/modals/modalAdd.html',
                controller: 'ModalController',
                controllerAs: 'ModalCtrl',
                size: 'lg',
                resolve: {
                   
                }
            });
            modalInstance.result.then(function (data) {
                LocalStorageService.store(data);
                data.startsAt = new Date(data.startsAt);
                self.events.push(data);
                self.setDetailedData( new Date(self.currentDay));
                self.alerts.push({msg: 'Even succesfuly added'});
                $timeout(function() {
                            self.alerts=[];
                }, 4000);
            }, function () {
            });
        };

        
        function deleteEvent(event) {
            console.log(event);
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/modals/modalDelete.html',
                controller: 'ModalController',
                controllerAs: 'ModalCtrl',
                size: 'lg',
                resolve: {
                }
            });
            modalInstance.result.then(function () {
                LocalStorageService.remove(event);
                delete self.events;
                self.events = LocalStorageService.get();
                self.setDetailedData(moment());
                self.alerts.push({msg: 'Even succesfuly Deleted'});
                $timeout(function() {
                        self.alerts=[];
                }, 4000);
            }, function () {
            });

        }

  }
})();
