

var map = function(arr, fn) {
    const transformArr = []
    for (let i = 0; i < arr.length; i++) {
        transformArr[i] = fn(arr[i], i)
    }
    return transformArr;
};

console.log(map([1,2,3], function plusone(n) {return n + 1}));