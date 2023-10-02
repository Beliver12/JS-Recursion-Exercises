function TopDownMergeSort(a = [], b = [], n) {
  n = a.length;
  copyArray(a, 0, n, b);
  mergeSort(a, 0, n, b);
  const merged = [];
  return merged.concat(a);
}

function mergeSort(b = [], ibegin, iend, a = []) {
  if (Math.round(iend) - Math.round(ibegin) <= 1) {
    return;
  }
  const imiddle = (Math.round(iend) + Math.round(ibegin)) / 2;
  mergeSort(a, ibegin, imiddle, b);
  mergeSort(a, imiddle, iend, b);
  merge(b, ibegin, imiddle, iend, a);
}

function merge(b = [], ibegin, imiddle, iend, a = []) {
  ibegin = Math.round(ibegin);
  imiddle = Math.round(imiddle);
  iend = Math.round(iend);
  i = ibegin, j = imiddle;
  for (let k = ibegin; k < iend; k++) {
    if (i < imiddle && (j >= iend || a[i] <= a[j])) {
      b[k] = a[i];
      i += 1;
    } else {
      b[k] = a[j];
      j += 1;
    }
  }
}

function copyArray(a = [], ibegin, iend, b = []) {
  for (let k = ibegin; k < iend; k++) {
    b[k] = a[k];
  }
}

console.log(TopDownMergeSort([9, -3, 7, 5, 6, 4, 8, 2]));
