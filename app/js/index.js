(function() {

    document.addEventListener('deviceready', function() {

        // Do cool stuff

    }, false);

    angular.module('checklist', [])
        .controller('ChecklistController', function($scope) {

            $scope.items = JSON.parse(localStorage.getItem("items")) || [];

            var persist = function(items) {
                localStorage.setItem("items", JSON.stringify(items));
            }

            $scope.addItem = function() {

                if ($scope.newItem) {
                    $scope.items.push({
                        text: $scope.newItem,
                        done: false
                    });

                    $scope.newItem = '';
                    persist($scope.items);
                } else {
                    alert('Add something, dummy!!');
                }
            };

            $scope.completeItem = function(index) {
                navigator.notification.confirm(
                    'Are you sure you are done?', 
                    function(buttonIndex) {
                        if (buttonIndex == 2) {
                            $scope.items[index].done = true;
                            $scope.$apply();

                            setTimeout(function() {
                                $('.done').slideUp(200, function() {
                                    $scope.items.splice(index, 1);
                                    $scope.$apply();
                                    persist($scope.items);
                                });
                            }, 1000);
                        }
                    }, 'Are you sure?', 'No way,Yes!'
                );
            };
        });

})();