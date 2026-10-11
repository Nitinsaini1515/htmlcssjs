

const dp = document.querySelector("#display");
const btns = document.querySelectorAll("button[data-value]");
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");
const equal = document.querySelector("#equal");

let expression = "";


btns.forEach((btn)=>{
btn.addEventListener("click",()=>{
  expression+=btn.dataset.value;
  dp.value = expression;
})
})


clear.addEventListener("click",()=>{
  expression ="";
  dp.value = ""
})

equal.addEventListener("click",()=>{
try{  expression = String(eval(expression))
  dp.value = expression;
  expression = "";}
  catch{
    alert("There is an error")
    dp.value = "0"
    expression = "";
  }
})
// 123
del.addEventListener("click",()=>{
  let len = expression.length;
  let val = expression.slice(0,len-1);
  expression = val
  dp.value = expression;
})

