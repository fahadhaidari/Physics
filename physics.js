
// return angle in radians system
function getAngleInRadians (p1, p2) {
	return Math.atan2(p1.y - p2.y, p1.x - p2.x);
}

// return angle in degrees system
function getAngleInDegrees (p1, p2) {
	return Math.atan2(p1.y - p2.y, p1.x - p2.x) * 180 / Math.PI;
}

// return angle in degrees system
function getAngleByPoints (p1x, p1y, p2x, p2y) {
	return Math.atan2(p1y - p2y, p1x - p2x) * Math.PI / 180;
}

// return the opposite angle of an angle
function getOppAngle(angle) {
	angle *= 180 / Math.PI;
	angle += ( 180 ) % 360;
	return angle;
}

// return x, y components of an angle
function getXandYcomponent(angle) {
	//var comp = [Math.cos(angle), Math.sin(angle)];
	var comp = {xComp: Math.cos(angle), yComp:Math.sin(angle)};
	return comp;
}

// convert radians to degrees
function rad2Deg (angle) {
	return angle * 180 / Math.PI;
}

// convert degrees to radians
function deg2Rad (angle) {
	return angle * Math.PI / 180;
}

// get distance between 2 points
function getDistance (p1, p2) {
	return Math.sqrt( Math.abs( ( (p1.x - p2.x) * (p1.x - p2.x) ) + ( (p1.y - p2.y) * (p1.y - p2.y) ) ) );
}

// get distance between 2 points
function getDistanceAsPoints (p1x, p1y, p2x, p2y) {
	return parseInt ( Math.sqrt( Math.abs( ( (p1x - p2x) * (p1x - p2x) ) + ( (p1y - p2y) * (p1y - p2y) ) ) ) );
}