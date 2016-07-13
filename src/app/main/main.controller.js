(function() {
  'use strict';

  angular
    .module('angularEvents')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(moment, $scope, LocalStorageService, $modal) {
       
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
        self.addEvent               = addEvent;
        activate();
        /////// DEFINITIONS ////////


        function activate() {
            self.events = LocalStorageService.get();
            console.log(self.events);
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
                var diff = date - new Date(event.startsAt);
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
           LocalStorageService.reset();
           self.detailedData   = [];
           self.events   = [];
           
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
                    items: function () {
                        return $scope.items;
                    }
                }
            });
            modalInstance.result.then(function (data) {
                console.log(data);
                LocalStorageService.store(data);
            }, function () {
            });
        };

        
        

  }
})();
