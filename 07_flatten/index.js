/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
//O(n) space
export default function flatten(arr, result = []) {
    for(let val of arr) {
        if(Array.isArray(val)) {
            flatten(val, result)
        }else {
            result.push(val)
        }
    }
    return result
}

//O(1) space
export default function flatten(array) {
    for (let i = 0; i < array.length; ) {
        if (Array.isArray(array[i])) {
            array.splice(i, 1, ...array[i]);
        } else {
            i++;
        }
    }
    return array;
}