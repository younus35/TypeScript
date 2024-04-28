// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(1,5)); // output is 6

// console.log(add('1','5')); //output is 15
const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button') as HTMLButtonElement; // we can add ! to ignore null

const numResults: number[] = [];
const stringResults: string[] = [];

//type aliases
type NumorString = number | String; //usefull in union types
type Result = { val: number; time: Date }; //obj type line 28

// interface 

function add(num1: NumorString, num2: NumorString) { // union 
    if(typeof num1 === 'number' && typeof num2 === 'number')
    return num1 + num2;
    else if(typeof num1 === 'string' && typeof num2 === 'string')
    return num1 + ' ' + num2;
    else 
    return +num1 + +num2; 
}

console.log(add(1,5)); // output is 6

function printResult(resultObj: Result) {
    console.log(resultObj.val);
}

buttonElement.addEventListener('click', () =>{
    const val1 = num1Element.value; //value always returns the String thats where the typescript comes in
    const val2 = num2Element.value;
    const numResult = add(+val1, +val2);
    const stringResult = add(val1, val2);
    console.log(numResult);
    numResults.push(numResult as number);
    console.log(stringResult);
    stringResults.push(stringResult as string);
    // add(true, false); we will get error
    printResult({val: numResult as number, time: new Date()});
    console.log(numResults, stringResults)
})

// console.log(add('1','5')); //output is error

const myPromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('it worked');
    },5000);
});

myPromise.then((result) =>{
    console.log(result);
});
