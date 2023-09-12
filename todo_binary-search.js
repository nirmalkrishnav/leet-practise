const main = () => {
  let nums = [1, 2, 3, 14, 15, 16, 27];
  let target = 1;
  let result = binarySearch(0, nums.length - 1, target, nums);
  console.log('\n',result);
};

const binarySearch = (start, end, target, nums) => {
  let middleIndex = Math.floor((start+end)/2);
  if (start > end) {
    return -1;
  }

  if (nums[middleIndex] === target) {
    return middleIndex;
  } else if (target < nums[middleIndex]) {
    return binarySearch(start, middleIndex - 1, target, nums);
  } else {
    return binarySearch(middleIndex + 1, end, target, nums);
  }
};

main();