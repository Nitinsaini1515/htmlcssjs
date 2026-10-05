// const proOne = new Promise((resolve,reject)=>{
//   let he = false;
// setTimeout(()=>{
//   if(he){
//   console.log("Hey how are you")
//   resolve()
//   }else{
//     console.log("Promise rejected")
//     reject()
//   }
// },1000)
// })


// proOne.then(()=>{
// console.log("Promise consumed")
// }).catch(()=>{
//   console.log("Promise rejected")
// })

// const promiseTwo = new Promise((resolve,reject)=>{
//   let name = "Nitin saini"
//   let age = 19
//   setTimeout(()=>{
//     resolve(`Name is ${name} and age is ${age}`)
//   },1000)

// })
// promiseTwo.then((result)=>{
// console.log(result)
// }).catch(()=>{
//   console.log("Hogya reject")
// })



// handling promise by async await
// const prom = new Promise((resolve,reject)=>{
// let er = false;
// let username = "Karan singh"
// let age = 22
// setTimeout(()=>{
//   if(!er){
//     resolve(`username is ${username} and age is ${age}`)
//   }else{
//     reject("Promise is rejected ")
//   }
// })
// })

// async function hand() {
//   try {
//     const response = await prom
//     console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
// }
// hand()



// const prom = new Promise((resolve,reject)=>{
//   let err  = false;
//   let username = "Nitin saini"
//   let age = 20
//   if(!err){
//     setTimeout(()=>{
//       resolve(`username is ${username} age is ${age}`)
//     })
//   }else{
//     console.log("Error aa rha hai code me")
//     reject()
//   }
// })


// async function myfunc() {
//   try {
//     let response  = await prom
//     console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
// }

// myfunc();