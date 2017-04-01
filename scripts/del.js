var del = require('del');

module.exports = function(){
	return del(['\\RASPBERRYPI\PiShare'], { force: true });
}