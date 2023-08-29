// https://leetcode.com/problems/richest-customer-wealth/
public class Solution {
    public int MaximumWealth(int[][] accounts) {
        int max = 0;
        for (int i = 0; i < accounts.Length; i++)
        {
            int currentMax = 0;
            for (int j = 0; j < accounts[i].Length; j++)
            {
                currentMax += accounts[i][j];
            }
            if (currentMax > max)
            {
                max = currentMax;
            }
        }
        return max;
    }
}