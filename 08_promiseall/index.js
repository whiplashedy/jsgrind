/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
        let results = new Array(iterable.length)
        let unresolved = iterable.length
        if (unresolved === 0) {
            resolve(results)
            return
        }
        iterable.forEach(async (item, index) => {
            try {
                const value = await item
                results[index] = value
                unresolved -= 1
                if (unresolved === 0) {
                    resolve(results)
                    return
                }
            } catch (e) {
                reject(e)
            }
        })

    })
}

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 100);
});

promiseAll([p0, p1, p2]);