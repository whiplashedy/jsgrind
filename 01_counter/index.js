let button = document.querySelector('button');
let span = document.querySelector('span');

/** IIFE It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

 - The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
 This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

 - The second part creates the immediately invoked function expression () through which the JavaScript engine will
 directly interpret the function.
 **/

(()=>{
    let count = 0
    button.addEventListener('click', () => {
        span.textContent = ++count
    })
})()