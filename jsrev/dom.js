// const elem  = document.getElementById("btn")
// document.getElementsByClassName('hehe')
// document.getElementById('btn').setAttribute('class','test')
// document.getElementsByClassName("hehe")[0].setAttribute("id", "mehudiv");
// document.getElementById("btn").getAttribute("id");.


// const elem = document.getElementById("btn")
// elem.style.background = "green"
// elem.style.padding = "20px"


// console.log(elem.innerText)->hidden wali chijo ko show nahi karega 
// console.log(elem.textContent) ->hidden wali chijo ko bhi show karega
// console.log(elem.innerHTML)



// const elem = document.querySelector("button")
// elem.style.background = "Red"

// const elem = document.getElementsByClassName("hehe")
// console.log(elem)

// const arr = Array.from(elem);
// console.log(arr);




// creating new element in dom
// const parent = document.querySelector('div')
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[0].innerHTML)


// const dayOne = document.querySelector('div')
// console.log(dayOne)
// console.log(dayOne.children)
// console.log(dayOne.parentElement)
// console.log(dayOne.nextSibling)
// console.log(dayOne.nextElementSibling)

// console.log(dayOne.childNodes)


/* Create Element*/
// const parent = document.querySelector('div')
// const elem = document.createElement('div')
// elem.setAttribute('id','newElem')
// elem.setAttribute('class','classhuji')
// elem.innerText = 'chai aur code'
// parent.appendChild(elem)



// edit and remove element in dom 


// const elem = document.querySelector('ul')
// console.log(elem)

// function myfunc(textAdd){
// const newElem = document.createElement('li');
// newElem.innerText = `${textAdd}`
// elem.appendChild(newElem)
// }
// myfunc("you")

// const elem = document.querySelector('ul')
// // console.log(elem)
// function myfunc(textRepl){
// const newOne = document.createElement('li')
// newOne.innerText =`${textRepl}`
// elem.replaceChild(newOne,elem.children[0])
// }
// myfunc("changed hu ji")


// const elem = document.querySelector('li:nth-Child(2)')
// elem.remove()