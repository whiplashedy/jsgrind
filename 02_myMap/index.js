//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//call bind apply all the same with minor diffs

Array.prototype.myMap = function (callbackFn, thisArg) {
    let len = this.length
    let res = new Array(len)
    for(let i = 0; i < len; i++){
        if(this[i] !== undefined){
            res[i] = callbackFn.call(thisArg, this[i], i, this)
        }
    }
    return res
};

[1, 2, 3, 4].myMap((i) => i * i);