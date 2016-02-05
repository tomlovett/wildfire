angular.module('app', [])
  .controller('MainController', ['$scope', function($scope) {

    $scope.ignite = function(index) {
        $scope.land[index]
    }

    var Tile = function(land, tileList, index) {
        // style = initateBurn -> orange, burnNeighbors -> red 
        this.land = land
        this.tileList = tileList
        this.index = index
        this.style = "'background-color' :'white'"
        this.lake = false
    }

    Tile.prototype = {
        ignite : function(tileList) {
            if (this.land == 'Lake') { return } // a different way to check
            console.log('clicked this guy: ', this)
            this.style = "'background-color' : 'orange'"
            setTimeout(this.igniteNeighbors, 500)
        },
        burn : function(tileList) {
            this.style = "'background-color' : 'red'"
            setTimeout(this.burnNeighbors, 1000)
        },
        igniteNeighbors : function(tileList) {  // way to pass ignite or burn as functions to cut down double-code?
            neighborA = this.findNeighbor(+1)
            neighborB = this.findNeighbor(-1)
            neighborA.ignite()
            neighborB.ignite()
        },
        burnNeighbors : function(tileList) {
            neighborA = this.findNeighbor(+1)
            neighborB = this.findNeighbor(-1)
            neighborA.burn()
            neighborB.burn()
        },
        findNeighbors : function(tileList, shift) {
            var a = (this.index + shift) % tile.list.length
            return tileList[index]
        },
        makeLake : function() {
            this.lake = true
            this.style = "'background-color' : 'blue'"
        }
    }

    // processLands


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

