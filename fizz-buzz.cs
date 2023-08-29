// https://leetcode.com/problems/fizz-buzz/submissions/1035265809/
public class Solution {
    public IList<string> FizzBuzz(int n) {
         List<string> result = new List<string>();
        for (int i = 1; i <= n; i++)
        {
            string item = (i%3 == 0, i%5 ==0) switch{
                (true, true) => "FizzBuzz",
                (true, false) => "Fizz",
                (false, true) => "Buzz",
                (false, false) => i.ToString(),
            };
            result.Add(item);
        }
        return result;
    }
}