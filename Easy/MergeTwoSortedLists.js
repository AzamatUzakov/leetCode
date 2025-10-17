function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
var mergeTwoLists = function (list1, list2) {


    let curr = list1
    let curr2 = list2
    let dummy = new ListNode(-1)
    let tail = dummy

    while (curr !== null && curr2 !== null) {
        let min = Math.min(curr.val, curr2.val)
        tail.next = new ListNode(min)
        tail = tail.next
        if (curr.val < curr2.val) {
            curr = curr.next
        } else {
            curr2 = curr2.next

        }
    }
    tail.next = curr || curr2
    return dummy.next


};
console.log(
    mergeTwoLists(list1, list2)
);
