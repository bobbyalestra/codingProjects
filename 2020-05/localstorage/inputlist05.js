
let arrayNames = [];
let parsedArray = [];
let oldArrayNames =[];

let oldArrayNames=JSON.parse(localStorage.getItem('arrayNames'));



function addnameToArray(){
   let nameToAdd= document.getElementById('inputBox').value
   if (nameToAdd.length != 0){

   
   
   arrayNames.push(nameToAdd);
   }else{ 
    //    alert('Please Enter Name')


    localStorage.setItem('lsArrayNames', JSON.stringify(arrayNames));

    parsedArray = JSON.parse(localStorage.getItem('lsArrayNames'));
   }

   for (i =0; i < oldArrayNames.length; i++ )
   let htmlText = '<ul>' + `${nameToAdd}`

}




