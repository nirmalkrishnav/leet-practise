// binary search
// to do
const binarySearch = (target, nums, start, end) => {
  let middleIndex = Math.floor(nums.length / 2);

  if (nums[middleIndex] === target) {
    return middleIndex;
  } else if (nums[middleIndex] >= nums[start]) {
    return binarySearch(target, nums, start, middleIndex);
  } else {
    return binarySearch(target, nums, middleIndex, end);
  }
};

// console.log(binarySearch(1, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(binarySearch(2, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(binarySearch(4, [1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 8));
// console.log(binarySearch(5, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(binarySearch(6, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(binarySearch(7, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(binarySearch(8, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(binarySearch(9, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
