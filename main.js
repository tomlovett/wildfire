angular.module('app', [])
  .controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.land = []

    $scope.active = ''

    $scope.activate = function(button) {
        $scope.active = button
    }

    $scope.touchTile = function(index) {
        if ($scope.active == 'campfire') {
            var next 
            $scope.initiateChain(index)

        } else if ($scope.active == 'lake') {
            $scope.land[index].makeLake()
        } else {
            return
        }
    }

    $scope.initiateChain = function(index) {
        $scope.chainModify(index, -1)
        $timeout(function() {
            $scope.chainModify(index + 1, 1)
        }, 500)
    }

    $scope.chainModify = function(index, increment) {
        console.log(index, increment)
        if ($scope.land[index].class !== '') { return }
        $scope.land[index].ignite()
        var next = getNext(index, increment)
        $timeout(function(){
            $scope.chainModify(next, increment)
        }, 500)
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

    var Tile = function(land) {
        this.land = land
        this.class = ''
    }

    Tile.prototype = {
        ignite : function() {
            if (this.class !== '') { return }
            this.class = 'btn-warning'
        },
        burn : function() {
            if (this.class !== 'btn-warning') { return }
            this.class = 'btn-danger'
        },
        makeLake : function() {
            if (this.class !== '') { return }
            this.class = 'btn-info'
        }
    }

    var processLands = function(data) {
        data.forEach(function(land) {
            $scope.land.push(new Tile(land))
        })
    }


  var land = [
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
    processLands(land)

}])

