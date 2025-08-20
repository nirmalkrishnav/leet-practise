class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}
        for index, n in enumerate(nums):
            toFind = target - n
            if toFind in hashMap:
                return [hashMap[toFind], index]
            hashMap[n] = index
        return []