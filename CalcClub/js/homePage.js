const navCalc = document.querySelector(".navCalc")
const navAbout = document.querySelector(".navAbout")
const calculatorsDiv = document.querySelector(".calculatorsDiv")
const aboutSection = document.querySelector(".aboutSection")
const expCalc = document.querySelector(".expCalc")
const currCalc = document.querySelector(".currCalc")
const frontPage = document.querySelector(".frontPage")
const homeClass = document.querySelector(".homeClass")
navCalc.addEventListener("click",()=>{
  calculatorsDiv.scrollIntoView({
    behavior:"smooth",
    block:"start"
  })
})
navAbout.addEventListener("click",()=>{
  aboutSection.scrollIntoView({
    behavior:"smooth",
    block:"start"
  })
})

expCalc.addEventListener("click",()=>{
  calculatorsDiv.scrollIntoView({
    behavior:"smooth",
    block:"start"
  })
})

currCalc.addEventListener("click",()=>{
  window.location.href ="../pages/currencyConverter.html"
})

homeClass.addEventListener("click",()=>{
  frontPage.scrollIntoView({
    behavior:"smooth",
    block:"start" 
  })
})