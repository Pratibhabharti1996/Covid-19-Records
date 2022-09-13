const URL = "https://covid19.mathdro.id/api";

const URL1 = "https://covid19.mathdro.id/api/countries";

var app = angular.module("myApp", []);
app.controller("myCtrl", ($scope , $http) => {

    $scope.title = "Stay home Stay Safe"
    
   $http.get(URL).then( (response) => {
    //success
    $scope.all_data = response.data;
   }, 
(error) => {

    //error
    console.log(error);
});
//get country here 
$scope.get_country_data= () => {

    let country = $scope.c;
    if(country == "")
    {
        $scope.c_data = undefined;
        return;
    }
    $http.get(`${URL}/countries/${country}`).then((response) =>
     {
        console.log(response.data);
        $scope.c_data = response.data;
     }, 
    (error) =>
    
    {console.log(error);
    }
    );
};
});

