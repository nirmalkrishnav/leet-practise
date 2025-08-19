class Solution:
    def validAnagram(self, s: str, t: str) -> bool:
        # # Solution 3
        # return sorted(s) == sorted(t)

        # solution 2
        return Counter(s) == Counter(t)
        # solution 1
        if len(s) != len(t):
            return False
        countS, countT = {}, {}

        for char in s:
            countS[char] = 1+ countS.get(char, 0)  
        for char in t:
            countT[char] = 1+ countT.get(char, 0)  

        return countS == countT

        