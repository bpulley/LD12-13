//require in platino
var platino = require('co.lanica.platino');
var shrapnelFactories = require('entities/shrapnelFactories');
var gameManager = require('lib/gameManager');
/**
* a constructor for bombs.
* 
* @param {string} image - the url of the bomb's image
* @param {object} center - object containing:
*                          x {int}, y {nt}
* @param {object} size - object containing
*                        width {int}, height {int}
**/
exports = function(image, center, size, shrapnel, shrapnelFactory){
    this.shrapnelFactory = shrapnelFactory;
    this.center = center;
    this.sprite = platino.createSprite({
        image : image,
        width : size.width,
        height : size.height,
        x : center.x - size.width/2,
        y : center.y - size.height/2,
    });
    this.shrapnel = shrapnel;

    return this;
};

exports.prototype.explode = function(){
    var shrapnelArray;
    //TODO accept different blast patterns
    if(this.shrapnelFactory){
        shrapnelArray = this.shrapnelFactory(this.shrapnel,this.center);
    } else {
        shrapnelArray = shrapnelFactories.defaultPattern(this.shrapnel,this.center);
    }
    var game = gameManager.getGameView();
    for(var ii = 0; ii < shrapnelArray.length; ii++){
        
        game.topScene().add(shrapnelArray[ii].sprite);
        shrapnelArray[ii].start();
    }
};