
// first array logs 7 ,4 ,7 five undefined?

let typeOfFriends = ["Childhood", "Work", "School"];
let myFriends = [["Matty J", "Andy", "Erika", "Stevie"], ["Drew", "Michelle", "Maddie", "Tommy"], ["Arneezy", "Chelsea", "Will I Am", "Margie"]];

for (i = 0; i < typeOfFriends.length; i++){
    for (j = 0; j < typeOfFriends[i].length; j++)

console.log( `${typeOfFriends[i]}: ${myFriends[i][j]} `)
}

// i cant get all four elements
for (i = 0; i < typeOfFriends.length; i++){
    for (j = 0; j < myFriends.length; j++)

console.log( `${typeOfFriends[i]}: ${myFriends[i][j]} `)
}
