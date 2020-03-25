let townNames = ["Falmouth", "Narragansette", "Bourne"];
let beachViews = [["Old Silver", "The Heights", "Megansette" ], ["Narragasette", "Another part of Narragansette", "More Narragansette"], ["ScraggY Neck", "The Harbor", "Train Bridge"]];
let capacityNum = [[150, 200, 75],[100, 200, 300], [ 175, 400, 250]];

for (i = 0; i < townNames.length; i++){
    for (j = 0; j < beachViews[i].length; j++){
       
    



console.log( `The beach, ${beachViews[i][j]}: located in ${townNames[i]}: can hold a maximum of  ${capacityNum[i][j]} people `)
}

}