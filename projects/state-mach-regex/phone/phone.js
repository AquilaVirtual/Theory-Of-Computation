var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    const numbers = line.replace(/\D/g, '');

    if (numbers === '') {
      console.log('No number was found');
    }

    // Find matches
    const areaCode = numbers.substring(0,3);
    const prefix = numbers.substring(3,6);
    const suffix = numbers.substring(6,10);

    // If match found, print number with no spaces, parens, or dashes
    console.log(`Area code: ${areaCode} \nPrefix: ${prefix} \nSuffix: ${suffix}`);
    return

    // Else print that no number was found
});


