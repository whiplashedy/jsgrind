/**
 * @callback func
 * @return {Function}
 */
export default function curry(func) {
    return function curried(...arg) {
        if (arg.length >= func.length) {
            return func.apply(this, arg)
        }
        else{
            return function (...arg2) {
                return curried.apply(this, arg.concat(arg2))
            }
        }
    }
}

function addTwo(a, b) {
    return a + b;
}

const curriedAddTwo = curry(addTwo);
curriedAddTwo(3)(4); // 7

const alreadyAddedThree = curriedAddTwo(3);
alreadyAddedThree(4); // 7