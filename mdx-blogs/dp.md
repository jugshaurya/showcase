## Dynamic Programming - Coding Blocks Advance

- Optimal Substructure
- Overlapping Subproblem

- 💎 - Important
- ✔ - Done
- 🌟 - Do once more

### 1-D DP
----------

- Fibonacci Number ✔
  - Recursive, Time: O(2^n), Space: O(n) Stack Space.
  - Top Down(Recursive + Memoization) : Time: O(n), Space: O(n) Stack Space, O(n) dp array space. 
  - Bottom Up DP: Time: O(n), Space: O(n) dp array.
  - Bottom Up DP: Space optimzed:  Time: O(n), Space: O(1) as only last two past things are to be remembered.
  - `TODO:` Via Matrix Exponentiation: Time: O(logn), See in advance-ds.md file.
  - `TODO:` Binet's Formula, Works for small fib numbers. Formula = (phi^n - (-phi)^(-n)) / sqrt(5)
  - `TODO:` Codeforces Hack(codeforces.com/blog/entry/14516/) - O(logn * loglogn)
    - If n is even , f(n) = f(n/2)*f(n/2) - f(n/2-1)* f(n/2-1) ; half^2 - (half-1)^2
    - If n is odd , f(n) = f(n/2)*f(n/2+1) - f(n/2)* f(n/2-1) ; half^(half+1) - half*(half-1)2
  - Properties of Fibonacci Numbers
    1. **Sum of first N fibonacci number** = (n+2)th Fibonacci - 1
      - F0 + F1 + F2 + ... + Fn = F(n+2) - 1
    2. **Sum of square of first N fibonacci Numbers** is Product of F(n)*F(n+1)
      - (F0)^2 + (F1)^2 + (F2)^2 + ... + (Fn)^2 +  = Fn*F(n+1) 
    3. GCD of two fibonacci numbers(nth and mth) is the gcd(n,m)th Fibonacci number
      - gcd(Fn,Fm) = F(gcd(n,m))
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