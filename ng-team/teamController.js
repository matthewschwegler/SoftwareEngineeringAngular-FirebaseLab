angular
    .module('ngTeam')
    .controller('teamController', function ($scope, $timeout) {


        $scope.myData = new Firebase("https://fiery-inferno-4197.firebaseio.com/");
        $scope.myTeammateData = new Firebase("https://fiery-inferno-4197.firebaseio.com/teammates/");
        $scope.teammate = {};

        $scope.teammatesData = {};


        $scope.saveMember = function () {
            /*Creates a ref to the teammates table of the database*/
            var teammateRef = $scope.myData.child("teammates");
            /*Use this for your key to enter data*/
            var entryKey = $scope.teammate.name;
            teammateRef.child(entryKey).set($scope.teammate);
            /*Will erase the fields on the screen containing the name and age*/
            $scope.teammate.name = "";
            $scope.teammate.full_name = "";
            $scope.teammate.age = 0;
        }

        $scope.myTeammateData.on('value', function (dataSnapshot) {
            $timeout(function () {
                $scope.teammatesData = dataSnapshot.val();
            });
        });

    });