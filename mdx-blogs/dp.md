## Dynamic Programming

- All about remembering the Past.
- Optimal Substructure
  - Can express bigger problem in small sub-problems of same type (Recurrence Relation).
  - This property is also available in Divide and Conquer, all recursion problems.  
- Overlapping Subproblem
  - This property is the giveaway that given problem is a DP Problem.
  
- 💎 - Important
- ✔  - Done
- 🌟 - Do once more

## Some Initialization Points 
-----------------------------

```cpp
  // In global scope
  vector<int> dp;
  int n;

  void solve (){
    // resetting dp array for every test case
    dp.clear();
    dp.resize(n);
    dp.assign(n,0); // or dp = vector<int>(n,0);
  }

  int main(){
    int t; cin>>t; while(t--) solve();
  }
```

### 1-D DP
----------

- Fibonacci Number ✔
  - Recursive, Time: O(2^n), Space: O(n) Stack Space.
  - Top Down(Recursive + Memoization) : Time: O(n), Space: O(n) Stack Space, O(n) dp array space. 
  - Bottom Up DP: Time: O(n), Space: O(n) dp array.
  - Bottom Up DP: Space optimzed:  Time: O(n), Space: O(1) as only last two past things are to be remembered.
  - `TODO:` Via Matrix Exponentiation: Time: O(logn), See in advance-ds.md file.
  - `TODO:` Binet's Formula, Works for small fib numbers. Formula = (phi^n - (-phi)^(-n)) / sqrt(5)
  - `TODO:` [Codeforces Hack](codeforces.com/blog/entry/14516/) - O(logn * loglogn)
    - If n is even, f(n) = f(n/2)*f(n/2) - f(n/2-1)* f(n/2-1) ;i.e. half^2 - (half-1)^2
    - If n is odd, f(n) = f(n/2)*f(n/2+1) - f(n/2)* f(n/2-1) ;i.e. half*(half+1) - half*(half-1)
  - Properties of Fibonacci Numbers
    1. **Sum of first N fibonacci number** = (n+2)th Fibonacci - 1
      - F0 + F1 + F2 + ... + Fn = F(n+2) - 1
    2. **Sum of square of first N fibonacci Numbers** is Product of F(n)*F(n+1)
      - (F0)^2 + (F1)^2 + (F2)^2 + ... + (Fn)^2 +  = Fn*F(n+1) 
    3. GCD of two fibonacci numbers(nth and mth) is the gcd(n,m)th Fibonacci number
      - gcd(Fn,Fm) = F(gcd(n,m))
- Min Coin Change ✔
- Min Steps to One ✔
- Count Number of Binary strings with no 1s together (no two ones are consecutive) ✔
- Friends Pairing ✔
- Maximum Subarray Sum ✔
  - Kadane's Algorithm 
- Ladder ✔
  - #ways to reach nth step given we can jump upto k steps. Also 121 and 211 are seperate cases.

### 2-D DP
----------

- Wines Problem ✔
- Catalan Number ✔
- Ways to make Coin change of money using coins array 🌟 ✔
  - Min Coin Change ✔ is a different problem as: there here we required to find the number of ways to make change, out of which one is the minimum answer and that was the min coin change problem.


