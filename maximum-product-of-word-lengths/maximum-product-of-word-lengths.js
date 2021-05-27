/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let [max, { length }] = [0, words];
    for (let i = 0; i < length - 1; i++) {
        const base = words[i];
        const regExp = new RegExp(`^[^${base}]*$`);        
        for (let j = i + 1; j < length; j++) {
            const target = words[j];
            if (regExp.test(target)) {
                max = Math.max(max, base.length * target.length);
            }
        }
    }
    return max;
};
