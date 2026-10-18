const resultButton = document.querySelector(".resultButton");
const resultBox = document.querySelector(".resultBox");
const optionsOne = document.querySelector(".optionsOne");
const inputBoxOne = document.querySelector(".inputBoxOne");
const optionsTwo = document.querySelector(".optionsTwo");


// using object approach for this 
// first convert the value into the meters hen convert meters into the ans 


const ansObject ={
  Meter:1,
  Millimeter:0.001,
  Kilometer:1000,
  Centimeter:0.01,
  Feet:0.3048,
  Inches: 0.0254,
  Miles: 1609.344
}

resultButton.addEventListener("click",()=>{
if(inputBoxOne.value==""){
  alert("Please enter some value")
}
const val = inputBoxOne.value
const selectedOne = optionsOne.value
const selectedTwo = optionsTwo.value
const meter = val*ansObject[selectedOne]
const ans = meter/ansObject[selectedTwo]
resultBox.value = ans
})


const weightInput = document.querySelector(".weightInput")
const weightOptionsOne = document.querySelector(".weightOptionsOne")
const weightOptionsTwo = document.querySelector(".weightOptionsTwo")
const weightResultBox = document.querySelector(".weightResultBox")
const weightResultButton = document.querySelector(".weightResultButton")
// ek unit dusre ke kitne equal hai matalv 1 km 1000 meter equal hai

const weightObject ={
  Kilogram:1,
  Gram:0.001,
  Milligram:0.000001,
  Pound: 0.45359237,
  Ounce: 0.028349523125
}


weightResultButton.addEventListener("click",()=>{
if(weightInput.value==""){
  alert("Please enter some value")
}
const val = weightInput.value
const selectedOne = weightOptionsOne.value
const selectedTwo = weightOptionsTwo.value
const kg = val*ansObject[selectedOne]
const ans = kg/ansObject[selectedTwo]
weightResultBox.value = ans
})


const areaInput = document.querySelector(".areaInput")
const areaOptionsOne = document.querySelector(".areaOptionsOne")
const areaOptionsTwo = document.querySelector(".areaOptionsTwo")
const areaResultButton = document.querySelector(".areaResultButton")
const areaResultBox = document.querySelector(".areaResultBox")

const areaObject = {
  SquareMeter: 1,
  SquareKilometer: 1000000,
  SquareCentimeter: 0.0001,
  SquareMillimeter: 0.000001,
  SquareFoot: 0.09290304,
  Acre: 4046.8564224,
  Hectare: 10000
};

areaResultButton.addEventListener("click",()=>{
if(areaInput.value==""){
  alert("Please enter some value")
}
const val = areaInput.value
const selectedOne = areaOptionsOne.value
const selectedTwo = areaOptionsTwo.value
const squareMeter = val*ansObject[selectedOne]
const ans = squareMeter/ansObject[selectedTwo]
areaResultBox.value = ans
})






