let = securityScanner = {
    fruitIdScanned: "", // key: Value (property / kv pair)
    fruitNameScanned: "",
    fruitIdInBasket: [],
    fruitNamesInBasket: [],
    badgeIdOutBuilding: [],
    fruitsInCart: [],
    inScan: function() {
     this.fruitIdInBasket.push(this.fruitIdScanned);
      this.fruitNamesInBasket.push(this.fruitNameScanned);
      console.log(`:::::Welcome to Sally's Fruit Mart::::`);
      console.log(`ID's: ${this.fruitIdInBasket}`);
      console.log(`All Fruits Scanned: ${this.fruitNamesInBasket}`);
    },
    outScan: function() {
      if (this.fruitIdInBasket == this.badgeIdOutBuilding) {
        this.badgeIdOutBuilding.push(this.fruitIdScanned);
        this.fruitsInCart.push(this.fruitNameScanned);

        console.log(`::::Out The Building::::`);
        console.log(`ID's: ${this.badgeIdOutBuilding}`);
        console.log(`ID's: ${this.fruitsInCart}`);
      } else if (this.fruitIdScanned !== this.badgeIdOutBuilding)
        console.log(
          `!!!WARNING ${this.fruitNameScanned} HAS NOT BEEN SCANNED!!!`
        );
    }
  };
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
  scanId("84342", "Grapes", "out");
  scanId("54528", "Pineapple", "in");
  scanId("65464", "Raspberries", "in");
  scanId("18624", "Peaches", "in");
  scanId("25941", "Watermelon", "out");