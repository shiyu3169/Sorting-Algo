function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let el = arr[i];
    j = i;
    while (j > 0 && arr[j - 1] > el) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = el;
  }
  return arr;
}

console.log(insertionSort([1, 3, 2, 5, 3]));
