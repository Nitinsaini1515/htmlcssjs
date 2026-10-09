// console.log("Hello How are you ")
// prototype in js


// const obj ={
//   username :"Nitin saini",
//   hehe:function myfunc(){
// console.log(this.username);
//   },
// func:function myfunc(username){
// return this.username =username;
// }
// }

// console.log(obj.hehe());
// console.log(obj.func("karan Singh"));

// function createUser(username,score){
// this.username = username,
// this.score= score;
// }
// function anoth(username,score){
// this.username = username,
// this.score= score;
// }
// createUser.prototype.increment =function(){
// this.score++;
// }

// const user1 = new createUser("Karan Singh",14)
// console.log(user1)
// user1.increment()
// console.log(user1

  
// )
// const user2 = anoth("Karan singh",12);
// user2.increment();
// console.log(user2)

// object level prototype


// const obj = {
//   username :"Nitin saini",
//   age:19,
//  getdetails:function detail (){
//   console.log(`Username is ${this.username} and age is ${this.age}`)
//  }
// }

// const arr  = [1,2,3,4]
// Object.prototype.detail = function(){
//   console.log(`Hey i am Nitin saini in this`)
// }
// arr.detail()
// obj.detail();
// obj.getdetails()


// inhertance 

// const teacher ={
//   makeVideos:true
// }

// const teachingSupport ={
//   isAvaliable:false
// }
// teachingSupport.__proto__ =teacher 
// const TAsupport={
//   makeAssignment :"Js assignment",
//   fullTime:true,
// }
// TAsupport.__proto__ = teacher

// console.log(teachingSupport.makeVideos)
// console.log(TAsupport.makeVideos);


// const teacher={
//   isAvaliable :true
// }


// const support ={
// supportAvaliable :true
// }

// Object.setPrototypeOf(support,teacher)
// console.log(support.isAvaliable)
// console.log(teacher.supportAvaliable)



