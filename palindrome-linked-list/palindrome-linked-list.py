# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        # [s,f]->None
        # []->[s]->None(f)
        # []->[s]->[f]->None
        # []->[]->[s]->[]->None(f)
        # []->[]->[s]->[]->[f]->None
        # []->[]->[]->[s]->[]->[]->None(f)
        slow = fast = head
        reverse = None
        while fast and fast.next:
            fast = fast.next.next
            reverse, reverse.next, slow = slow, reverse, slow.next
        if fast:
            slow = slow.next
        while slow and slow.val == reverse.val:
            slow, reverse = slow.next, reverse.next
        return slow is None