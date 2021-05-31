/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    const [rtn, { length }] = [[], searchWord];
    for (let i = 0; i < length; i++) {
        const keyword = searchWord.slice(0, i + 1);
        const recommendeds = products
            .filter(prod => prod.indexOf(keyword) === 0)
            .sort()
            .slice(0, 3);
        rtn.push(recommendeds);
    }
    return rtn;
};
