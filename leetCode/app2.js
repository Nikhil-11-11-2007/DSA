// que 71 leetcode -> 349

const { createLinkedList, printList, ListNode } = require("../linkList/LL-template");

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//     let set = new Set()
//     let ans = []
//     for(let i = 0; i<nums1.length; i++){
//         set.add(nums1[i])
//     }
//     for(let i = 0; i<nums2.length; i++){
//         if(set.has(nums2[i])){
//             ans.push(nums2[i])
//             set.delete(nums2[i])
//         }
//     }

//     return ans

// };

// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
// TC = O(n)+O(n) = O(n), SC = O(n)

// que 72 leetcode - 560

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function (nums, k) {
//     let map = new Map()
//     map.set(0, 1)
//     let sum = 0, count = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         let rem = sum - k
//         if (map.has(rem)) count += map.get(rem)
//         map.set(sum, (map.get(sum) || 0) + 1)
//     }

//     return count
// };

// console.log(subarraySum([1, 2, 3], 3))

// TC = O(n),  SC = (n)


// que 73 leetcode -> 250

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
//     let map = new Map()
//     let ans = []
//     for (let i = 0; i < nums1.length; i++) {
//         map.set(nums1[i], (map.get(nums1[i]) || 0) + 1)
//     }
//     for (let i = 0; i < nums2.length; i++) {
//         if (map.has(nums2[i])) {
//             ans.push(nums2[i])
//             if (map.get(nums2[i]) === 1) map.delete(nums2[i])
//             else map.set(nums2[i], map.get(nums2[i]) - 1)
//         }
//     }

//     return ans
// };

// TC = O(n),  SC = (n)

// console.log(intersect([4, 9, 5, 9], [9, 4, 9, 8, 4]))

// que 74 leetcode -> 325 GFG -> Longest Subarray with Sum K

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
// class Solution {
//     longestSubarray(arr, k) {
//         // code here
//         let map = new Map()
//         map.set(0, -1)
//         let maxLength = 0, sum = 0
//         for (let i = 0; i < arr.length; i++) {
//             sum += arr[i]
//             if (map.has(sum - k)) maxLength = Math.max(maxLength, i - map.get(sum - k))
//             if (!map.has(sum)) {
//                 map.set(sum, i);
//             }
//         }

//         return maxLength

//     }
// }

// let ans = new Solution()
// console.log(ans.longestSubarray([0, 1, -1, 2], 2))

// TC  = O(n), SC = O(n)

// que 75 leetcode  -> 525 & gfg Largest Subarray of Equal 0's and 1's

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxLength = function (nums) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === 0) nums[i] = -1
//     }

//     let map = new Map()
//     map.set(0,-1)

//     let sum = 0, maxLength = 0
//     for(let i = 0; i<nums.length; i++){
//         sum += nums[i]
//         if(map.has(sum)) maxLength = Math.max(maxLength, i - map.get(sum))
//         else map.set(sum, i)
//     }

//     return maxLength

// };

// console.log(findMaxLength([0, 1, 1, 1, 0, 0]))

// TC  = O(n)+O(n) = O(n), SC = O(n)

// que 76 leetcode -> 128 GFG -> Longest Consecutive Subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//     // brotforce TC = O(nlog(n))
//     // if (nums.length === 0) return 0
//     // nums.sort((a, b) => a - b)
//     // let count = 1, maxlength = 1
//     // for (let i = 0; i < nums.length - 1; i++) {
//     //     if (nums[i + 1] === nums[i]) continue;
//     //     else if (nums[i + 1] === nums[i] + 1) count++;
//     //     else {
//     //         maxlength = Math.max(maxlength, count)
//     //         count = 1
//     //     }
//     // }
//     // return Math.max(maxlength, count)

//     // better approch TC = o(n)+O(n)+O(n) = O(n)

//     // let map = new Map(), maxLength = 0
//     // for (let i = 0; i < nums.length; i++) {
//     //     map.set(nums[i], true)
//     // }
//     // for (let i = 0; i < nums.length; i++) {
//     //     if (map.has(nums[i] - 1)) map.set(nums[i], false)
//     // }

//     // for (let key of map.keys()) {
//     //     if (map.get(key)) {
//     //         let count = 1
//     //         while (map.has(key + count)) {
//     //             count++
//     //         }
//     //         maxLength = Math.max(maxLength, count)
//     //         count = 1
//     //     }
//     // }

//     // return maxLength

//     optimal approch TC = O(n)

//     let set = new Set(), maxlength = 0

//     for(let  i = 0; i<nums.length; i++){
//         set.add(nums[i])
//     }
//     for(let val of set){
//         if(!set.has(val - 1)){
//             let count = 1
//             while(set.has(val + count)){
//                 count++
//             }
//             maxlength = Math.max(maxlength,count)
//             count = 1
//         }
//     }

//     return maxlength

// };

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

// que 77 GFG -> Count Distinct Elements in Every Window

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

// class Solution {
//     countDistinct(arr, k) {
//         // code here
//         // brotforce
//         // let ans = []
//         // for (let i = 0; i <= arr.length - k; i++) {
//         //     let set = new Set()
//         //     for (let j = i; j < i + k; j++) {
//         //         set.add(arr[j])
//         //     }
//         //     ans.push(set.size)
//         // }

//         // return ans

//         // optimal TC = O(n)
//         let map = new Map(), ans = []
//         for (let i = 0; i < k - 1; i++) {
//             map.set(arr[i], (map.get(arr[i]) || 0) + 1)
//         }
//         let i = 0, j = k - 1
//         while (j < arr.length) {
//             map.set(arr[j], (map.get(arr[j]) || 0) + 1);
//             ans.push(map.size);
//             if (map.get(arr[i]) === 1) map.delete(arr[i])
//             else map.set(arr[i], map.get(arr[i]) - 1)
//             i++, j++;
//         }
//         return ans
//     }
// }

// let ans = new Solution()
// console.log(ans.countDistinct([1, 2, 1, 3, 4, 2, 3], 4))

// que 78 leetcode -> 2461

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maximumSubarraySum = function (nums, k) {
//     let map = new Map(), maxSum = 0, sum = 0
//     for (let i = 0; i < k - 1; i++) {
//         map.set(nums[i], (map.get(nums[i]) || 0) + 1)
//         sum += nums[i]
//     }
//     let i = 0, j = k - 1
//     while (j < nums.length) {
//         map.set(nums[j], (map.get(nums[j]) || 0) + 1)
//         sum += nums[j]
//         if (map.size === k) maxSum = Math.max(maxSum, sum)
//         sum -= nums[i]
//         if(map.get(nums[i]) === 1) map.delete(nums[i])
//         else map.set(nums[i], map.get(nums[i]) - 1)
//         i++; j++
//     }

//     return maxSum
// };

// TC = O(n), SC = O(1)

// que 79 leetcode -> 707

// var Node = function (val) {
//     this.data = val;
//     this.next = null;
// };

// var MyLinkedList = function () {
//     this.head = null;
//     this.size = 0

// };

// /** 
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function (index) {
//     if (index < 0 || index >= this.size) return -1

//     let temp = this.head
//     for (let i = 0; i < index; i++) {
//         temp = temp.next
//     }
//     return temp.data
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function (val) {
//     let newNode = new Node(val)
//     newNode.next = this.head
//     this.head = newNode
//     this.size++
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function (val) {
//     let newNode = new Node(val)

//     if (this.head === null) {
//         this.head = newNode
//         this.size++
//         return
//     }
//     let temp = this.head
//     while (temp.next !== null) {
//         temp = temp.next
//     }

//     temp.next = newNode
//     this.size++;
// };

// /** 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function (index, val) {
//     if (index < 0 || index > this.size) return;

//     if (index === 0) {
//         this.addAtHead(val)
//         return
//     }

//     let newNode = new Node(val);
//     let temp = this.head
//     for (let i = 0; i < index - 1; i++) {
//         temp = temp.next
//     }
//     newNode.next = temp.next
//     temp.next = newNode
//     this.size++;
// };

// /** 
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function (index) {
//     if (index < 0 || index >= this.size) return;

//     if (index === 0) {
//         this.head = this.head.next;
//         this.size--;
//         return;
//     }

//     let temp = this.head;

//     for (let i = 0; i < index - 1; i++) {
//         temp = temp.next;
//     }

//     temp.next = temp.next.next;

//     this.size--;
// };

// MyLinkedList.prototype.printList = function () {
//     let temp = this.head;

//     while (temp !== null) {
//         process.stdout.write(temp.data + " -> ");
//         temp = temp.next;
//     }

//     console.log("null");
// };


// var obj = new MyLinkedList();

// var param_1 = obj.get(3);

// obj.addAtHead(5);
// obj.addAtTail(10);
// obj.addAtIndex(2, 7);
// obj.deleteAtIndex(0);

// obj.printList();

// qye 80 leetcode -> 876

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
// var middleNode = function (head) {
//     // brotforce
//     // let size = 0
//     // let temp = head

//     // while (temp !== null) {
//     //     size++
//     //     temp = temp.next
//     // }

//     // let mid = Math.floor(size / 2)

//     // temp = head

//     // for (let i = 0; i < mid; i++) {
//     //     temp = temp.next
//     // }

//     // return temp

//     // optimal 
//     let slow = head, fast = head

//     while (fast !== null && fast.next !== null) {
//         fast = fast.next.next
//         slow = slow.next
//     }

//     return slow
// };

// let head = createLinkedList([1, 2, 3, 4, 5])
// let result = middleNode(head);

// printList(result);

// que 81 leetcode -> 21

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {
//     // brootforce
//     // let dummy = new ListNode(-1)
//     // let temp = dummy
//     // while (list1 !== null && list2 !== null) {
//     //     if (list1.val < list2.val) {
//     //         temp.next = list1
//     //         list1 = list1.next
//     //     } else {
//     //         temp.next = list2
//     //         list2 = list2.next
//     //     }
//     //     temp = temp.next
//     // }
//     // if (list1 !== null) temp.next = list1
//     // if (list2 !== null) temp.next = list2
//     // return dummy.next

//     // optimal using recursion

//     // if (list1 === null) return list2
//     // if (list2 === null) return list1

//     // if (list1.val < list2.val) {
//     //     list1.next = mergeTwoLists(list1.next, list2)
//     //     return list1
//     // } else {
//     //     list2.next = mergeTwoLists(list1, list2.next)
//     //     return list2
//     // }
// };

// let list1 = createLinkedList([1, 2, 4])
// let list2 = createLinkedList([1, 3, 4])

// let mergedLists = mergeTwoLists(list1, list2)

// printList(mergedLists)

// TC =O(n), SC= O(n)

// que 82 leetcode -> 141

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//     // brootforce
//     // if (head === null || head.next === null) return false;

//     // let temp = head;
//     // let set = new Set();

//     // while (temp !== null) {
//     //     if (set.has(temp)) return true;
//     //     set.add(temp);
//     //     temp = temp.next;
//     // }

//     // return false;

//     // optimal

//     let slow = head, fast = head
//     while (fast !== null && fast.next !== null) {
//         fast = fast.next.next
//         slow = slow.next
//         if (fast === slow) return true
//     }
//     return false
// };

// let head = createLinkedList([3, 2, 0, -4]);

// let secondNode = head.next.next;

// let temp = head;

// while (temp.next !== null) {
//     temp = temp.next;
// }
// temp.next = secondNode;

// console.log(hasCycle(head));

// que 83 leetcode -> 142

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//     let slow = head, fast = head

//     while (fast !== null && fast.next !== null) {
//         fast = fast.next.next
//         slow = slow.next
//         if (fast === slow) break;
//     }

//     if (fast === null || fast.next === null) return null
//     slow = head;

//     while (slow !== fast) {
//         slow = slow.next;
//         fast = fast.next;
//     }

//     return slow;
// };

// let head = createLinkedList([3, 2, 0, -4]);

// let secondNode = head.next;

// let temp = head;

// while (temp.next !== null) {
//     temp = temp.next;
// }
// temp.next = secondNode;

// console.log(detectCycle(head));

// que 84 leetcode -> 206

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
// var reverseList = function (head) {

// TC = O(n), SC = O(1)
//     let curr = head, prev = null
//     while (curr !== null) {
//         let temp = curr.next
//         curr.next = prev
//         prev = curr
//         curr = temp
//     }

//     return prev

// TC = O(n), SC = O(n)
//     // function reverse(curr, prev) {
//     //     if(curr === null) return prev
//     //     let temp = curr.next
//     //     curr.next = prev
//     //     prev = curr
//     //     curr = temp
//     //     return reverse(curr,prev)
//     // }

//     // return reverse(curr,prev)
// };

// printList(reverseList(createLinkedList([1, 2, 3, 4, 5])))

// que 85 leetcoe -> 83

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
// var deleteDuplicates = function (head) {
//     if (head === null || head.next === null) return head
//     let temp = head
//     while (temp !== null && temp.next !== null) {
//         if (temp.val === temp.next.val) temp.next = temp.next.next
//         else temp = temp.next
//     }

//     return head
// };

// printList(deleteDuplicates(createLinkedList([1, 1, 2, 3, 3])))

// que 87 leetcode -> 82

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
// var deleteDuplicates = function (head) {

//     if (head === null || head.next === null) return head
//     let curr = head.next, dummy = new ListNode(-1)
//     dummy.next = head
//     let prev = dummy
//     while (curr !== null) {
//         let flag = false
//         while (curr !== null && prev.next.val === curr.val) {
//             flag = true
//             curr = curr.next
//         }
//         if (flag) prev.next = curr
//         else prev = prev.next
//         if (curr !== null) curr = curr.next
//     }

//     return dummy.next
// };

// printList(deleteDuplicates(createLinkedList([1, 2, 3, 3, 4, 4, 5])))

// que 10 leetcode -> 25 (hard)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// function reveseLL(start, end) {
//     let curr = start, prev = null
//     while (curr !== end) {
//         let temp = curr.next
//         curr.next = prev
//         prev = curr
//         curr = temp
//     }
//     return prev
// }
// var reverseKGroup = function (head, k) {

//     // itrative way TC = O(n), SC = O(1)
//     // if (k <= 1 || head === null || head.next === null) return head

//     // let dummy = new ListNode(0)
//     // dummy.next = head
//     // let groupPrev = dummy

//     // while (true) {
//     //     let kth = groupPrev
//     //     for (let i = 0; i < k && kth !== null; i++) {
//     //         kth = kth.next
//     //     }

//     //     if (kth === null) break
//     //     let groupNext = kth.next
//     //     let curr = groupPrev.next, prev = groupNext
//     //     while (curr !== groupNext) {
//     //         let temp = curr.next
//     //         curr.next = prev
//     //         prev = curr
//     //         curr = temp
//     //     }

//     //     let temp = groupPrev.next
//     //     groupPrev.next = kth
//     //     groupPrev = temp
//     // }

//     // return dummy.next

//     // recursive way TC = O(n), SC = O(n/k)

//     // if (k <= 1 || head === null || head.next === null) return head
//     // let start = head, end = head, i = 0
//     // while (i < k) {
//     //     if (end === null) return head
//     //     end = end.next
//     //     i++;
//     // }

//     // let newNode = reveseLL(start, end)
//     // start.next = reverseKGroup(end, k)
//     // return newNode

// };

// printList(reverseKGroup(createLinkedList([1, 2, 3, 4, 5, 6]), 3))

// que 88 leetcode -> 2

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//     let dummy = new ListNode(-1), temp = dummy
//     let carry = 0
//     while (l1 !== null || l2 !== null) {
//         let v1 = (l1 != null) ? l1.val : 0
//         let v2 = (l2 != null) ? l2.val : 0
//         let data = v1 + v2 + carry
//         carry = Math.floor(data / 10)
//         temp.next = new ListNode(data % 10)
//         temp = temp.next
//         if (l1 !== null) l1 = l1.next
//         if (l2 !== null) l2 = l2.next
//     }
//     if (carry > 0) {
//         temp.next = new ListNode(carry);
//     }
//     return dummy.next
// };

// TC = O(n), SC = O(n)

// let list1 = createLinkedList([9, 9, 9, 9, 9, 9, 9])
// let list2 = createLinkedList([9, 9, 9, 9])
// let addNum = addTwoNumbers(list1,list2)
// printList(addNum)