angular.module('app', [])
  .controller('MainController', ['$scope', function($scope) {

    $scope.lake = "'background-color' : 'blue'"
    $scope.ignited = "'background-color' : 'orange'"
    $scope.burned = "'background-color' : 'red'"

    $scope.ignite = function(index) {
        $scope.land[index]
    }

    $scope.Tile = function(land, index) {
        // style = initateBurn -> orange, burnNeighbors -> red 
        this.lake = false
        this.land = land
        this.style = "'background-color' :'white'"
        this.index = index
    }

    $scope.Tile.prototype = {
        ignite : function(tileList) {
            if (this.land == 'Lake') { return }
            console.lop('clicked this guy: ', this)
            this.style = "'background-color' : 'orange'"
            setTimeout(this.spreadToNeighbors(tileList, this.ignite, 500))
        },
        burn : function(tileList) {
            this.style = "'background-color' : 'red'"
            setTimeout(this.burnNeighbors, 1000)
        },
        spreadToNeighbors : function(tileList, func) {
            neighborA = this.findNeighbor(+1)
            neighborB = this.findNeighbor(-1)
            neighborA.func()
            neighborB.func()
        },
        burnNeighbors : function(tileList) {
            return
        },
        findNeighbors : function(tileList, shift) {
            var a = (this.index + shift) % tile.list.length
            return tileList[index]
        }
    }

// initiateBurn -> on-click
// burnNeighbors -> timeout 
// initiateBurn's on the neighbor (if != lake)

// makeLake this.land = 'Lake'

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

