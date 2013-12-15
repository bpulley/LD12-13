

var touchable = [];
var bombs = [];
var shrapnel = [];
var gameView;

/**
* take a touch event and brodcast it to each object that can handle it.
*
* @param 
**/
exports.brodcastTouch = function(evt){
    var length = touchable.length;
    for (var ii = length - 1; ii >=0; ii--){
        if(touchable[ii].contains(evt.x,evt.y)){
            touchable[ii].fireEvent(evt.type, evt);
        }
    }
};

exports.registerGameView = function(view){
    gameView = view;
};

exports.getGameView = function(){
    return gameView;
}