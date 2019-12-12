function selectionSort(arr) {
  let minIndex, temp;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; i < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
