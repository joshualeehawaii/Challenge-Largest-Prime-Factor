exports.largestPrimeFactor = function(n){
  var factors = [];
  var divider = 2;

  while (n > 1){
    while((n % divider)=== 0){
      factors.push(divider);
      n /= divider;
}
divider += 1;

  }
  return factors[factors.length - 1];
};