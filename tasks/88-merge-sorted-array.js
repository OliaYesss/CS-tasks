/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let mM = m - 1
let nN = n - 1

for (let i = nums1.length - 1; i >= 0; i--) {
if (mM >= 0 && nums1[mM] >= nums2[nN]) {
  nums1[i] = nums1[mM]
  mM--
} else if (nN >= 0) {
  nums1[i] = nums2[nN]
  nN--
}
}
return nums1
};