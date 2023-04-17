/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {
  let [tmpA, tmpB] = [headA, headB]
  const set = new Set()

  while (tmpA) {
      set.add(tmpA)
      tmpA = tmpA.next
  }

  while (tmpB) {
      if (set.has(tmpB)) {
          return tmpB
      }
      tmpB = tmpB.next
  }

  return null
};