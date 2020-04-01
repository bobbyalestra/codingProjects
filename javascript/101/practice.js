let securityScanner = {

  currentBadgeIdScanned: "",
  currentEmployeeNameScanned : "",
  badgeIdsInBuilding : [],
  employeeNamesInBuilding : [],
  badgeIdsOutBuilding : [],
  employeeNamesOutBuilding : [],
 
inScan: function(){ //in scan equals a method
    this.badgeIdsInBuilding.push(securityScanner.currentBadgeIdScanned);
    this.employeeNamesInBuilding.push(securityScanner.currentEmployeeNameScanned)

  console.log(`..:::::In The Building:::::..`);
  console.log(` ID's: ${this.badgeIdsInBuilding}`);
  console.log(` Name's: ${this.currentEmployeeNameScanned}`)
  
},
  outScan: function(){ 
      this.badgeIdsOutBuilding.push(securityScanner.currentBadgeIdScanned);
      this.employeeNamesOutBuilding.push(securityScanner.currentEmployeeNameScanned);

  console.log(`..:::::Out of The Building:::::..`);
  console.log(` ID's: ${this.badgeIdsOutBuilding}`);
  console.log(` Name's: ${this.employeeNamesOutBuilding}`);

function scanId(inout, id, name){

securityScanner.currentBadgeIdScanned = id;
securityScanner.currentEmployeeNameScanned = name;
securityScanner.inside = inout;
securityScanner.outside = inout;


if (inout == "in"){
  securityScanner.inScan();
}   else (inout == "out")
    securityScanner.outScan()
}



scanId("12345", "Arneezy", "in");
scanId("12345", "Arneezy", "out");
scanId("56692", "Jamie", "in");
scanId("56692", "Jamie", "out");
scanId("78447", "Bobby", "in");
scanId("78447", "Bobby", "out");
scanId("47894", "Margie", "in");
scanId("47894", "Margie", "out");
scanId("14514", "Chelsea", "in");
scanId("14514", "Chelsea", "out");
scanId("69856", "Joe", "in");
scanId("69856", "Joe", "out");
scanId("87234", "Lord 9th", "in");
scanId("87234", "Lord 9th", "out");


  }
}