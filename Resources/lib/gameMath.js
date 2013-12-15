
const DEG_RAD_CONVERSION_FACTOR = Math.PI/180;

//rotate the specified 2d vector by the given angle
exports.rotate2d = function(vector, angle){
    //convert degrees to radians
    angle = angle * DEG_RAD_CONVERSION_FACTOR;
    //trig is slow, only calculate once
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    return {
        x : vector.x * cos - vector.y * sin,
        y : vector.y * cos + vector.x * sin,
    };
};