//find if a number is prime
//What is the largest prime factor of the number n?

exports.largestPrimeFactor = function(n){
  var factors = []; //array for collecting factors
  var divider = 2; //If divider goes equally into n, then reassign n to the result of that division

  while (n > 1){
    while((n % divider)=== 0){ //while the number divides equally into the divider
      factors.push(divider);
      n /= divider;
  }
  divider += 1;
  //console.log(n);
  //console.log(factors);
  //console.log(divider);

  }
  console.log(factors[factors.length - 1]);
  return factors[factors.length - 1]; //returning the last factor from the array

};