## STL

- Containers

  - Simple/sequence Containers

    - (vector, list, pair, forward_list(singly linked list))

  - Container Adapter/ Derived Containers

    - Dont support iterators hence to print the content use while container is empty thing.
    - (build upon simple containers)
    - (stack,queue, deque, heap, priority queue)

  - Associative Containers

    - (set, map, multimap, multiset, unordered_map, unordered_set)
    - unordered map/set uses hashing and has no-order,
    - ordered map/set have an order and are implemented as self balancing bst.

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

## Vector

- Dynamic Size
- Rich Library functions
- Easy to know size via .size()
- No need to pass size to function
- can be returned from array
- Initialized with default values
- can copy a vector to other via v1=v2
- passed by value to function. so if you want to modify the vector make sure to use & and make vector pass by reference.

```cpp
	vector<int> v;
	// vector size
	v.size();
	// looping over vector
	for (int i = 0; i < v.size(); ++i){
		cout<<v[i]<<" ";
	}

	// looping(no updation) via for each loop
	for (auto x: v){
		x+=10; // will not modify vector
		cout<<x<<" ";
	}
	// looping(`updation => use reference`) via for each loop
	for (auto &x: v){ // & also help in avoiding copying larger objects.
		x+=10; // will `modify` vector
		// cout<<x<<" ";
	}
	// looping via iterator
	vector<int>::iterator vit;
	for(vit=v.begin(); vit!=v.end(); vit++){
		cout<<*vit<<" ";
	}
	// vector initialization
	vector<int> vec= {10,20,30,40};
	vector<int> vec{10,20,30,40}; // no equal sign
	vector<int> vec2(10,5) // 10 elements each with 5 value

  functions same as c++strings.Almost all. see in [cpp blog]("./cpp.md")
```

- Internal Implementation be like

```cpp
#include <iostream>
using namespace std;
class Vector {
  int *arr;
  int num_elements;
  int capacity;

public:
  Vector(int size) {
    arr = new int[size];
    num_elements = 0;
    capacity = size;
  }
  void insert(int val) {
    if(num_elements < capacity) {
        arr[num_elements]=val;
        num_elements++;
    } else {
        resize();
        arr[num_elements]=val;
        num_elements++;
    }
  }

  int getAt(int index){
    return arr[index];
  }

  void resize() {
    int* tempArr=new int[capacity*2];
    capacity*=2;

    for(int i=0; i<num_elements; i++) {
        tempArr[i]=arr[i];
    }

    delete [] arr;
    arr=tempArr;
  }

  int length() {
    return num_elements;
  }

  void print() {
    for(int i=0; i<num_elements; i++)
        cout << arr[i] << " ";
    cout << endl;
  }
};
```

## list and forward-list

```cpp
	list<int> l; // doubly linked list
	forward_list<int> fl; // singly linked list
```

## deque

```cpp
deque<int> dq;
dq.push_front(10);
dq.pop_front(20);
dq.push_back(10);
dq.pop_back(10);
```

## Stack

- (container Adapter uses queue as underline container)
- inside <stack>
  - push()
  - top()
  - pop()
  - size()
  - empty()

```cpp
  stack<int> s;
  s.push(90)
  // use while stack is not empty loop to print the stack.
  auto scopy = s;
	while(!scopy.empty()){
		cout<<scopy.top()<<" ";
		scopy.pop();
	}
	cout<<endl;
```

## Queue

- (Container Adapter based on deque)
- inside <queue>
  - queue<int> q;
  - push()
  - pop()
  - empty()
  - size()
  - front()
  - back()

## Priority Queue or heap

- A priority queue is just like a normal queue data structure except that each element inserted is associated with a “priority”.
- It supports the usual push(), pop(), top() etc operations, but is specifically designed so that its first element is always the greatest of the elements it contains, i.e. max heap.
- In STL, priority queues take three template parameters:

```cpp
template <class T, class Container = vector<T>, class Compare = less<typename Container::value_type>>
class priority_queue;
```

- The first element of the template defines the class of each element. It can be user-defined classes or primitive data-types. Like in you case it can be int, float or double.
- The second element defines the container to be used to store the elements. The standard container classes std::vector and std::dequeue fulfill these requirements. It is usually the vector of the class defined in the first argument. Like in our case it can be vector<int>, vector<float>, vector<double>.
- The third element is the comparative class. By default it is less<T> but can be changed to suit your need. For min heap it can be changed to greater<T>.
- inside <queue> header file
- using vector as underline container

  - `priority_queue<int> pq;` <!-- default is max heap -->
  - `priority_queue<int, vector<int> , greater<int> > pq;` <!-- min heap -->
  - push() => O(logn)
  - pop() => O(logn)
  - top() => O(1))
  - empty() => O(1)
  - size() => O(1)

- **Important**
  - `pqmax pq(arr,arr+n)` => creates a max heap from an array.
    - This approach is better as time complexity to build heap is O(n). It builds heap using bottom-up approach which is O(n).
      -  It does it as: Creating a array and putting all array elements in it. Then going backward from last internal node(floor(n/2)), it calls heapify(). = Bottom up approach.
      - Proof: Let Tree is Perfect tree, which is also a CBT right? Yes. Evry Perfect tree is a CBT
      - then all internal nodes at till h-1 and at h there will all be leaves node. If we look what we are doing
      ```cpp
      <!-- Code:  -->
      for every node from floor(n/2) to 1:
        heapify(node)
      ```
      - We can say for nodes at height h-1(#nodes = 2^(h-2); assuming heights starts from 1.). We call heapify at max 1 time only. 
      - for nodes at height h-2(#nodes = 2^(h-3)). We call heapify at max 2 time only.  and so on.
      - worst case Time will be
      - 2^(h-2) + [2^(h-3)]*2 + 2^(h-4)*3 + .... = 2^(h-2) * (1+ 2/2^1 + 3/2^2 + 4/2^3 + ...)
      - Also we know total number of nodes = n = 2^h - 1
      - (1+ 2/2^1 + 3/2^2 + 4/2^3 + ...) approximately 3
      - Hence, Complexity is O(n). Woof! Phew!
    - earlier approach of pushing elements one by one is costlier and it will be O(nlogn) (logi being for each insertion), similar when printing heap, nlogn time.

- In CBT. total number of internal nodes are floor(n/2)
- It also implies leaves starts from floor(n/2) + 1 and goes till n. 

- Custom Sorting in PQ: Have to use Comparotr class/struct and implement () opearator

  ```cpp
    struct myCmp {
      bool operator()(Pair a , Pair b) {
        return a.second > b.second;
      }
    };

    priority_queue<Pair, vector<Pair>, myCmp> pq;
    pq.push({100, 20});
    pq.push({150, 200});
    pq.push({190, 120});
    pq.push({110, 1340});
    pq.push({90, 10});

    while(!pq.empty()){
      cout<<pq.top().first<<","<<pq.top().second<<endl;
      pq.pop();
    }
  ```

- Application

  - Dijikstra Algorithm
  - Prism Algorithm
  - Huffman Coding
  - Heapsort

## Set

- uses RBTree as data structure.
- set<int> s;

  - insert() => logn
  - find() => logn
    - to check if element is present or not.
    - returns iterator if found else return end() iterator.
  - count() => logn
    - returns 1 or 0
    - can be used in place of find()
  - size() => O(1)
  - erase() => logn
  - clear()
  - begin() => O(1)
  - end() => O(1)
  - empty() => O(1)
  <!--  since elements are sorted. -->
  - lower_bound() => logn
    - returns Iterator pointing to first element equal to or greater than key, or end(). This function returns the first element of a subsequence of elements that matches the given key. If unsuccessful it returns an iterator pointing to the first element that has a greater value than given key or end() if no such element exists.
  - upper_bound() => logn
    - returns upper element.
    - Iterator pointing to the first element greater than key, or end().

- `Always sorted output` when print. can make `decreasing using set<int, greater<int> > s;`
- `No Duplicates` are stored.
- All begin() and end() access containers can use short for-loop(`for (auto &x: set_name)`) for printing
- as well as using for loop with iterators.

```cpp
  // Set for custom datatypes
  struct Person{
    string name;
    bool operator < (Person other){
      return this->name < other.name; // lexiographically sorted increasing order
    }
  };

  set<Person> s;
  s.insert({"shaurya"});
  s.insert({"priyansh"});
  for(auto person: s){
    cout<<person.name<<endl;
  }
```

- Application
  - Store stream of data in a sorted way.

## Map

- uses RBTree as data structure.
- map<int, int> m;

  - operator[] => logn
    - to modify and create a key-value pair
    - m[20] is used to access key 20, if key is not present, it inserts 20 with 0 in case of value being int.
    - other way is to use count(key) to see if it is present or not.
      - if present then use [] to access or modify
      - else dont.
    - other function is insert({key,value}), but no need to use it.
  - find() => logn
  - count() => logn
  - size() => O(1)
  - erase() => logn
  - clear()
  - begin() => O(1)
  - end() => O(1)
  - empty() => O(1)
  - lower_bound() => logn
  - upper_bound() => logn

- `Always sorted output` when print. can make `decreasing using map<int, string, greater<int> > m;`
- `No Duplicates` are stored.
- All begin() and end() access containers can use short for-loop(`for (auto &x: map_name)`) for printing, x is a pair.
- as well as using for loop with iterators.
- Application same as set.
  - Sorted Stream of data with key value pairs

## Unordered_Set

- uses Hashing as the data structure.
- no ordering here
- for loop gives unpredicted output
- insert()
- find()
- count()
- size()
- empty()
- clear()
- erase()
- **All operations are constant O(1) on average**.

```cpp

  unordered_set<int> us; // uses hashing
  us.insert(109);
  us.insert(10);
  us.insert(9);
  // printing
  for (auto x: us){
    cout<<x<<" ";
  }
  // or
  for (auto it = us.begin(); it!=us.end(); it++){
    cout<<(*it)<<" ";
  }

```

## Unordered_Map

- uses Hashing as the data structure.
- no ordering here
- for loop gives unpredicted output
- insert() or operator[]
- find()
- count()
- size()
- empty()
- clear()
- erase()
- **All operations are constant O(1) on average**.

```cpp

  unordered_map<int, bool> um; // uses hashing
  um.insert({109, true});
  um.insert({9, false});
  um.insert({10, true});
  // printing
  for (auto x: um){
    cout<<x.first<<","<<x.second<<" ";
  }
  // or
  for (auto it = um.begin(); it!=um.end(); it++){
    cout<<(*it).first<<","<<(*it).second<<" ";
  }

```

## STL Algorithms(More Functions)

```cpp
- max()
- min()
- INT_MAX // (in #include<climits>)
- INT_MIN // (in #include<climits>)
- *max_element(v.begin(), v.end()) // *max_element(arr, arr+n) // <algorithm>
- *min_element(v.begin(), v.end()) // *min_element(arr, arr+n) // <algorithm>
- *max_element(v.begin(), v.end(), mycmp) // *max_element(arr, arr+n) // <algorithm>
- *min_element(v.begin(), v.end(), mycmp) // *min_element(arr, arr+n) // <algorithm>
- accumulate(v.begin(), v.end(), 0) // ...same as above... // in <numeric>
- accumulate(v.begin(), v.end(), mult)
  - int mult(int a, int b) {return a*b} // return multiplication of numbers // in <numeric>
- sort(v.begin(), v.end(), [bool_comparator]); // ...same as above... // in <algorithm>
	- sort(arr, arr+n, greater<int>);//sort in decreasing order
	- sort(v.begin(), v.end(), greater<int>);//sort in decreasing order
	- sort(v.begin(), v.end(), mycomp);//sort in decreasing order
		bool mycomp(pair a, pair b ){
			return a.second < b.second // sort according to second in increasing order
		}
- lower_bound(container.begin(), container.end(), value_tobe_searched) // <algorithm>
  - returns Iterator pointing to first element equal to or greater than key, or end().
  - This function returns the first element of a subsequence of elements that matches the given key.
  - If unsuccessful it returns an iterator pointing to the first element that has a greater value than given key or end() if no such element exists.
- upper_bound(container.begin(), container.end(), value_tobe_searched) // <algorithm>
    - returns upper element.
    - Iterator pointing to the first element greater than key, or end().
- iteator lower_bound(arr, arr + n, value_tobe_searched) // <algorithm>
- iteator upper_bound(arr, arr + n, value_tobe_searched) // <algorithm>
- bool binary_search(arr, arr + n, value_tobe_searched) // <algorithm>
- bool binary_search(container.begin(), container.end(), value_tobe_searched) // <algorithm>
- bool binary_search(container.begin(), container.end(), value_tobe_searched, mycmp) // <algorithm>
-	is_permutation(container1.begin(), container1.end(), container2.begin()) // <algorithm>
-	is_permutation(a, a + n, b) // <algorithm>
-	count(a, a + n, value_tobe_counted) // <algorithm>
-	count(container.begin(), container.end(), value_tobe_counted) // <algorithm>
-	fill(container.begin(), container.end(), value_tobe_filled) // <algorithm>
-	fill(arr, arr+n, value_tobe_filled) // <algorithm>
-	rotate(first_iterator, middle_iterator, last_iterator) // <algorithm>
-	reverse(container.begin(), container.end()) // reverse container, container also includes string.
-	reverse(a,a+n) // reverse array
- rand() // cstdlib
- srand(time(NULL)) // time in ctime
- prev_permutation(container.begin(), container.end()) //O(n)
- next_permutation(container.begin(), container.end()) //O(n)
- **Note: Use member functions of container if available. There are more optimized.**
```
