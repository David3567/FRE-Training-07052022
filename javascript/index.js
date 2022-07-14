console.clear();
//* ~~~~~~~~~~~~~~ Day 2 ~~~~~~~~~~~~~~
// //~ Prototype ~
// class Person {
//   #age
//   constructor(name) {
//     this._name = name;
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
// const p = new Person('WW');

// function Person(name, age) {
//   this.name = 'TT';
// }
// Person.prototype.show = function() {
//   console.log(this.name);
// }
// function Emplyee(name, age) {
//   Person.apply(this,[name, age]);
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
// Array.prototype.myFilter = function (cbfn) {
// 	const arr = [];
// 	for (let i = 0; i < this.length; i++) {
// 		if (cbfn(this[i], i, this)) {
// 			arr.push(this[i]);
// 		}
// 	}
// 	return arr;
// };

// const fromFilter = arr.myFilter(function (cur, i, self) {
//   return cur % 2 !== 0;
// });
// // console.log(fromFilter);

// Array.prototype.myReduce = function (...args) {
// 	let [acc, index] = args.length < 2 ? [this[0], 1] : [args[1], 0];

// 	for (let i = index; i < this.length; i++) {
// 		acc = args[0](acc, this[i], i, this);
// 	}
// 	return acc;
// };

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

//* ~~~~~~~~~~~~~~ Day 3 ~~~~~~~~~~~~~~
//~ rest parameter vs. spread operator
// function foo(a, b, ...args) { // take
//   console.log(args);
// }
// foo(3, 4, 5, 7, true);

// const arr = [1, 2, 3];
// const copyarr = [1, ...arr, 5];
// const obj = {
//   name: 'TT',
//   company: 'Antra'
// }
// const copyobj = {
//   ...obj,
//   name: 'DD',
//   age: 45
// };
// console.log(copyobj);

//~ object copy
// // shallow copy, deep copy or clone
// const obj = {
//   name: 'TT',
//   company: 'Antra',
//   isOpen: false,
//   id: 124,
//   children: [1, 2, 3],
//   date: new Date(),
//   // foo: function() {}
// };
// const obj1 = obj;

// const obj2 = {...obj};
// obj.children[0] = 452;
// // console.log(obj2.children[0]);

// console.dir(obj, JSON.parse(JSON.stringify(obj)));

// const obj3 = structuredClone(obj);
// console.log(obj3);

// // Lodash | _.cloneDeep() Method

//~ this
// function foo() {
//   console.log(this);
// }
// foo();

// const myObj = { // MyPromise
//   pi: 3.14,
//   foo: function() { // constructer
//     console.log('foo: ', this); // <------

//     function bar() {
//       console.log('bar: ', this);
//     }
//     // const baz = bar.bind(this); // <------
//     // const bar = () => {
//     //   console.log('bar: ', this);
//     // }
//     // bar();
//   },
//   abc: () => {
//     console.log('abc: ', this);
//   }
// }
// myObj.abc();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//   }

//   show() {
//     console.log(`${this.name}`);
//   }
// }
// const p = new Person('RR', 12)

//~ bind, call, apply
// const obj = {
//   wer: 'RR'
// }

// function printName(age, company) { //100
//   console.log(this.wer, age, company);
// }

// const print = printName.bind(obj); // lazy 1
// print(12, 'Antra'); // 100

// printName.call(obj, 12, 'Antra'); //eager // 1 + 100
// printName.apply(obj, [12, 'Antra']); // 1 + [].length === 100

//~ arrow function
// function foo() {
//   console.log(arguments);
// }

//~ high order function, curring, closure
// function foo(n) {
//   function sum(m) {
//     return n + m;
//   }
//   return [sum];
// }
// const [bar] = foo(4);
// bar(5)
//^ ~~~~~~~~~~~~~~~~ interview ~~~~~~~~~~~~~~~~
//~ 1
// const target = (a, b) => console.log(a + b);
// const fn = limitedFunction(5, target); // target, counter = 0
// fn(2, 3); // 5; // 1
// fn(1, 3); // 4; // 2
// fn(2, 6); // 8; // 3
// fn(6, 3); // 9; // 4
// fn(2, 3); // 5; // 5
// fn(2, 3); // over limited
// fn(2, 3); // over limited
// fn(2, 3); // over limited
// fn(2, 3); // over limited
// const fnone = limitedFunction(5, target); // target, counter = 0
// function limitedFunction(num, target){
//   let counter = 0;

//   return function(...args) { // rest parameter
//     if (counter === num) {
//       console.log('over limited');
//     } else {
//       target(...args); // spread operator
//       counter++;
//     }
//   }
// }
//~ 2
// const callback1 = (a) => a + 2; // 7
// const callback2 = (b) => b * 2; // 14
// const callback3 = (c) => c - 2; // 0

// console.log(runAll(8)(callback1, callback2, callback3)); // 2

// function runAll(...args) {

//   return function(num) {
//     return args.reduce((acc, cur) => cur(acc), num);
//     // let res = num;
//     // while (args.length) {
//     //   const cb = args.shift();
//     //   res = cb(res);
//     // }
//     // return res;
//   }
// }

//~ event loop

// for (let i = 0; i < 5; i++) {
//   // (function(ii) {
//     setTimeout(() => console.log(i), (5 - i) * 1000);
//   // })(i);
// }

// call stack: [() => console.log(4)],
// web api, async api:
// () => console.log(0) 5s
// () => console.log(1) 4s
// () => console.log(2) 3s
// () => console.log(3) 2s
// () => console.log(4) 1s
/* 
  tasks queue: [
    () => console.log(4)
    () => console.log(3)
    ....
  ] 
  
*/

// function foo() {
//   var a = 0;
// }
// foo();
// console.log(a);
// 0, 1, 2, 3, 4

//^ ~~~~~~interview question~~~~~~~~~~~~
// const first = [
//     { userid: 2, name: 'Velen' },
//     { userid: 56, name: 'Illidan' },
//     { userid: 23, name: 'Muradin' },
//     { userid: 12, name: 'Sylvanas' },
//     { userid: 44, name: 'Cenarius' },
//     { userid: 4, name: 'Gul\'Dan' }
// ];
// const second = [
//     { userid: 2, role: 'Mage' },
//     { userid: 4, role: 'Worlock' },
//     { userid: 56, role: 'Demon Hunter' },
//     { userid: 66, role: 'Druid' },
//     { userid: 87, role: 'Shaman' },
//     { userid: 12, role: 'Hunter' },
// ];
// function solution(farr, sarr) {
//   const arr = [...farr, ...sarr];
//   const map = {};
//   // {
//   //   2: { userid: 2, name: 'Velen' },
//   // }
//   arr.forEach(ele => {
//     map[ele.userid] = {
//       ...{userid: null, name: null, role: null},
//       ...map[ele.userid],
//       ...ele,
//     }
//   })
//   return Object.values(map);
// }
// console.log(solution(first, second));

// [
//   { userid: 2, name: 'Velen', role: 'Mage' },
//   { userid: 56, name: 'Illidan', role: 'Demon Hunter' },
//   { userid: 23, name: 'Muradin', role: null },
//   { userid: 12, name: 'Sylvanas', role: 'Hunter' },
//   ...
//   { userid: 87, name: null, role: 'Shaman' },
// ]

//* ~~~~~~~~~~~~~~ Day 4 ~~~~~~~~~~~~~~
//~ callback function & callback hell
// const foo = () => console.log("foo");
// const getRendomTime = () => Math.floor(Math.random() * 6);

// const callFunInRandomTime = (callback) => {
// 	const timer = getRendomTime();
// 	console.log(`wait for ${timer}s`);

// 	setTimeout(callback, timer * 1000);
// };
// callFunInRandomTime(() => {
//   callFunInRandomTime(() => {
//     callFunInRandomTime(() => {
//       callFunInRandomTime(() => {
//         callFunInRandomTime(() => {
//           callFunInRandomTime(() => {
//             callFunInRandomTime(() => {
//               callFunInRandomTime(() => {
//                 callFunInRandomTime(() => {
//                   callFunInRandomTime(foo);
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// const getTodo = (id) => {
// 	const baseUrl = "https://jsonplaceholder.typicode.com/todos";

// 	return new Promise((resolve, reject) => {
// 		const xhttp = new XMLHttpRequest();
// 		xhttp.onreadystatechange = function () {
// 			if (this.readyState == 4 && this.status == 200) {
// 				resolve(JSON.parse(xhttp.response));
// 			}
// 		};
// 		xhttp.open("GET", baseUrl + "/" + id);
// 		xhttp.send();
// 	});
// };

// getTodo(12)
// 	.then((data) => {
// 		console.log(data);
// 		return getTodo(22); // 4
// 	})
// 	.then((data) => {
// 		console.log(data);
// 		return getTodo(32);
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	});

// //~ async await
// (async () => {
//   try {
//     // const todo12 = await getTodo(12); // 4
//     // console.log(todo12);

//     // const todo22 = await getTodo(22);  //2
//     // console.log(todo22);

//     // const todo32 = await getTodo(32); // 3
//     // console.log(todo32);

//     const arr = [getTodo(12), getTodo(22), getTodo(32)];
//     const values = await Promise.all(arr);

//     console.log(values);

//   } catch (error) {
//     console.log(error);
//   }
// })(); // 4

//~ Promise & MyPromise
// class MyPromise {
// 	thencbqueue = [];
// 	currentdata = undefined;

// 	constructor(executer) {
// 		executer(this.resolve.bind(this), this.reject);
// 	}

// 	resolve(resdata) {
// 		setTimeout(() => {
// 			this.currentdata = resdata;
// 			while (this.thencbqueue.length) {
// 				const cb = this.thencbqueue.shift();
// 				this.currentdata = cb(this.currentdata);
// 			}
// 		}, 0);
// 	}
// 	reject = () => {};

// 	then(thencb) {
// 		this.thencbqueue.push(thencb);
// 		return this;
// 	}

// 	catch() {}
// }

// new MyPromise((resolve, reject) => {
// 	console.log("hello");
// 	resolve(123);
// })
// 	.then((data) => {
// 		console.log(data);
// 		return 345;
// 	})
// 	.then((data12) => console.log(data12));

// console.log("world");

//^ youtube promise
// const status = {
// 	PENDING: "pending",
// 	FULFILLED: "fulfilled",
// 	REJECTED: "rejected",
// };

// const isThenable = (maybePromise) =>
// 	maybePromise && typeof maybePromise.then === "function";

// class MyPromise {
// 	#status = status.PENDING;
// 	#value = undefined;
// 	#reason = undefined;
// 	#thenQueue = [];
// 	#finallyQueue = [];

// 	constructor(executor) {
// 		if (typeof executor === "function") {
// 			try {
// 				executor(this.#resolve.bind(this), this.#reject.bind(this));
// 			} catch (err) {
// 				this.#reject(err);
// 			}
// 		}
// 	}

// 	#propagationResolved() {
// 		setTimeout(() => {
// 			this.#thenQueue.forEach(([controlledPromise, fulfilledFn]) => {
// 				if (typeof fulfilledFn === "function") {
// 					const valueOrPromise = fulfilledFn(this.#value);

// 					if (isThenable(valueOrPromise)) {
// 						valueOrPromise.then(
// 							(value) => controlledPromise.#resolve(value),
// 							(reason) => controlledPromise.#reject(reason)
// 						);
// 					} else {
// 						controlledPromise.#resolve(valueOrPromise);
// 					}
// 				} else {
// 					return controlledPromise.#resolve(this.#value);
// 				}
// 			});

// 			this.#finallyQueue.forEach(([controlledPromise, sideEffectFn]) => {
// 				sideEffectFn();
// 				controlledPromise.#resolve(this.#value);
// 			});

// 			this.#thenQueue = [];
// 			this.#finallyQueue = [];
// 		});
// 	}

// 	#propagationRejected() {
// 		setTimeout(() => {
// 			this.#thenQueue.forEach(([controlledPromise, _, catchFn]) => {
// 				if (typeof catchFn === "function") {
// 					const valueOrPromise = catchFn(this.#reason);

// 					if (isThenable(valueOrPromise)) {
// 						valueOrPromise.then(
// 							(value) => controlledPromise.#resolve(value),
// 							(reason) => controlledPromise.#reject(reason)
// 						);
// 					} else {
// 						controlledPromise.#resolve(valueOrPromise);
// 					}
// 				} else {
// 					return controlledPromise.#reject(this.#reason);
// 				}
// 			});

// 			this.#finallyQueue.forEach(([controlledPromise, sideEffectFn]) => {
// 				sideEffectFn();
// 				controlledPromise.#reject(this.#value);
// 			});

// 			this.#thenQueue = [];
// 			this.#finallyQueue = [];
// 		});
// 	}

// 	#resolve(value) {
// 		if (this.#status === status.PENDING) {
// 			this.#status = status.FULFILLED;
// 			this.#value = value;
// 			this.#propagationResolved();
// 		}
// 	}
// 	#reject(reason) {
// 		if (this.#status === status.PENDING) {
// 			this.#status = status.REJECTED;
// 			this.#reason = reason;
// 			this.#propagationRejected();
// 		}
// 	}

// 	then(fulfilledFn, catchFn) {
// 		const controlledPromise = new MyPromise();
// 		this.#thenQueue.push([controlledPromise, fulfilledFn, catchFn]);

// 		if (this.#status === status.FULFILLED) {
// 			this.#propagationResolved();
// 		} else if (this.#status === status.REJECTED) {
// 			this.#propagationRejected();
// 		}

// 		return controlledPromise;
// 	}

// 	catch(catchFn) {
// 		return this.then(undefined, catchFn);
// 	}

// 	finally(sideEffectFn) {
// 		if (this.#status !== status.PENDING) {
// 			sideEffectFn();

// 			return this.#status === status.FULFILLED
// 				? MyPromise.resolve(this.#value)
// 				: MyPromise.reject(this.#reason);
// 		}

// 		const controlledPromise = new MyPromise();
// 		this.#finallyQueue.push([controlledPromise, sideEffectFn]);

// 		return controlledPromise;
// 	}

// 	//& static functions in the class
// 	static resolve(resval) {
// 		return new MyPromise((res, _) => {
// 			res(resval);
// 		});
// 	}
// 	static reject(rejval) {
// 		return new MyPromise((_, rej) => {
// 			rej(rejval);
// 		});
// 	}
//   static all(promiseArr) {
//     const resolvedArr = new Array(promiseArr.length);
//     let counter = 0;

//     return new MyPromise((res, rej) => {
//       promiseArr.forEach((prom, i) => {
//         if (prom instanceof MyPromise) {
//           prom.then(data => {
//             resolvedArr[i] = data;
//             counter++;
//             if (counter === promiseArr.length) {
//               res(resolvedArr);
//             }
//           });
//         } else {
//           resolvedArr[i] = prom;
//           counter++;
//           if (counter === promiseArr.length) {
//             res(resolvedArr);
//           }
//         }
//       });
//     });
//   }
// }

// const promise1 = MyPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new MyPromise((resolve, reject) => {
// 	setTimeout(resolve, 100, "foo");
// });

// MyPromise.all([promise1, promise2, promise3]).then((values) => {
// 	console.log(values);
// });
// // expected output: Array [3, 42, "foo"]

//call stack: [then]
// task queue: 123 => {}

//~ fetch & myFetch

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const myFetch = (url, options) => {
	return new Promise((resolve, reject) => {
		const method = options && options.method ? options.method : "GET";

		const xhttp = new XMLHttpRequest();
    xhttp.open(method, url);

    if (options && options.headers) {
      Object.entries(options.headers).forEach(([key, value]) => {
        xhttp.setRequestHeader(key, value);
      });
    }    

		xhttp.onreadystatechange = function () {
			if (this.readyState === 4 && this.status >= 200 && this.status < 300) {
				resolve({
					json() {
						return JSON.parse(xhttp.response);
					},
				});
			}
		};

		options && options.body ? xhttp.send(options.body) : xhttp.send();
	});
};

myFetch(baseUrl, {
	method: "POST",
	body: JSON.stringify({
		title: "foo",
		body: "bar",
		userId: 1,
	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8",
	},
})
	.then((response) => response.json())
	.then((json) => console.log(json));

// myFetch(baseUrl)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//* ~~~~~~~~~~~~~~ Day5 TodoList ~~~~~~~~~~~~~~

//* ~~~~~~~~~~~~~~ Evaluation ~~~~~~~~~~~~~~


const liHtmlCollection = document.getElementsByTagName("li");
const liNodeList = document.querySelectorAll("li");

const ulHtmlCollection = document.getElementsByTagName("ul")[0];

function addli() {
  const newli = document.createElement("li");
  ulHtmlCollection.appendChild(newli);

  console.log("htmlcollection: ", liHtmlCollection.length);
  console.log("linodelist: ", liNodeList.length);
}