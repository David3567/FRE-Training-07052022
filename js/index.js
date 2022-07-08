// javascript = ECMAscript + web.api
// Nodejs = ECMAscript + node.api

// primitive data 
// number string boolean undefined null symbol

// var str = 'abc';
// console.log(typeof str);
// var copystr = str;
// console.log(typeof str);
// console.log( typeof 911);
// console.log( typeof true);
// console.log( typeof undefined);
// console.log( typeof null);

// undefined vs null

// let a = 5;
// function foo(input){
//     input = 6;
//     console.log(input);
// }
// foo(a); // 6

// console.log(a); // 5

// another example
// let b = 5;
// let c = b;
// b = 6;
// console.log(b, c);

//object data
// var obj = {};
// console.log(obj);

// class myObject {
//     constructor(){

//     }
// }
// let arr = [1, 2, 3];
// console.log(typeof(arr));

// var obj = {
//     name: 'Dio',
// }

// function bar (input) {
//     // input.name = 'Jojo';
//     input = {name: 'Jojo'};
//     console.log(input);
// }
// bar(obj);
// console.log(obj);

// coercion
// console.log(typeof('0' + 1));

// // == vs ===

// console.log( '0' == '1');
// console.log('1' == 1);

// console.log(undefined == null);
// console.log(null == false);

// console.log(NaN == NaN)


// // hositing: when you declare, the hoist will send the first part (in front of =) to the top (within the scope) 
//           var |     let |    const  | function 
//hoisting    y         y        y         y
// init     undefined   -        -
// scope    function   block   block


// function foo() {
//     // var num = undefined;
//     // num = 5;
//     console.log(num);
//     if (false) {
//         var num = 62;
//     }
//     console.log(num);
// }

// foo();

// console.log('abcd'); 
// console.log(abcd); 

// function foo() {
//     if (true) {
//         console.log(num);
//         let num = 62;
//     }
//     // console.log(num);
// }

// foo();

// function foo() {
//     console.log(num);
//     let num;
//     // console.log(num);
// }

// foo();
// console.log(foo());
// function foo(){};

/// oop ///

// constructor 
// function PersonFn (name, age) {
//     this.name = name;
//     this.age = age;
//     this.jump = function() {
//         console.log(`${this.name} is jumping`);
//     }
// }

// // const dio = PersonFn('Dio', 20);
// // console.log(dio);

// const dio = new PersonFn('Dio', 20);
// console.log(dio);

// // function PersonFn (name, age) {
// //     let obj = {};
// //     obj.name = name;
// //     obj.age = age;
// //     obj.__proto__.constructor = PersonFn;
// //     return obj;
// // }

// // PersonFn.prototype.run = function() {
// //     console.log( `${this.name} is running`);
// // }
// dio.__proto__.run = function() {
//     console.log( `${this.name} is running`);
// }

// dio.run();

// dio.walk = function() {
//     console.log( `${this.name} is walking`);
// }

// dio.walk();

// // ES6
// age;
// class Person {
//     #name;
//     #age;
//     #salary;

//     constructor (name, age, salary) {
//         this.#name = name;
//         this.#age = age;
//         this.#salary = salary;

//     }

//     get name() {
//         return this.#name
//     }
//     set name(newName) {
//         this.#name = newName;
//     }

//     run() {
//         console.log(this.#name + 'running');
//     }
// }

// class Employee extends Person {
//     // #company;
//     constructor (name, age, salary, company) {
//         super(name, age, salary);
//         this.company = company;
//     }

//     getSalary(baseSalary) {
//         return this.salary + baseSalary;
//     }
// }

// const e = new Employee('Dio', 20, 10000, 'Antra');
// console.log(e);

// e.getSalary(100000);




// prototype chain

// prototype __proto__

// loop array object

// myForEach, myForMap, myFilter, myReduce,

// destructure

// rest parameter vs spread operator

// object copy

// iife

// closure

// curry

// this 

// call, bind, apply

// arrow function

//event loop

// XHR

// callback function, callback hell

// Promise

// myPromise 

//myFetch

// MVC todolist



