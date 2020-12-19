/* "Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is a JavaScript object that links producing code and consuming code */
/* 
let myPromise = new Promise((resolve, reject) => {
    let x = 0.1;
    if (x > 0) {
        resolve('Esta wea funciona');
    } else {
        reject('No funciona');
    }
});

myPromise.then(res => console.log(res), rej => console.log(rej))
 */
//ANOTHER EXAMPLE
/* 
const p1 = Promise.resolve(1);
console.log(typeof p1, p1);
p1.then((x) => x + 5)
  .then((x) => Promise.resolve(x + 5))
  .then((x) => Promise.reject("M O D O    F"))
  .then((x) => console.log("Esto estará f"))
  .catch((e) => console.log(e));
 */
const delayed = (x) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(x), 500));

delayed(9 + 9)
    .then((x) => {
        console.log(x);
        return delayed(7 + 7);
    })
    .then((x) => console.log(x))
    .then((x) => Promise.reject('F'))
    .catch(e => console.log(e));