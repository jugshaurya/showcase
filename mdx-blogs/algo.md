## Time and Space Complexity

- Best Case (Omege) -> Lower Bound
- Average Case (theta) -> Exact Bound
- Worst Case (Big Oh) -> upper Bound

- Small Omega
- Small oh

> > max global array can be of 10^8 size
> > In 1 sec, no of operations done = 2*10^8, but to be on safer side, take it 5*10^7.

|--|--|--|
|n < 10 | = | n!, n^7, n^6|
|n < 20 | = | (2^n)*n, n^5|
|n < 80 | = | n^4|
|n < 400 | = | n^3|
|n < 7500 | = | n^2|
|n < 10^5 | = | n*sqrt(n)|
|n < 5*(10^5) | = | n*log(n)|
|n < 5*10^6 | = | n |
|n < 10^12 | = | sqrt(n), sqrt(n)*logn |
|n < 10^18 | = | log(n), O(1), log^2(n)... |
`terms used -> n,logn,log^2(n), sqrt(n), n^2`

- order of growth

```cpp
c < logn < logn*logn < n^(1/3) < n^(1/2) < n < n^2 < n^3 < 2^n <  n^n
```

- Space complexity counts the stack space used in recursion as well.

## Master's Theorem(**Trick**)

`T(n) = aT(n/b) + c`
where c can be anything [O((n^k)*(log^p(n)))]

- calculate n^(log_a[base_b])
- if it is same as c then return `c*logn`
- else return bigger of them

## Stabilty & Inplace (Sorting)

- elements in new array appears in same order as they were in original.

- Stable Sort

  - **Bubble Sort**,
    - optimized Bubble Sort(isSwapped flag)
    - `Best case complexity O(n)`)
    - `Inplace`
  - **Insertion Sort**
    -(`Best case complexity O(n)`)
    - (`Inplace`)
  - **Merge Sort**
    - (Divide and Conquer),
    - (`O(nlogn) in time and O(n) in space`)
    - (`Not Inplace`)
    - used in External Sorting [no need to bring complete array at a time to sort, can divide array into parts that can fit into RAM, and sort individually]

- Unstable Sort
  - **Selection Sort**
    - (`Inplace`)
    - (`all case O(n^2)`)
  - **Quick Sort**
    - (Inplace , if no stack space is considered as used in recursion, otherwise not-inplace\*),
    - can be made stable at the cost of inplace by using extra space by taking naive approach to write partition function which uses extra O(n) space.
    - Tail recursive hence is more optimizated for complier as compiler can do tail call elimination
    - (conclusion: space is O(n), because of stack space)
  - **Heap Sort**
    - O(nlogn) in all cases
  - **Counting Sort**
    - O(n+range_of_numbers), made stable by keeping count of elements <= the ith element in original array.
    - **not a comparison based**, **not inplace**, extra O(n+k) space, k for counting occurences and n for output array which will then be copied to original array.
    - useful only when k(range of numbers) is linear to n(n/2, 2n, 5), otherwise counting sort becomes n^2 or worst depending upon k=n^2 or n^3.
    - used as a subroutine for radix sort.
  - **Radix Sort**
    - works even when range of numbers is very large.
    - works in linaer time, even when numbers are in range(n^2, n^3).
    - use counting sort as subroutine.
    - `O(d*(n+k))`, d is number of digits in largest number, k is biggest digit in numbers(base of numbers, k=b)(usually 10 so can be ignored), `O(d*n)`.
    - space is same as of counting sort.O(n+k) and k=b
  - **Bucket Sort**
    - O(n) best case, O(used_sort_algo_time_to sort_individual_bucket)

## Stack(infix prefix algo and points)

- `Advantage of prefix and postfix expressions`

  - can be easily evaluated by writing a program that traverses the given (prefix/postfix)expression exactly once using stack.
  - Don't requires parenthesis, precedence rules, associativity rules.

- `Infix to postfix algo`
- If current element is of higher precedence(heavy one), push to stack
- If current element is of lower precedence (light one), pop till current element becomes heavy.
- Note: we are comparing curernt element with top of stack for precedence.
- In evaluating postfix expression for integer result, first popped element will be the second operand and second popped element will be the first operand.

- `Infix to prefix algo`

  - just traverse the infux string from reverse and return the reverse of what you get, rest algo is same as above.
  - In evaluating prefix expression for integer result, first popped element will be the first operand and second popped element will be the second operand(opposite of postfix).

- Conclusion:
  - bhari hai toh stack mai daldo, bina kuch kiye.😁
  - halka hai toh pop karte raho jab tak wo halka bhari na hojaye.😁

## Graphs

- G = (V,E)
- Directed vs Undirected
- Weighted vs unweighted
- Path
  - A physical link and repeting the link is not a concept
  - v1, v2, v3, v5, v4 is a path.(No repetition)
  - v1, v2, v3, v5, v1, v2 is not a path.
- Walk
  - We can walk along the path & can repeat the path while walking
  - v1, v2, v3, v5, v4 is also a walk.
  - v1, v2, v3, v5, v1, v2 is a walk.
- Graph Representations

  - Adjacency Matrix
    - Space: O(V\*V)
    - Operations:
      - Check if u and v are adjacent is O(1).
      - Finding vertices adjacent to u is O(V).
      - Finding degree of u is O(V).
      - Add/Delete an edge is O(1)
  - Adjacency List

    - Space: O(V+E) <!-- V for array size and E for list in array -->
    - can be implemented using dynamic size 2D-array or linked list.
    - Operations:
      - Check if u and v are adjacent is O(V).
      - Finding vertices adjacent to u is O(degree(u)).
      - Finding degree of u is O(1) `as internal arrays size is stored in v.size()`.
      - Add/Delete an edge is O(1).
    - Example
      - `vector<int> adjList[V]` (array of vectors)
      - or `vector<vector<int> > v` (vector of vectors)

  - Adjacency list are far more suited than Adjacency mAtrix as most of the scenarios have sparse graphs in real life.

- BFS

  - helps in finding the shortest pAth B/w u and v in an unweighted Graph.
    - Shortest pAth B/w u and v in an weighted Graph is done using dijistra, whihch is similar to bfs, it is just that it uses priority queue rather than a queue to find the shortest path.

- **Cycle Detection can be done using bfs or dfs**.
  - how ? (in undirected graphs): see for a vertex, if the vertices adjacent are already visited or not but ignoring the parent vertex.
    - `Conclusion: check for vertices visitation accept the parent one.`
  - how ? (in directed graphs):
    - directed algo fails for `x-->y<--z` graph.
    - using dfs: we look for the backedge, means while doing dfs we check if adjacent vertex is already availble in recusrion stack or not(maintains an boolean array for what we have pushed to stack till now).
    - `Conclusion: check for backedge, is vertex already in recusion-stack.`
    - using bfs: `TODO`
- Topological sorting (dfs)

- **Handling vertices with value other than integer like strings as the name of city.**
  - We store the city name and a index in hashmap. (So that finding the index of a city is constant)
  - along with index and city name in array.(So that finding city from index is constant)

## Math

`LCM = (a*b)/(gcd(a,b))`

- GCD via Euclid theorem in sqrt(max(a,b))
  rules - gcd(a,0) = a - gcd(0,a) = a - gcd of two number don't change, if we update larger number with differnce of numbers.

  - Euclid algo of subtraction

  ```
  int gcd(int a, int b){
  	if(b == 0) return a
  	return gcd(b, a%b);
  }
  ```

  - Euclid algo of multiplication

  ```
  int gcd(int a, int b){
  	if(b == 0) return a
  	return gcd(b, abs(a-b));
  }
  ```

- stop feeling Sorry for Yourself and do it.
- We need to mark something visitied, so that next time if we come back to the same thing we know that we already came there once.
