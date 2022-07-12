//* ~~~~~~~~~~~~~~ Day 2 ~~~~~~~~~~~~~~
//~ Prototype ~
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   show() {
//     console.log(this.name);
//   }
// }
// class Emplyee extends Person {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
// }

// function Person() {
//   this.name = 'TT';
// }
// Person.prototype.show = function() {
//   console.log(this.name);
// }
// function Emplyee() {
//   Person.call(this);
// }
// Emplyee.prototype = Object.create(Person.prototype);
// Emplyee.prototype.constructor = Emplyee;

// Emplyee.prototype.show = function() {
//   console.log('hello');
// }

// const e = new Emplyee();
// console.log(e);
// e.show();
// const arr = [];
// console.log(arr.prototype.constructor);

//~ loop ~
// const obj = {
//   age: 34,
// 	name: "TT",
// };
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 42) {
//     continue;
//   }
//   console.log(arr[i]);
// }

// for (const key in obj) {
// 	console.log(obj[key]);
// }
// const arrEntries = Object.entries(obj);
// console.log();
// for (const num of arr) {
// 	console.log(num);
// }

// const arr = [2, 4, 3];

// Array.prototype.myForEach = function (callback) {
// 	for (let i = 0; i < this.length; i++) {
// 		callback(this[i], i, this);
// 	}
// };
// Array.prototype.myMap = function (callback) {
// 	const arr = [];
// 	for (let i = 0; i < this.length; i++) {
// 		arr.push(callback(this[i], i, this));
// 	}
// 	return arr;
// };
Array.prototype.myFilter = function (cbfn) {
	const arr = [];
	for (let i = 0; i < this.length; i++) {
		if (cbfn(this[i], i, this)) {
			arr.push(this[i]);
		}
	}
	return arr;
};

const fromFilter = arr.myFilter(function (cur, i, self) {
  return cur % 2 !== 0;
});
// console.log(fromFilter);

Array.prototype.myReduce = function (...args) {
	let [acc, index] = args.length < 2 ? [this[0], 1] : [args[1], 0];

	for (let i = index; i < this.length; i++) {
		acc = args[0](acc, this[i], i, this);
	}
	return acc;
};

// const str = 'abc';
//  // ['a', 'b', 'c']

// console.log(str.split('').myReduce((acc, cur) => acc + cur + cur, ''));
// // //* '' + a + a = 'aa' + b + b = aabb + c + c = aabbcc

// function foo(arr) {
//   return arr.myReduce((acc, cur) => ({...acc, [cur.name]: cur.age}), {});
// }
// const input = [
// 	{ name: "TT", age: 12 },
// 	{ name: "DD", age: 32 },
// 	{ name: "SS", age: 22 },
// ];
// console.log(foo(input));

// const numbers = [175, 50, 25];
// const res = numbers.myReduce(myFunc);

// function myFunc(acc, cur) {
// 	return acc - cur;
// }

// console.log(res);

//~ destructure ~
// // import { test } from ''
// const [tt, b, c, d, e, f] = [1, 2, 4, 6, 12];
// const obj = {
//   name: 'David',
//   age: 12,
//   title: 'header'
// };
// const { age, name: uerName } = obj;
// console.log(uerName);