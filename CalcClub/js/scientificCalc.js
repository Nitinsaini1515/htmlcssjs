const inputBox = document.querySelector(".inputBox");
const buttons = document.querySelectorAll("button[data-value]");

let exp = "";

function valEqual(exp) {
  return eval(exp);
}

function valClear() {
  exp = "";
  inputBox.value = "";
}

function valDelete(mainval) {
  let len = mainval.length;
  if (len == 0) {
    alert("You cannot use del without value");
    return;
  }
  let mainans = exp.substring()(0, len - 1);
  return mainans;
}

buttons.forEach((btns) => {
  btns.addEventListener("click", () => {
    const val = btns.dataset.value;
    if (val == "equal") {
      let ans = String(valEqual(exp));
      inputBox.value = ans;
    } else if (val == "clear") {
      valClear();
    } else if (val == "delete") {
      let mainval = exp;
      exp = valDelete(mainval);
      inputBox.value = exp;
    } else if(hello) {
    }
  });
});
