
//  set up for ([initialization]; [condition]; [final-expression])

var myArray = [];

for (var i = 0; i < 5; i++){
    myArray.push(i);
  
  }
  
  console.log(myArray)

  //will display [0,1,2,3,4]. Changing the variable i so it = 1 and making i < 6, you will get a log of [1,2,3,4,5]


  // in this example by changing var i to 1 we start loop at the number 1 and making i < 11 will only make it go up to 11 and i +=2 makes it go in increments of two.
var myArray = [];

for (var i = 1; i < 11; i += 2) {
  myArray.push(i)

}

console.log(myArray)