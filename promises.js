/* "Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is a JavaScript object that links producing code and consuming code */

let myPromise = new Promise((resolve, reject) => {
    let x = 0.1;
    if (x > 0) {
        resolve('Esta wea funciona');
    } else {
        reject('No funciona');
    }
});

myPromise.then(res => console.log(res), rej => console.log(rej))