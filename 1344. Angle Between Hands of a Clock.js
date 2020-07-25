/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let hourHandAngle = 30 * (hour % 12) + minutes / 2;
    let minuteHandAngle = 6 * minutes;
    let angle = Math.abs(hourHandAngle - minuteHandAngle)
    return Math.min(angle, 360 - angle);
};
