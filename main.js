angular.module('app', [])
  .controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {


    $scope.active = ''

    $scope.styles = {}

    $scope.activate = function(button) {
        $scope.active = button
    }

    $scope.touchTile = function(index) {
        if ($scope.active == 'campfire') {
            $scope.initiateChain(index, 'btn-warning', 500) // ignite
            $timeout(function() { 
                $scope.initiateChain(index, 'btn-danger', 1000)
            }, 1000) // burn
        } else if ($scope.active == 'lake') {
            $scope.styles[index] = 'btn-info'
        } else {
            return
        }
    }

    $scope.initiateChain = function(index, style, delay) {
        $scope.chainModify(index, style, delay, -1)
        $timeout(function() {
            $scope.chainModify(index+1, style, delay, 1)
        }, delay)
    }

    $scope.chainModify = function(index, style, delay, increment) {
        if ($scope.styles[index] == 'btn-info') { return }
        $scope.styles[index] = style
        var next = getNext(index, increment)
        $timeout(function(){
            $scope.chainModify(next, style, delay, increment)
        }, delay)
    }

    var getNext = function(index, increment) {
        if (index === 0) {
            return $scope.land.length - 1
        } else if (index === $scope.land.length) {
            return 0
        } else {
            return index + increment
        }
    }

    var smarter = function(index, increment) {
        return (index + $scope.land.length) % $scope.land.length
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

