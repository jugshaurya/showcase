## Dynamic Programming

- All about remembering the Past.
- `Optimal Substructure`
  - Can express bigger problem in small sub-problems of same type (Recurrence Relation).
  - This property is also available in Divide and Conquer, all recursion problems.  
- `Overlapping Subproblem`
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



### General structure of Dp functions
----------

```cpp
int dp[N][M]; // dp array
// function with state and constraints
// In knapsack, 
// form state:  the index we are currently working in our problem.
// constraint state:  W, we cannot go above bags Weight.
function rec (<form state(s)>, <constraint state(s)>){ 
  // Pruning cases
  // Base cases
  // cache check
  // recursive code and computation
  // save and return
}
```

- Note:
  - Time complexity of DP problems = `#states * (1 + Average cost of transitions)`
- Transitions means number of recursive calls.
- Cost of Transition = extra time taken besides recusive calls.
- #states is basically dp array size.

- Note2: 
  - In DP problems, we need to think/practise on finding states(both form and constraints) and transitions needed to solve the problem.

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



- #ways to get change of n, withour permutations
  - dp(i, taken) = dp(i-taken, taken) + dp(i, taken + 1);
- Maximum subarray sum
  - dp(ending_at_i) = arr[i] + max(0, dp(i-1));
- Knapsack
  - 0/1
  - Fractional Knapsack
  - Colourful Knapsack

- LIS
  - n^2
  - nlogn approach [** To be Done]

- LCS with one array having only disctinct elements
  - reduces to LIS
- General LCS 
  - O(n^2)

- Selecting items from either ends
  - dp(i,j)