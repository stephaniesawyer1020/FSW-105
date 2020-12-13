function capitalizeAndLowerCase(
    javaScript
){
return javaScript.toUpperCase() +javaScript.toLowerCase() 
 
}
console.log(capitalizeAndLowerCase("javaScript")) // => "JAVASCRIPTjavascript"

function findMiddleIndex(
    javaScript
){
return Math.floor(javaScript.length/2)
 
}
console.log(findMiddleIndex("javaScript")) // => "JAVASCRIPTjavascript"


function returnFirstHalf(
    javaScript
){
return javaScript.slice(0,Math.floor(javaScript.length/2))
Math.floor(javaScript.length/2)
 
}
console.log(returnFirstHalf("javaScript")) // => "JAVASCRIPTjavascript"


function capitalizeAndLowerCase2(
    javaScript
){
return javaScript.slice(0,Math.floor(javaScript.length/2)).toUpperCase()+javaScript.slice(Math.floor(javaScript.length/2)).toLowerCase()
Math.floor(javaScript.length/2)
 
}
console.log(capitalizeAndLowerCase2("javaScript")) // => "JAVASCRIPTjavascript"
