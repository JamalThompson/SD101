

 var miles= 10;
 var kilometers = 1.609344;


console.log(miles +" is equal to "+ milesToKilometers(miles));

miles = 42;
console.log(miles +" is equal to "+ milesToKilometers(miles));

miles= 78;
console.log(miles +" is equal to "+ milesToKilometers(miles));


 function milesToKilometers(miles) {
   return miles * kilometers;

 }
