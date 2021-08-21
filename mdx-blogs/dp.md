## Dynamic Programming - Coding Blocks Advance

- Optimal Substructure
- Overlapping Subproblem

- 💎 - Important
- ✔ - Done
- 🌟 - Do once more

### 1-D DP
----------

- Fibonacci Number ✔
  - Recursive, Time: O(2^n), Space: O(n) Stack Space
  - Top Down(Recursive + Memoization) : Time: O(n), Space: O(n) Stack Space, O(n) dp array space 
  - Bottom Up: Time: O(n), Space: O(n) dp array
  - Bottom Up Space optimzed:  Time: O(n), Space: O(1) as only last two past things are required to be remembered.
  - `TODO:` Via Matrix Exponentiation: Time: O(logn), See in advance-ds.md file.
  - `TODO:` Binet's Formula, Works for small fib numbers. Formula = (phi^n - (-phi)^(-n)) / sqrt(5)
  - `TODO:` Codeforces Hack(codeforces.com/blog/entry/14516/) - O(logn * loglogn)
    - If n is even , f(n) = f(n/2)*f(n/2) - f(n/2-1)* f(n/2-1) ; half^2 - (half-1)^2
    - If n is odd , f(n) = f(n/2)*f(n/2+1) - f(n/2)* f(n/2-1) ; half^(half+1) - half*(half-1)2
  
- Min Coin Change ✔
- Min Steps to One ✔
- Count Number of Binary strings with no 1s together(no two ones are consecutive) ✔
- Friends Pairing ✔
- Maximum Subarray Sum ✔
  - Kadane's Algorithm 
- Ladder ✔
  - #ways to reach nth step given we can jump upto k steps. Also 121 and 211 are seperate cases.

### 2-D DP
----------

- Wines Problem ✔
- Catalan Number ✔
- Ways to make change of money using coins array 🌟 ✔
  - Min Coin Change ✔ is a different problem as: In this question we need to find the number of ways to make change, out of which which one is the minimum was the min coin change problem.