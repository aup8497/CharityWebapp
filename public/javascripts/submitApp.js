var app = angular.module('patientSubmit',[]);

		app.controller( 'HomeController' ,function($scope , $http){  //the parameters are basicallly services which we are using
			$scope.submitForm = function(){
				//console.log($scope.newMeow);//this logs the variable newMeow in the console

                //add conditions and change these
                console.log("came here for date");
				if(  !(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test( $scope.dob ) ) ) {
					$scope.dobtrue = true;
                    alert("Date not entered properly,try again !!");

                }
				// else if(  !(/^\d+$/.test($scope.age) ) ){
    //             console.log("came here in age");
				// 	$scope.agetrue=true;
    //                 alert("Age not entered properly,try again !!");

    //             }
                else{

                    //form validated (all information is correct)
                      var  studentname= $scope.studentname ;
                       var  fathername= $scope.fathername ;	
                       var mothername= $scope.mothername ;
                        // var age= $scope.age ;
                        var dob= $scope.dob ;
                       var  gender=$scope.gender ;
                       var caste = $scope.caste;
                       var incomecert = $scope.incomecert;
                       var phone=$scope.phone ;
                       var info = $scope.pInfo;
                       var email = $scope.email;
                       var annualIncome = $scope.annualincome ;

                    //creating the data to be put in as we are making the scope variables to null
                    var dto={

                        studentname : studentname ,
                        fathername: $scope.fathername , 
                        mothername: $scope.mothername ,
                            //  age: $scope.age ,
                        dob: $scope.dob ,
                        gender:$scope.gender ,
                        caste : $scope.caste,
                        incomecert : $scope.incomecert,
                        phone:$scope.phone ,
                        info : $scope.pInfo,
                        email : $scope.email,
                        annualIncome : $scope.annualincome                         

                    };

                    $scope.studentname ="";
                    $scope.fathername ="";
                    $scope.mothername ="";
                    $scope.dob ="";
                    $scope.gender ="";
                    $scope.caste ="";
                    $scope.incomecert ="";
                    $scope.phone ="";
                    $scope.pInfo ="";
                    $scope.email ="";
                    $scope.annualincome ="";
                    // $scope.phone ="";
                    


                    //posting the data to saves.js where it handles this to save data in the data base.
                    $http.post('/data/save', dto).success(function (data, status) {
                        console.log("Successfully saved!!" + "\nStatus : " + status + "\nData : " + data);
                        alert("Successfully Registered!!");
                        // console.log("Registered on : "+ Date.now());
                    }).error(function (data, status) {
                        console.log("Error while Saving data!\n Error : " + status + " \nData : " + data);
                        alert("Could not save your data, try again!");

                    });


                }

			};


		});
