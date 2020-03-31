let securityScanner = {

    currentBadgeIdScanned: "",
    currentEmployeeNameScanned : "",
    badgeIdsInBuilding : [],
    employeeNamesInBuilding : [],
    badgeIdsOutBuilding : [],
    employeeNamesOutBuilding : [],

inScan: function(){ //in scan equals a method
      this.badgeIdsInBuilding.push(securityScanner.currentBadgeIdScanned);

    this.employeeNamesInBuilding.push(securityScanner.currentEmployeeNameScanned)},
outScan: function(){ 
        this.badgeIdsOutBuilding.push(securityScanner.currentBadgeIdScanned);
  
      this.employeeNamesOutBuilding.push(securityScanner.employeeNamesOutBuilding);


    console.log(`..:::::In The Building:::::..`);
    console.log(` ID's: ${this.badgeIdsInBuilding}`);
    console.log(` Name's: ${this.currentEmployeeNameScanned}`);
    
    
    console.log(`..:::::Out of The Building:::::..`);
    console.log(` ID's: ${this.badgeIdsOutBuilding}`);
    console.log(` Name's: ${this.currentEmployeeNameScanned}`);

}

}

function scanId(id, name ,inout){


securityScanner.currentBadgeIdScanned = id;
securityScanner.currentEmployeeNameScanned = name;


if (inout == "in"){
   securityScanner.inScan();
} else (inout == "out")
    securityScanner.outScan()
}



scanId("12345", "Arneezy", "in");
scanId("56692", "Jamie", "in");
scanId("78447", "Bobby", "in");
scanId("47894", "Margie", "in");


// out of the building
scanId("14514", "Chelsea", "out");
scanId("69856", "Joe", "out");


