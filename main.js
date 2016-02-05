angular.module('app', [])
  .controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.land = []

    $scope.active = ''

    $scope.activate = function(button) {
        $scope.active = button
    }

    $scope.touchTile = function(index) {
        if ($scope.active == 'campfire') {
            $scope.chainIgnite(index, -1)
            $scope.chainIgnite(index, +1)
        } else if ($scope.active == 'lake') {
            $scope.land[index].makeLake()
        } else {
            return
        }
    }

    $scope.chainIgnite = function(index, increment) {
        if ($scope.land[index].class !== '') { return }
        $scope.land[index].ignite()
        var next = getNext(index, increment)
        console.log(next)
        $timeout($scope.chainIgnite(next, increment), 5000)
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

    var Tile = function(land, tileList, index) {
        // style = initateBurn -> orange, burnNeighbors -> red 
        this.land = land
        this.tileList = tileList
        this.index = index
        this.class = ''
        this.lake = false
    }

    Tile.prototype = {
        ignite : function() {
            if (this.class !== '') { return }
            this.class = 'btn-warning'
        },
        burn : function() {
            if (this.class !== 'btn-warning') { return }
            this.class = 'btn-danger'
            setTimeout(this.burnNeighbors, 1000)
        },
        makeLake : function() {
            if (this.class !== '') { return }
            this.lake = true
            this.class = 'btn-info'
        }
    }

    var processLands = function(data) {
        data.forEach(function(tile) {
            $scope.land.push(new Tile(tile, $scope.land, $scope.land.length))
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

