var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askLessThan(el1, el2, callback){
  console.log("first: " + el1 + " \nsecond: " + el2);
  reader.question("Is the first one bigger? '0 = false, 1 = true' ", function(input){
    if (input == 1){

      callback(true);
    } else {

      callback(false);
    }
  });
}