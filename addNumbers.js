var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(theSumArg, numsLeft, onlyDoThisWhenCalled) {
  if (numsLeft > 0) {
    reader.question("Add next number", function(num) {
      var num = parseInt(num);
      var currentSum = theSumArg + num;

      console.log("partial sum: " + currentSum);

      addNumbers(currentSum, (--numsLeft), onlyDoThisWhenCalled);
    });
  } else {
    onlyDoThisWhenCalled(theSumArg);
    reader.close();
  }
}


addNumbers(0, 4, function(passedInFromTheSumArg) {
  console.log("TOTAL SUM: " + passedInFromTheSumArg);
});
