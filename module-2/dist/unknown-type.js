"use strict";
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        return speed;
    }
    else if (typeof speed === 'string') {
        return parseInt(speed);
    }
    else {
        return 0;
    }
};
getMyCarSpeed(100);
getMyCarSpeed('100 kmh^-1');
getMyCarSpeed(true);
