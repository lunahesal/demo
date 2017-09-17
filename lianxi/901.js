// let data =[1,3,6,9,13].find(value=>value>5)
// console.log(data)
//
// let a = [1,2,3]
// let b = a.map(t => 2*t)
// console.log(b)
//
// let a = [1,2,15,20,10]
// let b = a.filter(t=>t>9)
// console.log(b)
//
// let a  = [1,2,3,4,5]
// let b = a.reverse()
// console.log(b)
//
//
// let obj1={a:1}
// let obj2={
//   b:1,
//   c:2
// }
// let obj3={d:6}
// let obj4 = Object.assign(obj1,obj2,obj3)
// console.log(obj4)
// console.log(obj1)

// let obj = {
//   a:1,
//   b:2,
//   c:3
// }
// let obj1 = Object.keys(obj)
// console.log(obj1)
// obj1.map(t=>console.log(obj[t]))

// 合并，覆盖和展开运算符
let aa = { a:1, b:2}
let bb = {b:3}
let cc = {...aa,...bb}
console.log(cc)
console.log(aa)  //aa并没有改变



var myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function(){
        resolve("成功!"); //代码正常执行！
    }, 250);
});

myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("Yay! " + successMessage);
});
