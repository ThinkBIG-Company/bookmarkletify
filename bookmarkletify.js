var UglifyJS = require("uglify-js");

module.exports = function(code) {
    var min = encodeURI(minify(code));
    var result = 'javascript:(function(){;' + min + '})()';
    return result;
}

function minify(code) {
    const result = UglifyJS.minify(code, {
        parse: {},
        compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            drop_console: false
        },
        mangle: {
            toplevel: true,
            reserved: ['$super', '$', 'exports', 'require']
        },
        output: {
            ast: false,
            code: true,
            comments: false,
            beautify: false
        }
    });
    if (result.error) {
        console.error(result.error);
        return code;
    }
    return result.code;
}