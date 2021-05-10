/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const arr = new Array(n).fill(1);
    [arr[0], arr[1]] = [0, 0];
    
    for (let i = 2; i < n; i++) {
        const isPrime = Boolean(arr[i]);
        let curr = i * 2;
        while (isPrime && curr < n) {
            arr[curr] = 0;
            curr += i;
        }
    }
    return arr.filter(Boolean).length;
};