var UglifyJS = require("uglify-js");

module.exports = function(code) {
    var min = encodeURI(minify(code));
    var result = 'javascript:(function(){;' + min + '})()';
    return result;
}

function minify(code) {
    var result = UglifyJSs.minify(code, {
        parse: {},
        compress: false,
        mangle: false,
        output: {
            ast: false,
            code: false // optional - faster if false
        }
    });
    //console.log(result.error); // runtime error, or `undefined` if no error
    //console.log(result.code);  // minified output: function add(n,d){return n+d}
    return result.code;
}