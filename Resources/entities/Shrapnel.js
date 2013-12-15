var platino = require('co.lanica.platino');
var gameMath = require('lib/gameMath');
/**
* constructor for a piece of shrapnel
**/
exports = function(angle, speed, lifetime, image, center, size) {
    this.angle = angle;
    this.speed = speed;
    this.lifetime = lifetime;
    this.image = image;
    this.center = center;
    this.size = size;

    this.sprite = platino.createSprite({
        image : image,
        width : size.width,
        height : size.height,
        x : center.x - size.width/2,
        y : center.y - size.height/2,
        // z : 1,
    });
    exports.prototype.setAngle.call(this,angle);

    return this;
};

exports.prototype.start = function(){
    this.sprite.transform(this.transform);    
}

exports.prototype.destroy = function(){

};

//perform a shallow clone of this piece of shrapnel
exports.prototype.clone = function(){
    return new exports(this.angle, this.speed, this.lifetime, this.image, this.center, this.size);
}

exports.prototype.setCenter = function(center){
    this.center = center;
    this.sprite.x = center.x - this.size.width;
    this.sprite.y = center.y - this.size.height;
};
exports.prototype.setAngle = function(angle){
    this.angle = angle;
    this.sprite.angle = angle;
    //get a unit length vector in the desired direction of movement
    var direction = gameMath.rotate2d({
        x:0,
        y:1
    }, angle);
    //get total displacement
    var displacement = this.speed * this.lifetime;
    this.transform = platino.createTransform();
    //apply the displacement to the transform.
    this.transform.x = displacement * direction.x;
    this.transform.y = displacement * direction.y;
    this.transform.duration = this.lifetime * 1000;
}