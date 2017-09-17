// class Dog{
//   constructor(name){
//     this.name = name
//   }
//   say(){
//     console.log(this.name)
//     return this.name
//   }
// }
// let doudou = new Dog('doudou')
// console.log(doudou.say())

// class Person{
//   constructor(){
//     this.height = 170
//   }
//   sayWords(){
//     console.log('I am humen')
//   }
// }
// class women extends Person{
//   sayMe(){
//     console.log('I am king')
//   }
// }
// let mm = new women('hmm')
// let i = 10;
// mm.sayWords()
// mm.sayMe()
// console.log(mm.height)
// console.log(i)

//解构
// const user = {
//   name : 'hg',
//   old : 3,
//   school : 'N.2 Middle School'
// }
// const{name,old,school} = user
// console.log(name)


// let name = 'lj'
// let str = `my name is ${name}`
// console.log(str)


// 箭头函数
// const myFun = name =>console.log(name)
// myFun('lj')

// const myFun = name =>{
//   return name + name
// }
// console.log(myFun('lj'))

//上面的还可以省略return，箭头函数默认返回最后的内容
const myFun = name =>name + name
console.log(myFun('lj'))
