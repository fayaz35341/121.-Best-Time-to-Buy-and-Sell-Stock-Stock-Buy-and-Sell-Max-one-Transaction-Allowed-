class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_p=0
        mini=prices[0]
        for i in range(1,len(prices)):
            cost= prices[i]-mini
            max_p=max(cost,max_p)
            mini=min(mini,prices[i])
        return max_p
