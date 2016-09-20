// You are given an array of n integers and a number k. Determine whether there is a pair
// of elements in the array that sums to exactly k. For example, given the array [1, 3, 7] and
// k = 8, the answer is “yes,” but given k = 6 the answer is “no.”


const twoSum = (arr, k) => {
  var storage = {};
  var result = false;
  arr.forEach(num => {
    num = parseInt(num);
    if (storage[k - num]) {
      storage[k - num] = num; 
      result = true;
    }
    if (!storage[num]) {
      storage[num] = num;
    }
  });
  
  return result;

}

// sort and walk inward
const twoSumSort = (arr, k) => {
  arr.sort((a, b) => a - b);
  var left = 0;
  var right = arr.length - 1;

  while (left < right) {
    var sum = arr[left] + arr[right];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return false; 


}

console.log(twoSum([1, 3, 7], 8), 'to be true');
console.log(twoSum([1, 3, 7], 6), 'to be false');
console.log(twoSum([1, 3, 7, 3], 6), 'to be true');
console.log(twoSum([], 1), 'to be false');
console.log(twoSum([1], 1), 'to be false');

console.log(twoSumSort([3, 2, 7], 8), 'to be false');
console.log(twoSumSort([1, 3, 7, 3], 6), 'to be true');
