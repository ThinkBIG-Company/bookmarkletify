const fs = require('fs');
const concat = require('concat-stream');
const streamify = require('string-to-stream');
const bookmarkletify = require('../bookmarkletify');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

module.exports = async function(opts) {
  try {
    const { infile, outfile } = opts;
    const input = infile ? await readFile(infile) : process.stdin;
    const output = outfile ? await writeFile(outfile) : process.stdout;
    const buffer = concat(input);
    const bookmarklet = bookmarkletify(buffer.toString());
    streamify(bookmarklet + '\n').pipe(output);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};