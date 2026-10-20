const resultButton = document.querySelector(".resultButton");
const resultBox = document.querySelector(".resultBox");
const optionOne = document.querySelector(".optionsOne");
const inputBoxOne = document.querySelector(".inputBoxOne");
const optionsTwo = document.querySelector(".optionsTwo");

const dataObject = {
  Byte: 1,
  KB: 1024,
  MB: 1048576,
  GB: 1073741824,
  TB: 1099511627776,
};

resultButton.addEventListener("click", () => {
  const value = inputBoxOne.value;
  if (value <= 0) {
    alert("Please enter some value");
    return;
  }
  console.log(value);
  const opOne = optionOne.value;
  console.log(opOne);
  const opTwo = optionsTwo.value;
  console.log(opTwo);
  if (opOne == "" || opTwo == "") {
    alert("Please select Something");
    return;
  }
  const valOne = value * dataObject[opOne];
  console.log(valOne);
  const valTwo = valOne / dataObject[opTwo];
  console.log(valTwo);
  resultBox.value = Number(valTwo);
});
