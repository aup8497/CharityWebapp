
var app = angular.module('patientInfo',[]);

app.controller( 'InfoController' ,function($scope , $http){  //the parameters are basicallly services which we are using

        $scope.removeRow = function () {
            
        }

        //getting the patients data to refresh the page everytime.
        function getPatients(){
            console.log('patients came here to get patients by get');

            // this will be caught by saves.js
            $http.get('data/get').then(function(response){
                $scope.patients=(response.data);
            });
            //this is an API call
        }
        getPatients();

    //http post to remove data from the data base.
    $scope.removeRow = function(patient){
        console.log('removing a patient');

        // this will be caught by saves.js
        $http.post('data/remove',patient).then(function(response){
            // $scope.patients=(response.data);
            getPatients();
        });
    };


});