const orignalPriceInput = document.querySelector(".orignalPriceInput");
const discountPer = document.querySelector(".discountPer");
const calc = document.querySelector(".calc");
const clear = document.querySelector(".clear");
const copy = document.querySelector(".copy");
const finalAmount = document.querySelector(".finalAmount");
const discountedAmount = document.querySelector(".discountedAmount");

function calcDisc(orinal, discPer) {
  return (orinal * discPer) / 100;
}

function finalPrice(discprice, orignal) {
  return orignal - discprice;
}

calc.addEventListener("click", () => {
  if ((orignalPriceInput.value == "", discountPer.value == "")) {
    alert("Please Enter some value");
    return;
  }
  const discPrice = calcDisc(orignalPriceInput.value, discountPer.value);
  if ((discPrice == ""|| orignalPriceInput.value == "")) {
    alert("Please Enter some value");
    return;
  }
  const fPrice = finalPrice(discPrice, orignalPriceInput.value);
  discountedAmount.value = String(discPrice);
  finalAmount.value = String(fPrice);
});

clear.addEventListener("click", () => {
   orignalPriceInput.value = "";
  discountPer.value = "";
  discountedAmount.value = "";
  finalAmount.value = "";
});
copy.addEventListener("click", async () => {
  await navigator.clipboard.writeText(finalAmount.value);
  alert("Value copied successfully");
});
