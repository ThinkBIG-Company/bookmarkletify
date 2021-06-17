var UglifyJS = require("uglify-js");

module.exports = function(source) {
    var min = encodeURI(minify(source));
    var result = 'javascript:(function(){;' + min + '})()';
    return result;
}

function minify(source) {
    var result = UglifyJS.minify(source);
	//console.log(result.error); // runtime error, or `undefined` if no error
	//console.log(result.code);  // minified output: function add(n,d){return n+d}
    return result.code;
}