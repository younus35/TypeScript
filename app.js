"use strict";
// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(1,5)); // output is 6
// console.log(add('1','5')); //output is 15
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button'); // we can add ! to ignore null
const numResults = [];
const stringResults = [];
// interface 
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else if (typeof num1 === 'string' && typeof num2 === 'string')
        return num1 + ' ' + num2;
    else
        return +num1 + +num2;
}
console.log(add(1, 5)); // output is 6
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const val1 = num1Element.value; //value always returns the String thats where the typescript comes in
    const val2 = num2Element.value;
    const numResult = add(+val1, +val2);
    const stringResult = add(val1, val2);
    console.log(numResult);
    numResults.push(numResult);
    console.log(stringResult);
    stringResults.push(stringResult);
    // add(true, false); we will get error
    printResult({ val: numResult, time: new Date() });
    console.log(numResults, stringResults);
});
// console.log(add('1','5')); //output is error
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 5000);
});
myPromise.then((result) => {
    console.log(result);
});
