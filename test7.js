function attachTitle(resolve){
  return ('DR. ') + resolve;
};

var promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log); 