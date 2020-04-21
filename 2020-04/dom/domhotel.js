document.getElementById('slogan').innerText = 'Vitory';
document.getElementById('hotelName').innerText = 'The DOM Hotel'

let availRoomslist = [101, 102, 103, 104]

let linesOfHtml = "<select>"  
linesOfHtml = linesOfHtml + `<option value = '${availRoomslist[0]}'>${availRoomslist[0]} </option>`
linesOfHtml = linesOfHtml + "</select>"