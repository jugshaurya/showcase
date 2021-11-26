## Advance DataStructures and Algorithms For Competitive Programming

#### Number Theory/ Math

- Prime Numbers
  - Go till Sqrt(n)
  ```cpp
    void isPrime(int n){
      if (n==1) return false;
      for(int i=2; i*i<=n ; i++){ // optimization - go till sqrt(n)
        if(n%i==0){
          return false;
        }
      } 
      return true;
    }
  ```
  - If a number is prime >=5,  then either is of form 6n-1 or 6n+1. But not vice-versa(25,49 are not prime)
  - Sieve of Erathosthenes (Find all prime numbers from 0 to N in NloglogN)
    ```cpp
      void generatePrimeSieve(int n){
        const int arrSize = n+1;
        bool isPrimeSieve[arrSize]; // 0 to n values
        fill(isPrimeSieve, isPrimeSieve+arrSize, true);
        isPrimeSieve[0] = false; // 0 is not a prime number
        isPrimeSieve[1] = false; // 1 is not a prime number
        for(int i=2; i*i<=n; i++){
          if(isPrimeSieve[i]){
            // go from i*i to n with step of i. 
            for(int j= i*i ; j<=n; j+=i){
              // going over i^2, i^2+i, i^2+2i, i^2+3i ... n
              isPrimeSieve[j] = false;
            }
          }
        }
        // printing all prime numbers
        for(int i=2; i<=n; i++){
          if(isPrimeSieve[i]) {
            cout<<i <<",";
          }
        }
        cout<<endl;
      }
    ```
  - Segmented Sieve (Find all prime numbers in the range [L, U], where L, U <10^12 and L-U <=10^6) 
    - Problem with Normal Sieve is that it needs to form an array of Size N(10^12 here). Now this limits the range of N as we cannot create an array of Size N as big as 10^12 in memory. Hence we use a Segmented Sieve.
    - Step1: Calculate all primes till sqrtN and mark a multiple of these primes in the segmented Sieve array as false.
    - Step2: Just map array index to the range. 0th index to L, 1st to L+1, and so on ... 
    - Hence need to create an array of size U-L only, which is 10^6, which we can create in memory.

- GCD/HCF via Euclid theorem.
  - Euclid algo of multiplication: `BEST`: O(log min(a,b)) 
    - Facts
      - If one is 0, ans is the other one.  
      - gcd of two numbers doesn't change if we update a larger number with a reminder of two.
      ```
      int gcd(int a, int b){
        if(b == 0) return a
        if(a == 0) return b
        return gcd(b, a%b);
      }
      ```
  - Euclid algo of subtraction - Time complexity is O(max(a,b)). If a=1 and b=n then it will run n times.
    - Facts
      - If one is 0, ans is the other one.  
      - gcd of two numbers doesn't change if we update a larger number with the difference of two.
      ```
      int gcd(int a, int b){
        if(b == 0) return a
        if(a == 0) return b
        return gcd(b, abs(a-b));
      }
      ```

- `LCM = (a*b)/(gcd(a,b))`

- Extended Euclidean Algorithm O(log min(a,b))
  - It gives us the solution (x,y) such that `Ax+ By = gcd(A,B)` holds
    - Solving it
      ```
      Ax+ By = gcd(A,B) -------- 1
      [as we know gcd(A,B) = gcd(B,A%B)] ---- 2 
      gcd(B,A%B) = Bx' + (A%B)y' from 1
      [we Also know that A%B = A- floor(A/B)*B] from Quotient-remainder theorme 
      gcd(B,A%B) = Bx' + (A - floor(A/B)*B)y'
      gcd(B,A%B) = B(x' - y'*floor(A/B)) + Ay'
      [from 2]
      we get, Ax + By = B(x' - y'*floor(A/B)) + Ay'
      ```

      ```
      => x = y' and
      => y = x' - y'*floor(A/B)
      ```
  - Helps us find the multiplicative Modulo Inverse of a Number


- Modular Arithmetic

  - Meaning of A congruent to B mod C `[A ~= B mod C]` => A is equal to B in the modular domain of C.
  - Example `7 ~= 2 mod 5` => `7mod5 ==? 2mod5`. Ans is YES.
  - Since AmodC = BmodC = r,
  - => A mod C = q1*C + r 
  - => B mod C = q2*C + r 
  - => A-B = (q1-q2)*C => `C divides (A-B) completely` => `C divides (B-A) completely` => A = B+k*C for some k. 

  - Distributive Properties
    - (a + b) % m = (a % m + b % m ) % m
    - (a - b) % m = ((a % m - b % m) % m + m) % m; 
      - here `(a % m - b % m)` part can be -ve. 
      - example -3 mod 2 gives you -1. => add 2 to it and then take mod.
    - (a * b) % m = (a % m * b % m ) % m
      - (a ^ b) % m = ((a % m)^b) % m; here ^ means power.
    - (a / b) % m = (a * inverse(b))% m 
      - (a / b) % m  = (a % m * inverse(b) % m ) % m
      - (a / b) % m = (a % m * MMI(b,m)) % m

  - inverse(b)%m is called **Modulo Multiplicative Inverse**.
    - Multiplicative Inverse of x is y, if xy = 1.
    - Modulo Multiplicative Inverse of x is y wrt m, if xy = 1 (mod m) or (xy)mod m = 1 modm or xy is congruent to 1 mod m.
    - Naive Approach O(m): 
      - To find the y. we can put y from (0 to m-1) in xy mod m and check which one is giving 1.That will the MMI of x wrt m.
      - Ex- 2 is MMI of 3 wrt 5.
    - Note: For every value, MMI may not Exist. Just like inverse(0) does not exist.
    - **If gcd(x,m)=1, then only MMI of x exist wrt m**.(A & m should be co-prime)
    - **Extended Euclidean Algorthim Approach to find MMI: Optimized** O(log(min(A,M)))
      - We know that Ax + By = gcd(A,B) holds for some (x,y)
      - We want to find out MMI of A wrt to M then:-
      - => Ax + My = gcd(A,M) = 1(so that MMI exist); taking mod on both side
      - => (Ax + My) mod M = 1 mod M
      - => Ax mod M + My mod M = 1 mod M
      - => Ax mod M + 0 = 1 mod M
      - => Ax mod M = 1 mod M => x is the MMI of A as Ax = 1 mod M
      - We can find that x using Extended Euclidean Algo(EEA).
      - Conclusion: To find MMI of A wrt M. 
        - Check gcd(A,M) = 1
        - & Find x in Ax + My = 1 using EEA
        - x = y' & y =  x' - (A/M) * y'
      - ONce we get the MMI we can put it into (a / b) % m = (a % m * MMI(b,m)) % m and get the answer.
      - IF MMI is coming -ve add m to it.

  - Fermet's Little Theorem
    - To find MMI(a,m). If m is prime p.
    - then `p always divides a^p - a`. ------- (1)
    - also `a^(p-2) mod p is your MMI(a,p)`. 
    - How ?
    - we want a*X = 1 mod p right? ------ (2)
    - and we know a^p - a ~= 0 mod p (via 1)
    - => a*(a^(p-1) - 1) ~= 0 mod p
    - since a and p are coprime. p must be dividing (a^(p-1) - 1).
    - =>  (a^(p-1) - 1) ~= 0 mod p 
    - adding 1 on both side
    - => a^(p-1) ~= 1 mod p 
    - => a*(a^(p-1)) mod p = 1 mod p ---- (3) 
    - Comparing (2) and (3)
    - `MMI(a,p) = X = a^(p-2) mod p`.
    - To calculate this term we need to learn Modular Exponentiation.
    - let say i want to calulate 2/3 mod 1e9+7
    - since m is prime. ans = 2*(3^(1e9 + 7 - 2)mod 1e9+7) 

- Modular Exponentiation. (Finding a^b mod m)
  - power(a,b,m)
    - Naive Approach : power(a,b,m) = (a * power(a,b,m)) modm -> O(b)
    - Log(b) Approach and recursive: 
      - power(a,b,m) = b is Even: (power(a,b/2,m)* power(a,b/2,m)) modm
      -              = b is Odd:  (a * power(a,b/2,m) * power(a,b/2,m)) modm
    - Don't forget to use a*b modm = (a modm * b modm) modm
    - via Binary Decimal system[Log(b) and iterative version of recursive version]. put b in binary do get logb terms. and multiple (a^2^ith) binary digit in a for loop.
    ```cpp
    void calpow(int a, int b, int m){
      int ans = 1;
      while (b) {
        int lastBinaryDigit =  b&1;
        ans = (1LL*ans *(lastBinaryDigit ? a : 1)) %m ; // option 1: 1LL to typecast ans into long long
        a = (1LL*a*a) %m; // option2: We could have taken ans and a as long long instead of int.
        b = b >>1; 
      }
      return ans;
    }

    // option 2
    void calpow(long long a, long long b, long long m){
      long long ans = 1;
      while (b) {
        long long lastBinaryDigit =  b&1;
        ans = ans *(lastBinaryDigit ? a : 1) %m ; 
        a = a*a %m; 
        b = b >>1;  
      }
      return ans;
    }
    ``` 

- Calculating `ncr mod p`
  - ncr is the number of ways of `choosing r` objects out of `n distinct` elements.
  - Naive ways(Factorial Method) is pretty straightfroward, 
    - just use for loop to calculate factorial -> O(n). 
    - Factorial[0] = 1, Factorial[i] = (Factorial[i-1]*i)%p
    - Note: P should be prime for Inverse to exist.(So we cann't use this method if P is not prime.)
    - calculate MMI of denominators via fermet's result -> O(logp).
    - total = O(nlogp) = O(nlogp)
    - Let we have no. of testcases = 1e5 and for each test case n can go upto 1e5.
      - we get TLE.
      - Major thing that was O(n) was calculating factorial via for loop.
      - pre-computation/caching Approach: calcute factorial of numbers till N in an array. and then use them in calculation for each test case.   
      - we can also precompute the MMI of numbers to make everything for a test case O(1). 
      - Time Complexity: O(t*(1 + logp)) < 1e8. No TLE 😁.
  - Pascal's triangle Method 
    - ncr = (n-1)c(r-1) + (n-1)c(r) i.e sum of previous rows same column and column-1 elements. 
    ``` 
          1
        1 2 1
       1 3 3 1
      1 4 6 4 1
     1 5 10 10 5 1
    ```
    - can maintain a matrix to store these values O(n^2).so use when n<=4000
    - can work for any p even if it is not prime, i.e composite.

  - Multiplication Method
    - works when `n can be of very big order(10^18)` but either `r` or `n-r` is small(< 10^6).
    - we can cancel many numerator terms as either r or n-r will be of order n. 
    - Here also P must be prime(same reason as above, there will be terms in denominator).
  
- Some formulas of Binomial Coefficients
  - nc0 + nc1 + nc2 +.....ncn = 2^n
  - 0*nc0 + 1*nc1 + 2*nc2 +.....ncn = n*2^(n-1)
  - kck + (k+1)ck + (k+2)ck +.....nck = (n+1)c(k+1)
  - nC0 + (n-1)C1+ (n-2)C2+ (n-3)C3 + ... + (n/2)Cn/2 = Fib(n+1)
  - number of solutions of x1+x2+x3+...xn = R, where each 0<=xi<=R.(Bar and stick formula)
    - `# solutions = (n+R-1)C(n-1) = (n+R-1)CR `
  - Lucas Theorem - works for small p and large n, **LATER***

- Handling Values larger than long long via mod
  - Represent value as string
  - now how to take mod of string number?
  - start from left and do result = (result*10 + (int)(str[i]-'0'))%m, for all i's.
  ```
    string num = "2141904793704971047934701374"
    int mod = 101;
    int result = 0;
    for(int i = 0; str[i]!='\0'; i++){
      result = (result*10 + (int)(str[i]-'0')) % m;
    }
    cout<<result<<endl; 
  ```
  - or use Python 😁


#### Prefix and Partial Sums

- **Prefix Sums** `[for range Queries, no updation between queries]`: 
  - Precalculating the prefixes of array is prefix Sums in which operators allows removing contribution(+,^ and more).
  - Conclusion. Via prefix sum we can find Σi (Ai), where i goes from l to r in O(1). via precalculation of prefix sums. where Ai can be Ai, i*A[i], (2^i)*A[i] or some other expression.
  
- **Partial sums** `[for range updation, and no queries in between]`: 
  - Let we have to add(update) X to every number in a range [L,R] of an array.
  - we do add +X to arr[L] and -X to arr[R+1] for every query
  - then we create a prefix sum array which would be the final answer.
  - This is called partial sums as we are storing partial sums on index L and R+1 part of array. and later we are gonna use them.

- For both range queries and updation, we use Segment/Fenwick Tree.

#### Other Concepts**

- [`Exchange Arguments`](http://www.cs.cornell.edu/courses/cs482/2007su/exchange.pdf)
  - Greedy algorithms generally take the following form. Select a candidate greedily according to some  heuristic, and add it to your current solution if doing so doesn’t corrupt feasibility. Repeat if not finished. ”Greedy Exchange” is one of the techniques used in proving the correctness of greedy algorithms. The idea of a greedy exchange proof is to incrementally modify a solution produced by any other algorithm into the solution produced by your greedy algorithm in a way that doesn’t worsen the solution’s quality. Thus the quality of your solution is at least as great as that of any other solution. In particular, it is at least as great as an optimal solution, and thus, your algorithm does in fact return an optimal solution.
  - Main Steps
    - After describing your algorithm, the 3 main steps for a greedy exchange argument proof are as follows:
    - Step 1: Label your algorithm’s solution, and a general solution. For example, let A = {a1, a2,...,ak} be the solution generated by your algorithm, and let O = {o1, o2,...,om} be an arbitrary (or optimal) feasible solution.
    - Step 2: Compare greedy with other solution. Assume that your arbitrary/optimal solution is not the same as your greedy solution (since otherwise, you are done). Typically, you can isolate a simple example of this difference, such as one of the following:
      • there is an element of O that is not in A and an element of A that is not in O, or
      • there are 2 consecutive elements in O in a different order than they are in A (i.e. there is an inversion).
    - Step 3: Exchange. Swap the elements in question in O (either swap one element out and another in for the first case, or swap the order of the elements in the second case), and argue that you have a solution that is no worse than before. Then argue that if you continue swapping, you can eliminate all differences between O and A in a polynomial number of steps without worsening the quality of the solution. Thus, the greedy solution produced is just as good as any optimal (or arbitrary) solution, and hence is optimal itself.
  - Comments
    - • Be careful about using proofs by contradiction starting with the assumption G 6= O. Just because your greedy solution is not equal to the selected optimal solution does not mean that greedy is not optimal – there could be many optimal solutions, and your greedy one just isn’t the optimal solution you selected. So assuming G 6= O may not get you any contradiction at all, even if greedy works.
    - • You need to argue why the 2 elements you’re swapping even exist out of order, or exist in O but not in A, etc.
    - • Remember you need to argue that multiple swaps can get you from your selected solution to greedy, as one single swap will usually not suffice. Also, make sure that any step you make (and not just the first one) doesn’t hurt the solution quality. 
    
  - Example: Minimum Spanning Tree
    - We are given a graph G = (V,E), with costs on the edges, and we want to find a spanning tree of minimum cost. We use Kruskal’s algorithm, which sorts the edges in order of increasing cost, and tries to add them in that order, leaving edges out only if they create a cycle with the previously selected edges.
    - Proof of Correctness for Kruskal’s Algorithm: Let T = (V,F) be the spanning tree produced by Kruskal’s algorithm, and let T∗ = (V,F∗) be a minimum spanning tree. If T is not optimal then F∗ 6= F, and there is an edge e ∈ F∗ such that e /∈ F. Then e creates a cycle C in the graph T + e, and at least one edge f of this cycle crosses the cut defined by T∗ − e. Furthermore, the reason e is not in F must be that when the algorithm considered adding e, the rest of C was already in the tree. Since we consider edges in increasing order of cost, this means that e must be the most expensive edge in C, and so cost(f) ≤ cost(e). If we add the edge f to the graph T∗ − {e}, then we reconnect the graph and create a spanning tree.
    - Also, cost(T∗ − {e}∪{f}) = cost(T∗) −cost(e) +cost(f) ≤ cost(T∗), and so we have created a new spanning tree of no more cost than T∗, but with one more edge in common with T. We can do this for every edge that differs between T and T∗. The two trees differ on at most all n − 1 edges, so after n − 1 steps we obtain the tree T of no more cost than T∗. This contradicts the assumption that T was not optimal.



#### Binary Search

- try to map questoin to check() function which makes question answer a monotonic function.


#### Others

- Segment Trees
- Fenwick Tree
- Tries
- Game Theory
  - Grundy Numbers
  - Sprunge Grundy Numbers
  - Game of Nim
  - MinMax Algorithm
- Computational Geometry
  - vectors
    - dot product
    - cross product
    - convex hull
- String Algorithms
  - Naive
  - KMP