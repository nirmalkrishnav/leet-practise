//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/submissions/
function numberOfSteps(num: number): number {
    let steps: number = 0;
    while (num != 0) {
        num = num % 2 === 0 ? num / 2 : num - 1;
        steps++;
    }

    return steps;
};