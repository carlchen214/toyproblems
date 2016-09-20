function PermutationStep(num) { 
    var least = num;
    var chars = num.toString().split('');
    var length = chars.length;

    function permute(places) {
        var temp = '';
        for (var i = length - 1 - places; i < length; i++) {
            temp += chars[i]
        }
        var arr = temp.split('');
        console.log(arr);
        temp = parseInt(temp); 

        console.log(temp);

        // if permutations of temp is greater than temp, then return that with the rest of the numbers. 

        // else recurse with an extra place



        // return permute(num, places + 1); 



    }

    permute(1);




    
  //   for (var i = length - 1; i >= 0; i--) {
  //       for (var j = i - 1; j >= 0; j--) {
  //           var temp = chars[i];
  //           chars[i] = chars[j];
  //           chars[j] = temp; 

  //           var newNum = parseInt(chars.join(''));

  //           if (newNum > num && newNum < least) {
  //               least = newNum;
  //           }

  //           chars[j] = chars[i]; 
  //           chars[i] = temp;
  //       }
  //   }

  // // code goes here  
  // return least; 
}

console.log(PermutationStep(11121));
// console.log(PermutationStep(41352), 'to be 41523');
