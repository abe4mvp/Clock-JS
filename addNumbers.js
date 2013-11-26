var readline = require('readline');

var reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout;
});

reader.question("Query", function(answer) {
  console.log("Hello" + answer + "!");
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Add next number", function(num) {
      var num = parseInt(num);
      var currentSum = num + sum;

      completionCallback(currentSum);

      addNumbers(currentSum, (numsLeft--), completionCallback)
    });
  } else {
    completionCallback(sum)
  }
}

completionCallback(function(sum){
  console.log("Current sum : " + sum);
})
// reader.close();