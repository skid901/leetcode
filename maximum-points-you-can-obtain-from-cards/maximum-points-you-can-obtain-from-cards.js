/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k, acc = []) {
    const { length: len } = cardPoints;
    const [lAcc, rAcc] = [Array(len).fill(0), Array(len).fill(0)];
    
    for (const i in cardPoints) {
        lAcc[i] = cardPoints[i] + (lAcc[i - 1] ?? 0);
        rAcc[len - i - 1] = cardPoints[len - i - 1] + (rAcc[len - i] ?? 0);
    }
    
    if (len <= k) return rAcc[0];
    
    let max = 0;
    for (let i = - 1; i < k; i++) {
        const curr = (lAcc[i] ?? 0) + (rAcc[len - k + 1 + i] ?? 0);
        max = Math.max(max, curr);
    }
    return max;
};

// var maxScore = function(cardPoints, k, acc = []) {
//     if (!k) return acc.reduce((a, b) => a + b, 0);
//     const lastIdx = cardPoints.length - 1;
//     return Math.max(
//         maxScore(cardPoints.slice(1), k - 1, [...acc, cardPoints[0] ?? 0]),
//         maxScore(cardPoints.slice(0, lastIdx), k - 1, [...acc, cardPoints[lastIdx] ?? 0])
//     );
// };