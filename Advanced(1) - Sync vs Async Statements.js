//SYNC VS ASYNC STATEMENTS
//Sync Statements
console.log("Hello Sync 1");
for (let i = 0; i < 1000000; i++) {

}
console.log("Hello Sync 2");

//Async Statements
console.log("Hello Async 1");
setTimeout(function() {
    console.log("Hello Async 2");
}, 5000);
console.log("Hello Async 3");

//Ensure Order with Async Statements Using Callback Functions
function asyncFunction1() {
    setTimeout(function() {
        console.log("asyncFunction1");
    }, 2000);
}

function asyncFunction2() {
    setTimeout(function() {
        console.log("asyncFunction2");
    }, 1000);
}

function asyncFunction3() {
    setTimeout(function() {
        console.log("asyncFunction3");
    }, 2000);
}


