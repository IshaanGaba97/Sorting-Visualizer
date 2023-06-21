export default async function QuickSort({ setDisable, swap, delayFunc }) {
  const QuicSortHeplerFunc = async (arr, left, right) => {
    let pivotElement = parseInt(arr[right].style.height);
    arr[right].style.background = "red";
    let k = left - 1;
    for (let j = left; j < right; j++) {
      arr[j].style.background = "orange";
      await delayFunc();
      if (parseInt(arr[j].style.height) <= pivotElement) {
        arr[k + 1].style.background = "pink";
        if (k + 1 !== j) {
          arr[j].style.background = "pink";
        }
        swap(arr[k + 1], arr[j]);
        k += 1;
      } else {
        arr[j].style.background = "cyan";
      }
      await delayFunc();
    }
    swap(arr[k + 1], arr[right]);
    for (let i = left; i < arr.length; i++) {
      if (arr[i].style.background !== "green") {
        arr[i].style.background = "purple";
      }
    }
    return k + 1;
  };

  const QuickSortFunc = async (arr, start, end) => {
    if (start < end) {
      let pivoteIndex = await QuicSortHeplerFunc(arr, start, end);
      arr[pivoteIndex].style.background = "green";
      await QuickSortFunc(arr, start, pivoteIndex - 1);
      await QuickSortFunc(arr, pivoteIndex + 1, end);
    } else {
      if (start >= 0 && end >= 0 && start < arr.length && end < arr.length) {
        arr[start].style.background = "green";
        arr[end].style.background = "green";
      }
    }
  };
  setDisable(true);
  let arr = document.querySelectorAll(".bar");
  await QuickSortFunc(arr, 0, arr.length - 1);
  setDisable(false);
}
