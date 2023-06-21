export default async function BubbleSort({ setDisable, swap, delayFunc }) {
  const BubbleSortFunc = async (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        arr[j].style.background = "#b17aac";
        arr[j + 1].style.background = "#b17aac";
        if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
          swap(arr[j + 1], arr[j]);
        }
        await delayFunc();
        arr[j].style.background = "purple";
        arr[j + 1].style.background = "purple";
      }
      arr[arr.length - i - 1].style.background = "red";
    }
    arr[0].style.background = "red";
  };
  setDisable(true);
  let arr = document.querySelectorAll(".bar");
  await BubbleSortFunc(arr);
  setDisable(false);
}
