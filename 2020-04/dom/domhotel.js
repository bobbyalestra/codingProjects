document.getElementById('slogan').innerText = 'Vitory';
document.getElementById('hotelName').innerText = 'The DOM Hotel'





document.getElementById('availRoomslists"').innerHTML = linesOfHtml;
let availRoomslist = [101, 102, 103, 104]

let linesOfHtml = "<select>"  
for (i = 0; i < availRoomslist.lenth; i++)
linesOfHtml = linesOfHtml + `<option value = '${availRoomslist[i]}'>${availRoomslist[i]} </option>`

linesOfHtml = linesOfHtml + "</select>"