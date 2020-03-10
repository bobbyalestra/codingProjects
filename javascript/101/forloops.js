
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


//next example is starting at a number in decreasing it buy two.

var myArray = [];

for (var  i = 10; i > 0; i-=2){
  myArray.push(i)
}

console.log(myArray)

// this displays [10,8,6,4,2,0]. 
//by changing var i to equal 9 , it will start off at 9 and decrease by two until you hit number one
var myArray = [];

for (var  i = 9; i > 0; i-=2){
  myArray.push(i)
}

console.log(myArray)

//next we will be console logging all of var i as an array

var myArr = [ 2, 3, 4, 5, 6];


