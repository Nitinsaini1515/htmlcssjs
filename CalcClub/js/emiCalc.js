const loanAmount = document.querySelector(".loanAmount")
const annualInterest = document.querySelector(".annualInterest")
const loanTensure = document.querySelector(".loanTensure")
const monthlyEmi = document.querySelector(".monthlyEmi")
const totalInterest = document.querySelector(".totalInterest")
const totalPayment = document.querySelector(".totalPayment")
const resultButton = document.querySelector(".resultButton")


resultButton.addEventListener("click",()=>{
  const amount = loanAmount.value
  const interest = annualInterest.value
  const time = loanTensure.value
  if(amount==""||interest==""||time==""){
    alert("Please Enter some value")
  }
  const P =  amount
  const R = interest/12/100
  const N = time*12;
  const emi = R===0?P/N:(P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1)
  monthlyEmi.value = emi
  totalPayment.value = emi*N 
  totalInterest.value = (emi*N)-P


})