
let a = 100;
console.log(a);
setTimeout(() => {
    console.log(a)
}, 1000);

let obj = { name: 'lishijie', age: 18 };
let { name, age } = obj;
console.log(name, age);