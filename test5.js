var promise = new Promise(function(fulfill, reject){
    reject(new Error('error achieved'));
})

promise.catch(function(err){
    console.log(err.message);
});

var promiseFulfill = Promise.resolve('You did it!');

var promiseReject = Promise.reject(new Error('you didn\'t do it'));

promiseFulfill.then(function(resolve){
    console.log(resolve);
}, null);

promiseReject.then(null, function(error){
    console.log(error.message);
});