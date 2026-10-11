const btns = document.querySelectorAll("button[data-value]")
const del = document.getElementById("delete")
const clear = document.getElementById("clear")
const ans = document.getElementById("equal")
const disp = document.getElementById("display")
const sci = document.querySelectorAll(".scientific")
let expression  =""


sci.forEach((scibtn) => {
  scibtn.addEventListener("click",()=>{
      expression+=btns.dataset.value
      dp.value = expression
  })
});


btns.forEach((btn)=>{
btn.addEventListener("click",()=>{
  expression+=String(btn.dataset.value)
  disp.value = expression
})
})



del.addEventListener("click",()=>{
  let len = expression.length
  let val = expression.slice(0,len-1)
  expression = val
  disp.value = val

})

clear.addEventListener("click",()=>{
expression = ""
disp.value = ""
})

ans.addEventListener("click",()=>{
try {
  
  expression= String(eval(expression))
disp.value = expression
expression = ""
} catch (error) {
  alert("Error occur")
  disp.value = ""
  expression = ""
}
})

// agar selected hai koi scientific or fir dell kre to purani state pe jana hai 
// handling sin,cos,tan,underroot, x(square), pi, x*y , e, 1/x,abs
