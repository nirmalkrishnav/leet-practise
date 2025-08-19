var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function middleNode(head) {
    var _a;
    var _b = [head, head], slow = _b[0], fast = _b[1];
    while (slow && fast && fast.next !== null) {
        fast = (_a = fast.next) === null || _a === void 0 ? void 0 : _a.next;
        slow = slow === null || slow === void 0 ? void 0 : slow.next;
    }
    return slow;
}
var six = new ListNode(6);
var five = new ListNode(5, six);
var f = new ListNode(4, five);
var th = new ListNode(3, f);
var two = new ListNode(2, th);
var one = new ListNode(1, two);
console.log("result", middleNode(one));
