function search(nums, target) {
    return findIndex(target, 0, nums.length - 1, nums);
}
function findIndex(target, start, end, nums) {
    if (start > end)
        return -1;
    var middleIndex = Math.floor((start + end) / 2);
    if (nums[middleIndex] === target)
        return middleIndex;
    if (nums[middleIndex] > target) {
        return findIndex(target, start, middleIndex - 1, nums);
    }
    else {
        return findIndex(target, middleIndex + 1, end, nums);
    }
}
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
