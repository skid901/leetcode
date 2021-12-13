class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit, min_price = 0, sys.maxsize
        for p in prices:
            min_price = min(min_price, p)
            profit = max(profit, p - min_price)
        return profit