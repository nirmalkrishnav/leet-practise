var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function middleNode(head) {
    var arr = [];
    if (head === null)
        return head;
    arr.push(head);
    while (head.next != null) {
        head = head.next;
        arr.push(head);
    }
    console.log(arr);
    if (arr.length % 2 === 0) {
        return arr[arr.length / 2];
    }
    else {
        return arr[Math.ceil(arr.length / 2) - 1];
    }
}
var six = new ListNode(5);
var five = new ListNode(5, six);
var f = new ListNode(4, five);
var th = new ListNode(3, f);
var two = new ListNode(2, th);
var one = new ListNode(1, two);
console.log(middleNode(one));
