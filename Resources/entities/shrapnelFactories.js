/**
* a collection of factory functions for various blast patterns.
*
* all factories should take a shrapnel object (to be cloned as needed)
* and a center (to be applied to the cloned pieces of shrapnel), and 
* return an array of shrapnel objects.
**/

/**
* the basic shrapnel pattern.  Just 4 pieces at 90 degree angles.
**/
exports.defaultPattern = function(shrapnel, center) {
    //initialize the output array
    var out = [];
    for (var angle = 0; angle <=360; angle+=90){
        //make a copy of our shrapnel template.
        var tempShrapnel = shrapnel.clone();
        //now update the center and angle
        tempShrapnel.setCenter(center);
        tempShrapnel.setAngle(angle);
        //and add it to our return array
        out.push(tempShrapnel);
    }
    //return our fully realized srapnel set.
    return out;
};