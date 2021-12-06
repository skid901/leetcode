class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) < 2:
            return s
        def  getLongestPalindrome(left: int, right: int) -> str:
            while 0 <= left and right < len(s) and s[left] == s[right]:
                left, right = left - 1, right + 1
            return s[left + 1: right]
        palindrome = ''
        for idx in range(len(s) - 1):
            palindrome = max(palindrome,
                             getLongestPalindrome(idx, idx + 1),
                             getLongestPalindrome(idx, idx + 2),
                             key=len)
        return palindrome