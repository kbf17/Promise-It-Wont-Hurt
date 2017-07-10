first().then(second).then(console.log);

// long way
// first() and second () were already defined in the program 
// var firstPromise = first();

// var secondPromise = firstPromise.then(function (val) {
//     return second(val);
// });

// secondPromise.then(console.log);