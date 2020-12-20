var fruit = ["banana", "apple", "orange", "watermelon" ];
var vegatables = ["carrots", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegtables: ", vegatables);

// document.getElementById("arraymethods.js").innerHTML = vegatables;
// document.getElementById("arraymethods.js").innerHTML = fruit;

function lastFromArray() {
    vegatables.pop();
//    document.getElementById(" arraymethod.js").innerHTML = fruit;
    console.log(vegatables)
  }lastFromArray()

  function firstFromArray() {
    fruit.shift();
    console.log(fruit)
    
    // document.getElementById("arraymethod.js").innerHTML = fruit;
  }firstFromArray()

  function orangeIndex(any) { 
    var orange = fruit.findIndex((item)=>{
          if(item==="orange"){
            // index = "item"  
            return item}
      })
      console.log(orange)
    return orange 
  }orangeIndex()
  function addNumber() {
    fruit.push("2");
    console.log(fruit)
    
    // document.getElementById("arraymethod.js").innerHTML = fruits;
  }addNumber()

  function getLength() {
    var str = "vegatables";
    var n = str.length;
    console.log(n)
    
    // document.getElementById("arraymethod.js").innerHTML = n;
  }getLength()

  function myFunction() {
    // var fruit = ["banana", "apple", "orange", "watermelon" ];
    // var vegatables = ["carrots", "tomato", "pepper", "lettuce"];
    var compact = fruit.concat(vegatables); 
    console.log(compact, compact.reverse())
    console.log(compact.toString())
    // document.getElementById("").innerHTML = food;

  }myFunction()



  
