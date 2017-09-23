var radius = 10;

//display area
console.log("The area of a circle with radius = "+radius+" is "+calcArea(radius).toFixed(2));

function calcArea(radius){
  return  Math.PI * Math.pow(radius,2);
}

function printBorder(){
  console.log("------------");
}
