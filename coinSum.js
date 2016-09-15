
var makeChange = function(total){
  var count = 0;
  var options = [1, 5, 10, 25];

  var recur = function(tot, j) {
    if (tot === total) {
      count++;
      return;
    } else if( tot > total) {
      return;
    } else {
      for (var i = j; i < options.length; i++) {
        tot += options[i];
        recur(tot, i);
        tot -= options[i];
      }
    }
  }
  recur(0, 0)
  return count;
};

console.log(makeChange(5));