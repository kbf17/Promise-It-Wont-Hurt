var promise = new Promise(function(fulfill, reject){
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onReject(error){
    console.log(error.message);
};

promise.then(function(fulfill){
    console.log(fulfill)}, onReject);