/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */

let i = 0;
function increment(text) {
    console.log(text)
    i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement('lol');
debouncedIncrement('lol2');

function debounce(func, wait) {
    let timer = null;
    return function(...args) {
        const context = this
        clearTimeout(timer)
        timer = setTimeout(()=> {
            func.apply(context, args)
        }, wait)
    }
}