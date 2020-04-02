console.log(`..:::Welcome to Sally's Fruit Mart:::..`),

let = securityScanner = {
  fruitIdScanned: "", // key: Value (property / kv pair)
  fruitNameScanned: "",
  fruitIdInBasket: [],
  fruitNamesInBasket: [],
  fruitoutofBasket: [],
  fruitsInCart: [],
  allFruitScanned: [],

  inScan: function() {
    this.fruitIdInBasket.push(this.fruitIdScanned);
    this.fruitNamesInBasket.push(this.fruitNameScanned);
    this.allFruitScanned.push(this.fruitNamesInBasket);
    console.log(`Fruit Id'ss: ${this.fruitIdScanned}`);
    console.log(`Fruit Names: ${this.fruitNameScanned}`);
   
  },
  
  outScan: function() {
    if (this.fruitIdInBasket == this.fruitoutofBasket) {
      this.fruitoutofBasket.push(this.fruitIdScanned);
      this.fruitsInCart.push(this.fruitNameScanned);

      console.log(`::::Not Yet Scanned::::`);
      console.log(` Fruity ID's: ${this.fruitoutofBasket}`);
      console.log(`Fruity name's: ${this.fruitsInCart}`);
    } else if (this.fruitIdScanned !== this.fruitoutofBasket)
      console.log(`!!!WARNING ${this.fruitNameScanned} HAS NOT BEEN SCANNED!!!`);
    }
    }
      

// end of object
function scanId(id, name, inout) {
  securityScanner.fruitIdScanned = id;
  securityScanner.fruitNameScanned = name;
  if (inout == "in") {
    securityScanner.inScan();
  } else if (inout !== "in") {
    securityScanner.outScan();
  }
 
}



scanId("23456", "Banana", "in");
scanId("15754", "Strawberry", "in");
scanId("54528", "Pineapple", "in");
scanId("65464", "Raspberries", "in");
scanId("18624", "Peaches", "in");
scanId("25941", "Watermelon", "out");
scanId("84342", "Grapes", "out");