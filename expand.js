// seed value and build it up

var expand = function(cb, seed) {
  var results = [];

  var inner = function(value) {
    var temp = cb(value); 
    // null
    if (temp === null) {
      return results; 
    } else {
      results.push(temp[1]);
      return inner(temp[0]);
    }
    // [next seed value, value to be pushed to results]
  }

  return inner(seed); 
}

var pascal = function(n) {
  var cb = function(seed) {
    if (seed.counter === n) {
      return null;
    } else {
      var obj = {
        counter: seed.counter + 1
      }

      // new row's length is going to be length of obj.counter + 1
      var build = function(n) {
        
      }

      // using an inner expand
      obj.row = expand(build, 0) //seed)
        // null case, when index is greater than row length + 1
        // we have current row already from seed
        // creating an array of single elements, need to know what index its at, to reference prev row



      return [obj, seed.row]

    }

  }

  return expand(cb, {row: [1], counter: 0})
}

// given n, use expand to create the fibonnaci sequence up to n
// n being an integer. 
// return array of fibonnaci sequence.

// var fibonnaci = function(n) {
  
//   var cb = function(seed) {
//     if (seed.counter === n) {
//       return null; 
//     } else {
//       var obj = {
//         counter: seed.counter + 1,
//         prev: seed.curr,
//         curr: seed.curr + seed.prev
//       }
//       return [obj, seed.curr]
//     }
//   }

//   return expand(cb, { counter: 0, prev: 0, curr: 1}); 
// }

// console.log(fibonnaci(5)) // 1, 1, 2, 3, 5

// var result = expand(function(num) {
//   if (num > 5) {
//     return null;
//   } else {
//     return [num + 1, num.toString()]
//   }
// }, 0);

// console.log(result, 'expects to be [0, 1, 2, 3, 4, 5]');

