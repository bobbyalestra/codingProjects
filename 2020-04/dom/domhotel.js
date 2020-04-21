document.getElementById('slogan').innerText = 'Vitory';
document.getElementById('hotelName').innerText = 'The DOM Hotel'





document.getElementById('availRoomslists"').innerHTML = linesOfHtml;
let availRoomslist = [101, 102, 103, 104]

let linesOfHtml = "<select>"  
linesOfHtml = linesOfHtml + `<option value = '${availRoomslist[0]}'>${availRoomslist[0]} </option>`
linesOfHtml = linesOfHtml + `<option value = '${availRoomslist[1]}'> ${availRoomslist[1]} </option>`
linesOfHtml = linesOfHtml + `<option value = '${availRoomslist[2]}'>${availRoomslist[2]} </option>`
linesOfHtml = linesOfHtml + `<option value = '${availRoomslist[3]}'>${availRoomslist[3]} </option>`
linesOfHtml = linesOfHtml + "</select>"