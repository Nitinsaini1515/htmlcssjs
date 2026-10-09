// console.log("Hey me bind ki file hu ")

// const obj ={
//   username :"Nitin saini",
//   age:20,
//   func:function myfunc(){
//     console.log(`Username is ${this.username} and age is ${this.age}`);
//   }
// }

// obj.func();
// const newUser = obj.func.bind(obj);
// console.log(newUser())


// bind ek naya function return karta hai jiska this user object se bind ho jayega abb newUser ko alag se call karne pe bhi this user ko hi refer karega




// for ex hame student ka name print karwana hai 2 sec ke bad


// const stdobj = {
//   username:"Nitin saini",
//   age:22,
//   func :function myfunc(){
//     console.log(`Username is ${this.username} and age is ${this.age}`)
//   }
// }

// setTimeout(stdobj.func.bind(stdobj),3000)