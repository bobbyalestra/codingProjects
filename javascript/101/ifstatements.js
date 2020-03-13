// intro to just else statements

function testElse(val) {
    var result = "";
    
    if (val >= 6 ){
      result = "Bigger than 5";
    }else                       //no other if statement or condition that needs to be met. just add the result and return result.
      result = "5 or Smaller";
    return result;
  }
  
  testElse(3); //changing the number will change the result
  console.log(testElse())


  // intro to else if statements


  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) { // adding an else if statement gives it an additional condition.
      return "Smaller than 5";
    } else{ // always end in else 
      return "Between 5 and 10";
  }
  }
  testElseIf(3); //will change log
  console.log(testElseIf())

  