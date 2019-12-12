function bubbleSort(arr) {
  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

bubbleSort([7, 5, 2, 4, 3, 9]);
// len = 6, i=5, j=1, arr[j-1] = arr[0] = 7, arr[j] = arr[1] = 5
