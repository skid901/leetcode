/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = Array.from({ length: m }, _ => Array(n));
    memo[0][0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!i && !j) continue;
            memo[i][j] = (memo[i - 1]?.[j] ?? 0) + (memo[i]?.[j - 1] ?? 0); 
        }
    }
    return memo[m - 1][n - 1];
};
