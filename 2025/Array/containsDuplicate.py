  class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hash = Set()
        for n in numbs:
            if n in hash:
                return True
            hash.add(n)
        return False