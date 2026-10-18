const inputBox = document.getElementById("ansBox")
const buttons = document.querySelectorAll("button[data-value]")
const clear = document.querySelector(".clear")
const equal = document.querySelector(".equal")
const del = document.querySelector(".delete")


let exp = ""


del.addEventListener("click",()=>{
  const len = exp.length
  if(len==1||len==0){
    exp ="0"
    inputBox.value = exp
  }else{
    const mainexp =  exp.substring(0,len-1)
    exp = mainexp
    inputBox.value = exp
  }
})

clear.addEventListener("click",()=>{
exp ="";
inputBox.value = exp;
})

buttons.forEach((btns)=>{
  btns.addEventListener("click",()=>{
    exp+=btns.dataset.value
    inputBox.value = exp;
  })
})


equal.addEventListener("click",()=>{
  try {
    if(exp.length==0){
      alert("Please make a Proper expression")
    }
        exp = String(eval(exp))
    inputBox.value = exp;
    exp= "";
  } catch (error){
    console.log(exp)
    console.log(error)
    alert("There is an error")
    exp = "";
    inputBox.value  = ""
  }
})

document.addEventListener("keydown",(e)=>{
  let key = e.key

  if("0123456789+-*/.".includes(key)){
    exp+=key
    inputBox.value = exp
  }
  else if(key== "Enter"){
   equal.click() 
  }
  else if(key=="Backspace"){
    del.click()
  }
  else if(key=="Escape"){
    clear.click()
  }

})

// jab normal click karte hia equal to pe tab undefined aata hai wo handle karna hai 


// # CalcHub Project — Learning Summary

// ## 1. DOM Manipulation
// - Learned how to select HTML elements using `document.getElementById()` and `document.querySelector()`.
// - Learned how to select multiple elements using `document.querySelectorAll()`.
// - Understood the difference between `.value`, `.innerHTML`, and `.textContent`.
// - Learned that `.value` is used to read or update the value of input elements.

// ## 2. JavaScript Variables
// - Learned the difference between `let` and `const`.
// - Understood that `let` allows reassignment, whereas `const` does not allow reassignment.
// - Used a variable named `exp` to store the calculator expression.

// ## 3. Event Handling
// - Learned how to use `addEventListener()` to handle button clicks.
// - Used the `click` event to perform calculator operations.
// - Learned how to use `.click()` to programmatically trigger an element's click event.
// - Understood how to use `forEach()` to attach event listeners to multiple buttons.

// ## 4. Working with Data Attributes
// - Learned how to access custom HTML data attributes using `dataset`.
// - Used `button.dataset.value` to retrieve numbers and operators from calculator buttons.
// - Understood the difference between a NodeList (`buttons`) and an individual button (`btns`).

// ## 5. String Manipulation
// - Used the `length` property to find the length of an expression.
// - Learned how to use `substring()` to remove the last character.
// - Used `String()` to convert calculation results into strings.
// - Learned how to use `replace()` to replace multiplication symbols with JavaScript-compatible operators.

// ## 6. Calculator Logic
// - Created functionality for entering numbers and operators.
// - Implemented the Clear button to reset the expression.
// - Implemented the Delete button to remove the last character.
// - Implemented the Equal button to evaluate the expression.
// - Learned how to use `try...catch` to handle calculation errors.
// - Understood that JavaScript uses `*` for multiplication and `/` for division.

// ## 7. Keyboard Events
// - Learned how to use the `keydown` event to detect keyboard input.
// - Learned how to access the pressed key using `event.key`.
// - Implemented keyboard support for numbers and mathematical operators.
// - Used Enter to calculate, Backspace to delete, and Escape to clear the expression.
// - Understood the difference between `keydown`, `keyup`, and `keypress`. The `keypress` event is deprecated.

// ## 8. Debugging
// - Learned to read errors in the browser console.
// - Understood why accessing `.value` on a `null` element causes an error.
// - Learned to check HTML IDs and JavaScript selectors.
// - Identified errors caused by incorrect variable references and invalid expressions.
// - Learned to use `console.log()` to inspect variables and error objects.

// ## 9. Important Concepts to Remember
// - HTML IDs must match the selectors used in JavaScript.
// - Input elements use `.value` to access their current values.
// - Every button in a collection must be handled individually.
// - The Equal button should not append `=` to the mathematical expression.
// - The `eval()` function can evaluate JavaScript expressions, but it should be avoided with untrusted user input because it can execute arbitrary code.

// ## Project Progress
// I have started building a basic calculator using HTML, CSS, and JavaScript. Through this project, I am learning DOM manipulation, event handling, string operations, keyboard events, calculator logic, and debugging. My next goal is to complete the calculator, test edge cases, and improve the user interface.
