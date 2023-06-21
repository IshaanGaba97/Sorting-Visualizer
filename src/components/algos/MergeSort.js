export default async function MergeSort({ setDisable, swap, delayFunc }) {
  const MergeSortHelperFunc = async (arr, start, mid, end) => {
    let s1 = mid - start + 1;
    let s2 = end - mid;
    let leftArr = new Array(s1).fill(0);
    let rightArr = new Array(s2).fill(0);
    for (let i = 0; i < s1; i++) {
      arr[start + i].style.background = "orange";
      leftArr[i] = arr[start + i].style.height;
      await delayFunc();
    }
    for (let i = 0; i < s2; i++) {
      arr[mid + i + 1].style.background = "cyan";
      rightArr[i] = arr[mid + i + 1].style.height;
      await delayFunc();
    }
    await delayFunc();
    let i = 0;
    let j = 0;
    let k = start;
    while (i < s1 && j < s2) {
      if (parseInt(leftArr[i]) <= parseInt(rightArr[j])) {
        if (s1 + s2 === arr.length) {
          arr[k].style.background = "red";
        } else {
          arr[k].style.background = "yellow";
        }
        arr[k].style.height = leftArr[i];
        i += 1;
      } else {
        if (s1 + s2 === arr.length) {
          arr[k].style.background = "red";
        } else {
          arr[k].style.background = "yellow";
        }
        arr[k].style.height = rightArr[j];
        j += 1;
      }
      k += 1;
      await delayFunc();
    }
    while (i < s1) {
      if (s1 + s2 === arr.length) {
        arr[k].style.background = "red";
      } else {
        arr[k].style.background = "yellow";
      }
      arr[k].style.height = leftArr[i];
      i += 1;
      k += 1;
      await delayFunc();
    }
    while (j < s2) {
      if (s1 + s2 === arr.length) {
        arr[k].style.background = "red";
      } else {
        arr[k].style.background = "yellow";
      }
      arr[k].style.height = rightArr[i];
      j += 1;
      k += 1;
      await delayFunc();
    }
  };

  const MergeSortFunc = async (arr, start, end) => {
    if (start >= end) {
      return;
    }
    let mid = Math.floor((start + end) / 2);
    await MergeSortFunc(arr, start, mid);
    await MergeSortFunc(arr, mid + 1, end);
    await MergeSortHelperFunc(arr, start, mid, end);
  };
  setDisable(true);
  let arr = document.querySelectorAll(".bar");
  await MergeSortFunc(arr, 0, arr.length - 1);
  setDisable(false);
}
