angular.module('app').controller("ImageCropperCtrl",[ '$scope', function($scope) 
{
        $scope.img = {};
        $scope.img.uncroppedImage = null;
        $scope.img.croppedImage   = null;
        $scope.image = {};
        $scope.image.source = null;
}]);