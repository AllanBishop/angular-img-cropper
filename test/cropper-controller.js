angular.module('app').controller("ImageCropperCtrl",[ '$scope', function($scope) 
{
        $scope.cropper = {};
        $scope.cropper.sourceImage = null;
        $scope.cropper.croppedImage   = null;
}]);