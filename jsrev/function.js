// function myfunc(){
//   console.log("Me function hu ")
// }
// let val = myfunc()->me hu functioin
// console.log(val)>undefined


// function myfunc(){
// console.log("me firse call hogya")
//   return 3;
// }
// console.log(myfunc())
// let heh = myfunc();
// console.log(heh)



// function myfunc(a,b){
//   return a+b;

// }
// console.log(myfunc(1,"20"));


// const func = function myfunc(a,b){
//   return a+b;
// }
// console.log(func(10,20));

// function with object and array

// function myfunc(...num){
// return num
// }

// console.log(myfunc(10,20,30,40));


// const obj = {
// Name :"Nitin saini",
// price :123456,
// }

// myfunc(obj)
// function myfunc(obj){
//   console.log(`username is ${obj.Name}`)
//   console.log(`Price is ${obj.price}`)
// }
// myfunc(obj)


// scope level and mini hoisting 

// function myfunc(){
//   let username = "Nitin sain"
//   if(username){
//     let age = "12"
//     console.log("uername is ",username,"Age is ",age)
//   }
//   console.log(age)
// }
// myfunc()

// console.log(myfunc());
// console.log(adding());
// const adding = function myfunc(){
//   return 5;
// }
// function myfunc(){
//   return 5;
// }



// this and arrwo function


// const obj1 ={
//   name:"Nitin saini",
//   func : function myfunc(){
// console.log(name);
// const obj2={
//   name : "harsh singh ",
//   func2 : function anto(){
//     console.log(this.name)
//   }
// }  
// }
// }

// console.log(obj1.func().obj2)


// const obj ={
//   name:"Nitin saini",
//   fun:function hehe(name){
//     console.log(name)
//   },
//   obj1:{
//     name :"Harsh",
//     myfun :function myfunc(){
//       console.log(this.name);
//     }
//   }
// }
// console.log(obj.fun("Harsh"))
// console.log(obj.obj1.myfun())
// const func = ()=>{console.log(this)}


// arrow function



// const func = ()=>{
// console.log(this)
//   console.log("Hey how are you")
// }
// func()

// const obj ={
//   name:"Nitin saini",
//   func : ()=>{
//     console.log(this)
//   },
//   functwo: function myfunc(){
//     console.log(this)
//   }
// }

// obj.func()
// obj.functwo()


// const obj ={
//   name:"Nitin saini",
//   func:function myfunc(){
//     const func = ()=>{
//       console.log(this.name)
//     }
//     func();
//   }
// }
// obj.func()

// const obj = (num1,num2)=> num1+num2;
// console.log(obj(10,20))

// const obj = (num1,num2)=> {num1+num2};
// console.log(obj(10,20))


// const obj = (num1,num2)=> (num1+num2);
// console.log(obj(10,20))


// const obj = ()=> ({name:"Nitin saini"});
// console.log(obj())

// IIFE(imedeately invoked function expression)


// (function myfunc(){
//   console.log("Hello")
// })();

// (function myfunc(){
//   console.log("Hello")
// })()



// (function myfunc(name){
//   console.log(`Username is ${name}`)
// })("Hitesh")