var UglifyJS = require("uglify-js");

module.exports = function(code) {
    var min = encodeURI(minify(code));
    var result = 'javascript:(function(){;' + min + '})()';
    return result;
}

function minify(code) {
    var result = UglifyJS.minify(code, {
        parse: {},
        compress: true,
        mangle: true,
        output: {
            ast: true,
            code: true // optional - faster if false
        }
    });
    //console.log(result.error); // runtime error, or `undefined` if no error
    //console.log(result.code);  // minified output: function add(n,d){return n+d}
    return result.code;
}