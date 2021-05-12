/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const [row, col] = [matrix.length, matrix[0].length];
    this.dp = Array.from({ length: row }, _ => Array(col).fill(0));
    for (const r in matrix) {
        for (const c in matrix[r]) {
            this.dp[r][c] = matrix[r][c] + (this.dp[r][c - 1] ?? 0);
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    const { dp } = this;
    let sum = 0;
    for (let r = row1; r <= row2; r++) {
        sum += dp[r][col2] - (dp[r][col1 - 1] ?? 0); 
    }
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */