/* "async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise */

async function showResult() {
    let myPromise = new Promise((resolve, reject) => {
        resolve('Buenardo');
    })
    let msg = await myPromise;
    console.log(msg);
}
showResult();
