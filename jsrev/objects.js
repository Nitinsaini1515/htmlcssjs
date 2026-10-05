// const obj = {
//   "Name" :"Nitin saini",
//   From : "Haryana"
// }
// const obj = {
//   "Name" :"Nitin saini",
//   From : "Haryana",
//   func : function myfunc() {
//     console.log("Me hu object ke ander function")
//   }
// }

// console.log(obj.func())
// const obj = {
//   "Name" :"Nitin saini",
//   From : "Haryana",
//   func : function myfunc() {
//     console.log("Me hu object ke ander function")
//   }
// }
// console.log(obj["Name"])

// square bracket se access karna kaha kam aata hai 
// const symb =  Symbol('123')

// const obj = {
//   "Name" :"Nitin saini",
//   From : "Haryana",
//   [symb] :"mykey1",
//   func : function myfunc() {
//     console.log("Me hu object ke ander function")
//   }
// }
// console.log(obj[symb])



// const user={
//   name:"Nitin saini",
// email:"nitin1234@gmai.com"
// }
// Object.freeze(user.email);
// user.name = "Karan saini";
// user.email = "Hari"
// console.log(user)

// const obj  ={
//   name :"Nitin saini",
//   func : function myfunc(user){
//       console.log(`Hey how are you ${user}`)
//   }
// }
// let user = "MERKO"
// console.log(obj.func(user));



// singelton
// const obj = new Object(
//   {
//     name :"Nitin saini",
//     From:"Haryana"
//   }
// )
// let obj = new Object( )
// obj = {
//     name :"Nitin saini",
//     From:"Haryana"}


// const obj = new Object()
// obj.name ="Nitin saini";
// console.log(obj)


// const obj ={
//   name :"Nitin saini",
//   anot:{
//     nam:"Karan singh",
//   }
// }
// console.log(obj.anot.nam)
// console.log(obj.anot)


// const obj1 = {"name":"Nitin"}
// const obj2 = {"Last name":"Saini"}

// const obj3 = {obj1,obj2};
// const obj3 =Object.assign({},obj1,obj2);
// const obj3 ={...obj1,...obj2};
// console.log(obj3)



// const arr = [
//   {
// name:"Nitin saini",
//   },{
// name:"Harsh kumar",
//   },{
// name:"Priya"
//   }
// ]
// console.log(arr[0].name= "Harsh")



// destructuring of objects

// const obj = {
//   name:"Nitin saini",
//   From :"Haryana"
// }

// const {name} = obj;
// const {name:n} = obj;
// console.log(n);
