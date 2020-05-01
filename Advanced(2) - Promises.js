//CREATING PROMISES
//NOTE: A "promise" is just a callback function
//NOTE: You must provide your own callback function as the argument when creating a "promise"
const promiseStatus = true;
const myPromise = new Promise(function(resolve, reject) {
    if (promiseStatus) {
        resolve("Promise Succeeded");
    } else {
        reject("Promise Failed");
    }
});

myPromise.then(function(succeedMessage) {
    console.log(succeedMessage);
}, function(failMessage) {
    console.log(failMessage);
});