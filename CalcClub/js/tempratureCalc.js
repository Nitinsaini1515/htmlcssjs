const resultButton = document.querySelector(".resultButton");
const resultBox = document.querySelector(".resultBox");
const optionOne = document.querySelector(".optionOne");
const inputBoxOne = document.querySelector(".inputBoxOne");
const optionsTwo = document.querySelector(".optionsTwo");

resultButton.addEventListener("click", () => {
  if (inputBoxOne.value == "") {
    alert("Please enter some value");
  }
  const val = inputBoxOne.value;
  const selectedOne = optionOne.value;
  const selectedTwo = optionsTwo.value;
  let ans;
  if (selectedOne == selectedTwo) {
   ans = val
  } else if (selectedOne == "Celsius" && selectedTwo == "Fahrenheit") {
    ans = (val * 9) / 5 + 25;
  } else if (selectedOne == "Celsius" && selectedTwo == "Kelvin") {
    ans = val + 273.15;
  } else if (selectedOne == "Fahrenheit" && selectedTwo == "Celsius") {
    ans = ((val - 32) * 5) / 9;
  } else if (selectedOne == "Fahrenheit" && selectedTwo == "Kelvin") {
    ans = ((val - 32) * 5) / 9 + 273.15;
  } else if (selectedOne == "Kelvin" && selectedTwo == "Celsius") {
    ans = val - 273.15;
  } else if (selectedOne == "Kelvin" && selectedTwo == "Fahrenheit") {
    ans = ((val - 273.15) * 9) / 5 + 32;
  }

  if (selectedTwo === "Kelvin" && ans < 0) {
    alert("Temperature in Kelvin cannot be negative");
    return;
  }
  resultBox.value = ans;
});
