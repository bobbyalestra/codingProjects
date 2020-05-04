
console.log('what the hell is going on')
let hotel = {

    hotelName : "JSON localStorage Hotel",
    availableRooms : [ [101,102,103], [201,202,203,204] [301] ],

    updateAvailableRooms: function (){
let dropDown = '<select>';

for (i = 0; i < this.availableRooms.length; i++ ){
for (j = 0; j <this.availableRooms.length[i]; j++){
    dropDown = dropDown + `<option value =>'${this.availableRooms[i][j]}'> ${this.availableRooms[i][j]}></option>`
}
}


    }    
}

    if (Boolean(localStorage.getItem('hotel'))){
    //start running the program else
    // grab list of rooms from local storage
// parse and store in live

let hotelString = localStorage.getItem('hotel')
hotel = JSON.parse(hotelString) ;


hotel.updateAvailableRooms();
    }else{
        //create the hotel object to localStorage
    localStorage.setItem('hotel', JSON.stringify(hotel));
    }


    