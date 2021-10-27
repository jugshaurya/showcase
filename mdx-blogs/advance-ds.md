## Advance Datastructures and Algorithms For competitive Programming

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
      - gcd of two numbers doesn't change if we update larger number with reminder of two.
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
      - gcd of two numbers doesn't change, if we update larger number with difference of two.
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
  - Distributive Properties
    - (a + b) % m = (a % m + b % m ) % m
    - (a - b) % m = (a % m - b % m + m) % m
    - (a * b) % m = (a % m * b % m ) % m
    - (a / b) % m = (a * inverse(b))% m 
      - (a / b) % m  = (a % m * inverse(b) % m ) % m
      - (a / b) % m = (a % m * MMI(b,m)) % m

- inverse(b)%m is called **Modulo Multiplicative Inverse**.
  - Multiplicative Inverse of x is y, if xy = 1.
  - Modulo Multiplicative Inverse of x is y wrt m, if xy = 1 (mod m) or (xy)mod m = 1 or xy is congrent to 1 mod m.
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

- Modular Exponentiation. (Finding a^b mod m)
  - power(a,b,m)
    - Naive Approach : power(a,b,m) = (a * power(a,b,m)) modm
    - Log(exponent) Approach : 
      - power(a,b,m) = b is Even: (power(a,b/2,m)* power(a,b/2,m)) modm
      -              = b is Odd:  (a * power(a,b/2,m) * power(a,b/2,m)) modm
    - Dont forget to use a*b modm = (a mod m *b mod m) mod m

- Handling Values larger than long long via mod
  - Reprexsent value as string
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

## others

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
    - convex Hull
- String Algorithms
  - Naive
  - KMP