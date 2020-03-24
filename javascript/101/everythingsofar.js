
// first array logs 7 ,4 ,7 five undefined?

let typeOfFriends = ["Childhood", "Work", "School"];
let myFriends = [["Matty J", "Andy", "Erika" ], ["Drew", "Michelle", "Maddie"], ["Arneezy", "Chelsea", "Will I Am"]];


for (i = 0; i < typeOfFriends.length; i++){
    for (j = 0; j < myFriends[i].length; j++)
console.log( `${typeOfFriends[i]}: ${myFriends[i][j]} `)
}


let townNames = ["Falmouth", "Narragansette", "Bourne"];
let beachViews = [["Old Silver", "The Heights", "Megansette" ], ["Narragasette", "Another part of Narragansette", "More Narragansette"], ["ScraggY Neck", "The Harbor", "Train Bridge"]];


for (i = 0; i < townNames.length; i++){
    for (j = 0; j < beachViews[i].length; j++)
 console.log( `${townNames[i]}: ${beachViews[i][j]}: `)
}

