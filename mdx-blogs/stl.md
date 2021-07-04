## STL

- Containers
  - Simple (vector, list, pair, forward_list(singly linked list))
  - Container Adapter(build upon simple containers)(stack,queue, deque, heap, priority queue)
  - Associative(set, map, multimap, multiset, unordered_map, unordered_set)
    - unordered map/set hashing and has no-order, ordered map/set have an order and are implemented as self balancing bst.
- Algorithms
  - binary_search()
  - find()
  - reverse()
  - sort()
- Iterators (only 5 types)
  - An object(like pointer) that points to an element in container.
  - We use iterator to move through elements of container.
  - random access iterators are like pointer as we do arithmatic on pointer.
  - forward, bidirectional, input,output iterators only moves one at a time(+1, ++) and are not like pointers.

## STL Algorithms(More Functions)

```cpp
- max()
- min()
- INT_MAX (in #include<climits>)
- INT_MIN (in #include<climits>)
- *max_element(v.begin(), v.end()) // *max_element(arr, arr+n)
- accumulate(v.begin(), v.end(), 0) // ...same as above... // in <numeric>
- sort(v.begin(), v.end(), [bool_comparator]); // ...same as above... // in <algorithm>
	- sort(arr, arr+n, greater<int>);//sort in decreasing order
	- sort(v.begin(), v.end(), greater<int>);//sort in decreasing order
	- sort(v.begin(), v.end(), mycomp);//sort in decreasing order
		bool mycomp(pair a, pair b ){
			return a.second < b.second // sort according to second in increasing order
		}
-	reverse(str.begin(), str.end()) // reverse string

```
