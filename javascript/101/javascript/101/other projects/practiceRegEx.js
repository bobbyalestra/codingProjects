let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // changing this line will change the word you search for in the string
let result = extractStr.match(codingRegex);  // the result will equal the string matching the word searched for in the regex.
console.log(codingRegex)


// next is trying to find multiples of the word in  the  code.

