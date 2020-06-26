/**
 * Creste a function that will return the datatype
 *  parameter
 */
function datatype(n){
    return typeof n;
} 
console.log(datatype(25));


 /**
  * Create a function that will take in a variable
  *  number of arguments and return their product
  */

function getProduct(){
    let sumOf = 1;
    for(let i = 0; i < arguments.length; i++){
        sumOf *= arguments[i];
    }
    return sumOf;
}
console.log(getProduct(8, 9));
console.log(getProduct(8, 9, 11));



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

