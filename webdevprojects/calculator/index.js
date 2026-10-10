// // console.log("Hello world")

// // subb buttons ko select karo 
// // and jo bhi expression diya ho to wo execute kar do 
// // and jo result aaye wo input box me ayega 

// const dp = document.querySelector("#display")
// const btns = document.querySelector("#buttons")
// // const clear = document.getElementById("clear")
// // const add = document.getElementById("clear")
// // const multi = document.getElementById("clear")
// // const sub = document.getElementById("clear")
// // const ans = document.getElementById("clear")
// // const mod = document.getElementById("clear")

// const oper = document.getElementsByClassName("operator")
// const del = document.getElementById("delete")
// let ans = 0;


// function makingExpression(expression){
// if(dp.innerHTML==""&&(expression<0&&expression>9)){
//   console.log("nHi kar skte")
//   alert("You cant do this operation")
// }else{
// ans+=toString(expression);
// // dp.innerHTML = ans;
// // console.log("me click nhi ho rhaa")
// }
// }
// makingExpression(10);



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

