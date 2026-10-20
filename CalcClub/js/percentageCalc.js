// basic percentage 
const numberOne = document.querySelector(".numberOne")
const numberTwo = document.querySelector(".numberTwo")
const resultOne = document.querySelector(".resultOne")
const ansBoxOne  = document.querySelector("#ansBoxOne")

let exp = "";

function calcOne(nuOne,nuTwo){
return mainExp = Number((nuOne*nuTwo)/100);
}

resultOne.addEventListener("click",()=>{
 if(numberOne.value==""||numberTwo.value==""){
  alert("Value is required")
 }
  exp+=String(calcOne(numberOne.value,numberTwo.value));
  ansBoxOne.value = Number(exp).toFixed(2);
  exp = ""
})


// Part Percentage

const numberOnePart = document.querySelector(".numberOnePart")
const numberTwoPart = document.querySelector(".numberTwoPart")
const resultOnePart = document.querySelector(".resultOnePart")
const ansBoxOnePart = document.querySelector("#ansBoxOnePart")

function caclPart(numOne,numTwo){
  // console.log(numOne)
  // console.log(numTwo)
  return (numOne/numTwo)*100
}


resultOnePart.addEventListener("click",()=>{
// console.log(numberOne, numberTwo, ansBoxOne);

  if(numberOnePart.value==""||numberTwoPart.value==""){
    alert("Please Enter Some Valid Value")
    return;
  }
  let expOne  = Number(caclPart(numberOnePart.value,numberTwoPart.value))
  ansBoxOnePart.value = expOne.toFixed(2)

})



const numberOneIncDec = document.querySelector(".numberOneIncDec")
const numberTwoIncDec = document.querySelector(".numberTwoIncDec")
const resultIncDec = document.querySelector(".resultIncDec")
const ansBoxIncDec = document.querySelector("#ansBoxIncDec")


function incDecCalc(numOne,numTwo) {
  return (Math.abs(numOne-numTwo)/numOne)*100
}


resultIncDec.addEventListener("click",()=>{
 if(numberOneIncDec.value==""||numberTwoIncDec.value==""){
  alert("Value is required")
  return
 }
 let  expIncDec =Number(incDecCalc(numberOneIncDec.value,numberTwoIncDec.value));
  ansBoxIncDec.value = expIncDec.toFixed(2);
})



const numberOneDiff = document.querySelector(".numberOneDiff")
const numberTwoDiff = document.querySelector(".numberTwoDiff")
const resultDiff = document.querySelector(".resultDiff")
const ansBoxDiff = document.querySelector("#ansBoxDiff")


function diffCalc(numOne,numTwo) {
  return (Math.abs(numOne-numTwo)/((numOne+numTwo)/2))*100;
}


resultDiff.addEventListener("click",()=>{
 if(numberOneDiff.value==""||numberTwoDiff.value==""){
  alert("Value is required")
  return
 }
 const numOne = Number(numberOneDiff.value);
  const numTwo = Number(numberTwoDiff.value);

  if (numOne + numTwo === 0) {
    alert("Both values cannot have an average of zero")
    return;
  }

  const expIncDec = diffCalc(numOne, numTwo);
//  let  expIncDec =String(diffCalc(numberOneDiff.value,numberTwoDiff.value));
  ansBoxDiff.value = Number(expIncDec).toFixed(2);
})