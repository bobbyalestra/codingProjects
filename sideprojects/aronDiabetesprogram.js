console.log(`..:::MOMMY AND DADDY LOVE YOU SO MUCH ARON!!:::..`),

let = itemScanner = {
  todaysTime: "", // refers to the  parameters of the scanId "id"function
  todaysDay: "", // refers to the  parameters of the scanId "name"function
  currentBG: "", // refers to the  parameters of the scanId "price"function
  targetBG: "", //  // refers to the  parameters of the scanId "amount"function
  todaysTimesingroup: [],
  todaysDayingroup: [],
  lowBGlevel: [],
  highBGlevel: [],
  allitemsScanned: [],
  totalmathdone : (this.targetBG * this.currentBG),//give me the total of the specific item
  
  
  //         NEED HELP BELOW
  totalOfAllSales : this.totalmathdone + this.totalmathdone, // not working

  
  
  itemsScanned: function() {
    this.todaysTimesingroup.push(this.todaysTime);
    this.todaysDayingroup.push(this.todaysDay);
     
    console.log(`Time: ${this.todaysTime}`);
    console.log(`Today is: ${this.todaysDay}`);
    console.log(` Arons BG levels were ${itemScanner.targetBG}, on ${this.todaysDay} with a correction factor of `)

  },
  
  itemsNotScanned: function() {
    if (this.todaysTime !== this.lowBGlevel)
      console.log(`!!!WARNING ARON HAS HIGH BG!!!`);
    },
    
  
  }

  
  
let targetLvl = 180



function scanId(id, name, inout, amount, price) {
  itemScanner.todaysTime = id;
  itemScanner.todaysDay = name;
  itemScanner.targetBG = amount;
  itemScanner.currentBG = price;
  totalCostOfItem = (((amount) - (price)) / 350);
  correctionCarbFormula = ((amount - 180) /350 )



  if (inout == "in") {
    itemScanner.itemsScanned();
   console.log(totalCostOfItem)
    
  } else if (inout !== "in") {
    itemScanner.itemsNotScanned();
  } 
  console.log(` ${""} `);
   
}

// will cauase it to be undefined

// function total(){
//  totalP= itemScanner.totalmathdone + itemScanner.totalmathdone;
//  return totalP ;
// }

 
scanId("730", "Monday", "in", 465, 150);
scanId("1000", "Tuesday", "in",387, 150);
scanId("1500", "Wedneday", "in", 435, 150);
scanId("1600", "Thursday", "in",  512, 150);
scanId("1900", "Friday", "in", 416, 150);
scanId("1600", "Sat5urday", "in",  512, 150);
scanId("1900", "Sunday", "in", 416, 150);

console.log (` <..::THERE IS NOTHING IN THE WORLD MOMMY AND DADDY WOULDNT DO FOR YOU!::..> `);
console.log(` ${""} `); // adding a space

console.log(` ${""} `);


//            NOT SCANNED YET



    
  function price() {
    
    var sqBn = document.priceCalc.bgLevels;
    var Amt = document.priceCalc.number;
    
    var price = ((Amt.value -sqBn.value) /350);
    
    alert(price);
}



