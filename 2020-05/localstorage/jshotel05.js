let hotel = {
    hotelName: "JS Local Storage",
    hotelMotto: 'Show me the DATA',


    availableRooms: [ ['201','202'], ['301','302'] ],

}
let hotelMethods = {
    updateAvailableRooms: function (){
        let htmlAvailableList= '<select>'
        for (i = 0; i < liveHotel.availableRooms.length; i++){
            for (j = 0; j < liveHotel.availableRooms[i].length; j++){
                htmlAvailableList = htmlAvailableList + ` <option value= '${liveHotel.availableRooms[i][j]}'>${liveHotel.availableRooms[i][j]} </option> `
            }
}
}
}  

localStorage.setItem('lsHotel', JSON.stringify(hotel));

let liveHotel = JSON.parse(localStorage.getItem('lsHotel'))

document.getElementById('name').innerText = liveHotel.hotelName;