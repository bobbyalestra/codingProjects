document.getElementById('slogan').innerText = 'Vitory';
document.getElementById('hotelName').innerText = 'The DOM Hotel'


document.getElementById('availRoomslists').innerHTML = linesOfHtml;


let domHotel ={
    



  availableRooms : [101, 102, 103, 104],
    roomType : ['singles', 'Doubles', 'Queen', 'King'],

}

  linesOfHtml = "<select>"  
for (i = 0; i < availRoomslists.lenth; i++)
linesOfHtml = linesOfHtml + `<option value = '${availRoomslists[i]}'>${availRoomslists[i]} </option>`

linesOfHtml = linesOfHtml + "</select>"

