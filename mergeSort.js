function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) return arr;
  let mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [],
    lLen = left.length,
    rLen = right.length;

  let l = 0,
    r = 0;

  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  console.log(left.slice(l), right.slice(r));
  return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort([1, 3, 2, 10, 4, 6, 5, 5, 4]));
