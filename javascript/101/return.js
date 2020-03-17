
function doorDash(restaurant, orders, address){
    if (restaurant == 'Plant City') {
        return `Your order of ${orders} will arrive at ${address}`;

    }else if (restaurant == ' Capriccio'){

return `Your order of ${orders} will arrive at ${address}`;
    
}else if (restaurant == 'Capital Grille')
{ 
return `Your order of ${orders} will arrive at ${address}`;
} 
}
console.log(doorDash('Plant City', 'Filet Mignon Salad', '100 Niantic Ave'));




// this function will display the name and adress of me

function newLocation(name, address, state ){
    if (name == 'Bobby'){
        return `This package is for ${name} who lives at ${address} ${state}`;

    }
}

console.log(newLocation('Bobby', '27 N. Fal HWY', 'MA' ));


//     name of func  below are called paramiters
function aboutMe( name, age, gender, like, dislike){

 if (name == 'Bobby'){
     return `Hi my name is ${name} .  I am a ${age} ${gender} who likes to ${like} but dislikes ${dislike} `
 }
}    //                 these below are called arguements
console.log(aboutMe('Bobby', '27 years old', 'male', 'coding', 'sleep'));


