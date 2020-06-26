/**
 * Creste a function that will return the datatype
 *  parameter
 */
const n = 12;

const practiceFunction = () => {};

console.log(typeof n);


 /**
  * Create a function that will take in a variable
  *  number of arguments and return their product
  */
 function product(a, b) {
     return a + b ;
 }

 const x = product(5, 10);
 console.log(x);

 /** OR */

 function defaultProduct(a = 1, b=2) {
     return a + b;
 }

 console.log(defaultProduct());
 console.log(defaultProduct(9));
 console.log(defaultProduct(9, 18));
 console.log(defaultProduct(undefined, 7));

 /**
  * Create a function that iterates over an integer 
  * array and returns their sum
  */
 const numbers = [12, 24, 36, 48];

 const sum = numbers.reduce((a, b) => {
     return a + b;
 })
  
 console.log(sum);

  /**
   * Create a function that, given an integer, can 
   * raise each didgie to the power of the overall
   * length and return whether the sum of the powers
   * is equal to the original integer
   */

const givenInteger = Math.pow(2, 1);
if(givenInteger == 2){
    console.log(true);
}else {
    console.log(false);
}

