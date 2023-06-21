export default async function SelectionSort({ setDisable, swap, delayFunc }) {
  const SelectionSortFunc = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        arr[i].style.background = "#b17aac";
        arr[j].style.background = "#b17aac";
        if (parseInt(arr[i].style.height) > parseInt(arr[j].style.height)) {
          swap(arr[i], arr[j]);
        }
        await delayFunc();
        arr[j].style.background = "purple";
        arr[i].style.background = "purple";
      }
      arr[i].style.background = "red";
    }
    // arr[arr.length - 1].style.background = "red";
  };
  setDisable(true);
  let arr = document.querySelectorAll(".bar");
  await SelectionSortFunc(arr);
  setDisable(false);
}
