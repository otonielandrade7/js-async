//ASYNCHRONISM
//Functions running in parallel with other functions are called asynchronous
let msg = 'Saludos mis panardos';
setTimeout(() => {
    myAsync(msg);
}, 2000);
console.log('Esto estará antes');
function myAsync(msg) {
    console.log(msg);
}