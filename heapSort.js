function heapSort(array) {
  buildMaxHeap(array);

  let lastElement = array.length - 1;

  while (lastElement > 0) {
    swap(array, 0, lastElement);
    heapify(array, 0, lastElement--);
  }
  return array;
}

function buildMaxHeap(array) {
  let i = Math.floor(array.length / 2 - 1);
  while (i >= 0) {
    heapify(array, i--, array.length);
  }
}

function heapify(heap, i, max) {
  let index, leftChild, rightChild;
  while (i < max) {
    index = i;
    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;
    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }
    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }
    if (index == i) {
      return;
    }
    swap(heap, i, index);
    i = index;
  }
}
function swap(array, i, j) {
  var tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}
