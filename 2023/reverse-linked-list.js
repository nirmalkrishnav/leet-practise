var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function reverseList(head) {
    var previous = null;
    var current = head;
    if (current !== null) {
        var newNext = current.next;
        current.next = previous;
        previous = current;
        current = newNext;
    }
    return previous;
}
function reverseList2(head) {
    var prev = null;
    while (head) {
        prev = new ListNode(head.val, prev);
        head = head.next;
        console.log(prev);
    }
    return prev;
}
var three = new ListNode(3, null);
var two = new ListNode(2, three);
var one = new ListNode(1, two);
reverseList2(one);
