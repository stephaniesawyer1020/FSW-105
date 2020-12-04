var shopper1 = {
    firstName: " Mike",
    lastName: "Jones",
    birthDate: 1980,
    location: "USA",
    IsTall: true,
    HasLongHair: true,
    displayInfo: function(){
    console.log(this.firstName+ " "+this.lastName)    
    }
}
console.log(shopper1.displayInfo())
var shopper ={
 firstItem: "apples",
 itemsNeeded: 187,
 needMilk: true,
 displayInfo: function(){
     console.log(this.firstItem)
 }
}
console.log(shopper.displayInfo())