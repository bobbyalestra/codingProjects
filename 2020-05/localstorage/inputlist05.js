
let arrayNames = [];
let parsedArray = [];
function addnameToArray(){
   let nameToAdd= document.getElementById('inputBox').value
   if (nameToAdd.length != 0){

   
   
   arrayNames.push(nameToAdd);
   }else{ 
    //    alert('Please Enter Name')


    localStorage.setItem('lsArrayNames', JSON.stringify(arrayNames));

    parsedArray = JSON.parse(localStorage.getItem('lsArrayNames'));
   }

   for (i =0; i < document.getElementById('theList').length; i++ )
   let htmlText = '<ul>'
   
}




