export default async function InsertionSort({ setDisable, swap, delayFunc }) {
  const InsertionSortFunc = async (arr) => {
    arr[0].style.background = "green";
    for (let i = 1; i < arr.length; i++) {
      let idx = i - 1;
      let curr = arr[i].style.height;
      arr[i].style.background = "blue";
      await delayFunc();
      while (idx >= 0 && parseInt(curr) < parseInt(arr[idx].style.height)) {
        arr[idx].style.background = "blue";
        arr[idx + 1].style.height = arr[idx].style.height;
        idx--;
        await delayFunc();
        for (let k = i; k >= 0; k--) {
          arr[k].style.background = "green";
        }
      }
      arr[idx + 1].style.height = curr;
      arr[i].style.background = "green";
    }
  };
  setDisable(true);
  let arr = document.querySelectorAll(".bar");
  await InsertionSortFunc(arr);
  setDisable(false);
}
