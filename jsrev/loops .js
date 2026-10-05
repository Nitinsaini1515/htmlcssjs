//  for loop


// for(let i = 0; i<10;i++){
//   console.log(i);
// }

// let arr = [1,2,3,4,5,7,8]
// for(let i = 0;i<arr.length;i++){
//   console.log(arr[i])
// }

// break and continue

// break
// for(let i = 0;i<5;i++){
//   if(i==2){
//     break;
//   }else{
//     console.log(i);
//   }
// }

// continue
// for(let i = 0;i<5;i++){
//   if(i==2){
//    continue;
//   }else{
//     console.log(i);
//   }
// }

// let index = 0;
// while(index<10){
// console.log(index);
// index++;
// }


// do while


// let sc = 0;
// do{
//   console.log(sc)
//   sc++;
// }while(sc>5)





// higher order array loops


// let arr = [1,2,3,4,5,6,7,8,9,0]
// for (const i of arr) {
//   console.log(i)
// }


// const obj ={
//   name:"Nitin saini",
//   from :"Haryana"
// }

// let gt = "Nitin saini"
// for(const i of gt){
//   console.log(i);
// }


// maps 

// const map = new Map()
// map.set("In",'India')
// map.set("rs",'India')
// console.log(map)
// console.log(typeof(map))


// for( const [key,value]of map){
//   console.log(` key is ${key} and value is ${value}`)
// }


// const obj ={
//   name:"Nitin saini",
//   from :"Haryana"
// }

// for( const [key,value]of obj){
//   console.log(` key is ${key} and value is ${value}`)
// }

// for in 

// console.log(obj["name"])
// for (const key in obj) {
//  console.log(`key is ${key} and value is ${obj[key]}`) 
// }


// for each

// const arr = [1,2,3,4,5,6,7,8]

// arr.forEach((elem)=>{
//   console.log(elem)
// })

// obj.forEach((key)=>{
// console.log(key,obj[key])
// })->not use


// map.forEach((key,value)=>{
// console.log(key,value)
// })


// flter map reduce 
// const nums = [1,2,3,4,5,6,7,8,9,0]
// const newNums = nums.filter((num)=> { return num>4})
// console.log(newNums)

// const nums = [1,2,3,4,5,6,7,8,9,0]

// const newNums = nums.filter((num)=>num>4).map((num)=>num+10);
// console.log(newNums)

// reduce

// let sum = nums.reduce((acc,curr)=>{
// return acc+curr;
// },0)
// console.log(sum)


// const obj =[

//   {price:1000},
//   {price:200},
//   {price:800}
// ]
// let sumCarItem = obj.reduce((acc,items)=>{
// return acc+items.price
// },0)
// console.log(sumCarItem)


