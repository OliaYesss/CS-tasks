/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const helper = (head, cur, sum) => {
  if (!cur) {
      return
  }

  if (cur.val === 0) {
      head.val = sum
      head.next = cur.next

      helper(cur.next, cur.next, 0)
  } else {
      helper(head, cur.next, sum + cur.val)
  }
}

var mergeNodes = function(head) {
  helper(head, head, 0)

  return head.next
};