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
};


// where do we set madeAnySwaps to false?
function performSortPass(arr, i, madeAnySwaps, callback){
  if (i < arr.length -1){
    askLessThan(arr[i], arr[i+1], function(lessThan){
      if (lessThan){
        var tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        madeAnySwaps = true;
      }
      performSortPass(arr, ++i, madeAnySwaps, callback)
    })
  } else {
    callback(madeAnySwaps);
  };

};


performSortPass([5,4,3,2,1], 0, false, "callback")