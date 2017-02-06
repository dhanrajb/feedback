var feedbackApp = angular.module("feedbackApp", []);
feedbackApp.controller('feedbackController', function($scope,$http) {
	$scope.salutation = ["Mr", "Mrs"];
	
  	$scope.performValidation = function() {
  		if(feedbackForm.checkValidity()){
  			console.log('Posting the data');
  			var data = {
  				'salutation':feedbackForm.salutation.value,
  				'name':feedbackForm.name.value,
  				'email':feedbackForm.email.value,
  				'feedback':feedbackForm.feedback.value
  			}
	  		$http({
			  method: 'POST',
			  data:data,
			  url: '/feedback'
			}).then(function successCallback(response) {
			    console.log('success');
			}, function errorCallback(response) {
			    console.log('error');
			});   
		}else{
			angular.forEach($scope.feedbackForm.$error.required, function(field) {
				field.$$element.siblings('.validationRequired').removeClass('hidden').addClass('show')
			});
			angular.forEach($scope.feedbackForm.$error.email, function(field) {
				field.$$element.siblings('.validationInvalid').removeClass('hidden').addClass('show')
			});
		} 	
  	};
});