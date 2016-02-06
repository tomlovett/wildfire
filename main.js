angular.module('app', [])
  .controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {


    $scope.active = ''

    var lake = 'btn-info'

    $scope.styles = {}

    $scope.activate = function(button) {
        $scope.active = button
    }

    $scope.touchTile = function(index) {
        if ($scope.active == 'campfire') {
            startFireChain(index)
        } else if ($scope.active == 'lake') {
            $scope.styles[index] = 'btn-info'  // turns 
        } else {
            return
        }
    }

    var startFireChain = function(index) {
        initFire(index, 'btn-warning', 500) // ignite
        $timeout(function() { 
            initFire(index, 'btn-danger', 1000)  // wait one second, burn
        }, 1000)
    }

    var initFire = function(index, style, delay) {
        burn(index, style, delay, -1)         // sending fire left
        $timeout(function() {
            burn(index+1, style, delay, 1)    // sending right
        }, delay)
    }

    var burn = function(index, style, delay, increment) {
        if ($scope.styles[index] == 'btn-info') { return }
        $scope.styles[index] = style
        var next = getNext(index, increment)
        $timeout(function(){
            burn(next, style, delay, increment)
        }, delay)
    }

    var getNext = function(index, increment) {
        return (index + increment + $scope.land.length ) % $scope.land.length
    }


  $scope.land = [
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees'
  ]

}])

