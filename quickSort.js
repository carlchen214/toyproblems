const quickSort = (arr) => {
  var length = arr.length;
  if (length <= 1) {
    return arr;
  }

  var pivotIndex = length - 1;
  var pivot = arr[pivotIndex];

  var i = 0;
  while (i < pivotIndex) {
    if (arr[i] >= pivot) {
      arr.push(arr.splice(i, 1)[0]);
      pivotIndex--;
    } else {
      i++;
    }
  }


  var left = quickSort(arr.slice(0, pivotIndex));
  var right = quickSort(arr.slice(pivotIndex + 1));
  return left.concat([pivot]).concat(right);
}

// var sort = quickSort([2, 1]);
// console.log(sort);
var sorted = quickSort([7, 5, 2, 3, 4, 4, 0, 9, 6, 4, 1, 2, 8, 5]);
console.log(sorted);