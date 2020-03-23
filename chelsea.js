function planeTickets() { //parameters can be blank because variables will be spelled out in following lines
    let destinations = ['Florida', 'California', 'Texas', 'Washington', 'New York'];
    let reservedSeats = [75, 175, 125, 159, 200];
    let planeCapcity = [200];
    for (i = 0; i < destinations.length; i++) {
        if (reservedSeats[i] < planeCapcity) {
        console.log(`There are ${planeCapcity - reservedSeats[i]} seats left on this flight to ${destinations[i]}.`)
    } else if (reservedSeats === planeCapcity) {
        console.log(`Full Flight. No more available seats.`)
    }
}
}
(planeTickets());

