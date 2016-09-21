
/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function (array, target) {
  var search = (min, max) => {
    var mid = Math.floor((max - min) / 2) + min;

    if (target === array[mid]) {
      return mid;
    } else if (min === array.length - 1 || max === 0) {
      return null;
    } else if (target > array[mid]) {
      return search(mid, max);
    } else if (target < array[mid]) {
      return search(min, mid);
    } 
  }

  return search(0, array.length);
};




var index = binarySearch([1, 2, 3, 4, 5], 6);
console.log(index);