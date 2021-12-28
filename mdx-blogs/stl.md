## STL

- Containers

  - **Simple/Sequence Containers**

    - (`vector`, `list`, `pair`, `forward_list`(singly linked list))

  - **Container Adapter/ Derived Containers**

    - Don't support iterators, hence to print the content, use while container is empty thing.
    - (build upon simple containers)
    - (`stack`,`queue`, `deque`, `heap`, `priority queue`)

  - **Associative Containers**
    - implement sorted Data structure; data can be searched in O(logn)
    - `set`, `map`, `multimap`, `multiset`
    - ordered map/set have an order and are implemented as self balancing BST(Red balck Trees).
    - Keys may not need be integral. requirement: operator`<` should be defined.

  - **unordered Associative Containers**
    - implement unordered Data structure; data can be searched in O(1)
    - `unordered_set`, `unordered_map`, `unordered_multimap`, `unordered_multiset`
    - unordered map/set uses hashing and has no-ordering.

- Algorithms

  - binary_search()
  - find()
  - reverse()
  - sort()
  - and more...

- Iterators (only 5 types)

  - An object(like a pointer) that points to an element in the container, helps in accessing data within the container.
  - We use an iterator to move through elements of the container.
  - `Random access iterators` are like pointers like we do arithmetic on the pointer(so we can jump via these iterators).
  - `Forward`, `Bidirectional`, `Input`, `Output` iterators only moves one at a time(+1, ++) and are not like pointers.
  - Why to use them: Iterators help in moving inside the container irrespective of the type of container, whether it is a map, set, vector, list... 

- Comparator/Functor/Comparison object
  - helps in writing our comparison function that can be passed to algorithms to make comparisons
  - It is an object(cmp) of a class that has `() operator` overloaded so to call comparison using cmp(Car A, CarB).

```cpp
// Example: Template + Iterator + Comparator

// generic function to find something in a container
template<class Iterator, class T, class Comparator>
Iterator search(Iterator start, Iterator end, T key, Comparator cmp ){
  // Iterator - Thanks to iterator, to work irrespective of Container.
  while(start!=end){
    if(cmp(*start, key)){ // Thanks to Generic Comparator 
      return start;
    }
    start++;
  }
  return end;
}

class Car{
  string name;
  float price;
  public:
    Car(){
    }
    Car(string name, float price){
      this->name = name;
      this->price = price;
    }
};

class CarComparator{
  bool operator()(Car A,  CarB){
    return A.price <B.price;
  }
};

int main(){
  Car BMW("BMW", 100);
  Car Tesla("Tesla", 2000);

  CarComparator cmp;

  vector<Car> cv;
  cv.push_back(BMW);
  cv.push_back(Tesla);
  auto it = search(cv.begin(), cv.end(), BMW, cmp);
  if(it == cv.end()){
    cout<<"Car Not Found in vector";
  }else{
    cout<<"Car Found in vector: "<<it->name<<endl;
  }

  list<Car> cl; // independent of Container- Thanks to Iterator.
  cl.push_back(BMW);
  cl.push_back(Tesla);
  auto it = search(cl.begin(), cl.end(), BMW, cmp);
  if(it == cl.end()){
    cout<<"Car Not Found in list";
  }else{
    cout<<"Car Found in list: "<<it->name<<endl;
  }
}

```

- Note: **All STL containers are passed by value**. So make sure to use `&` in formal parameters in case you want to reflect changes done inside function into STL container.

## Vector<T>

- Dynamic Size
- Rich Library functions
- Easy to know size via `.size()`
- No need to pass size to function
- Can be returned from the function
- Initialized with default values
- Can easily copy a vector to another via v1 = v2
- Passed by value to function. so if you want to modify the vector make sure to use & and make the vector pass by reference.
- v.size() returns a unsigned interger. So if size is 0 and we do v.szie()-1, it will be 0-1 = All 1s in unsigned. so always do `int(v.size())` to get -1 not All 1s in unsigned interger which becomes 2^31-1 or 2^63-1.

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
```

- functions same as c++ strings, almost all. see in my [cpp blog](cpp.md)
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

## list<T> and forward-list<T>

- you can not call sort(l.begin(), l.end()) because sort required random access iterator but l.begin() or l.end() returns bidirectional iterators.
- Instead `use l.sort()` to sort.

```cpp

list<int> l{2,3,4,5,5}; // doubly linked list
  /* 
  methods available:-
  - l.push_back() 
  - l.push_front() 
  - l.pop_back() 
  - l.pop_front() 
  - l.remove(val)
  - l.erase(iterator)
  - l.insert(iterator, value)
  - l.sort()
  - l.reverse()
  - l.empty()
  - l.front()
  - l.back()
 */

forward_list<int> fl; // singly linked list
```

## deque<T>
- **VVI IMP**: **Even though it is a queue, random access is possible in the case of the deque. => can access dq[i] in constant time.**
- can use deque always instead of stack and queue.
- O(1) random access to any element.
```cpp
deque<int> dq;
dq.push_front(10);
dq.pop_front(20);
dq.push_back(10);
dq.pop_back(10);

// random acess iterator
deque<int> dq;
dq.push_back(10);
dq.push_back(20);
dq.push_back(30);
dq.push_back(40);
dq.push_back(50);
dq.push_back(60);

cout<< dq[3] <<endl;
cout<< dq.at(4) <<endl;
```

## Stack<T>

- A container Adapter that uses deque as underline container.
- No random Access,No iterators, No range-based loops, No curly braced-initialization.
- inside <stack>
  - push()
  - top()
  - pop()
  - size()
  - empty()

```cpp
stack<int> s;
s.push(90);

// use while stack is not empty loop to print the stack.
auto scopy = s;
while(!scopy.empty()){
	cout<<scopy.top()<<" ";
	scopy.pop();
}
cout<<endl;
```

## Queue<T>

- A Container Adapter based on deque as well.
- No random Access,No iterators, No range-based loops, No curly braced-initialization.
- inside <queue>
  - queue<int> q;
  - push()
  - pop()
  - empty()
  - size()
  - front()
  - back()

## Priority Queue<T> or heap<T>

- A priority queue is just like a normal queue data structure except that each element inserted is associated with a “priority”.
- It supports the usual push(), pop(), top(), etc operations, but is specifically designed so that its first element is always the greatest of the elements it contains, i.e. max heap.
- In STL, priority queues take three template parameters:
```cpp
template <class T, class Container = vector<T>, class Compare = less<typename Container::value_type>>
class priority_queue;
```
- The first element of the template defines the class of each element. It can be user-defined classes or primitive data types. Like in your case it can be int, float, or double.
- The second element defines the container to be used to store the elements. The standard container classes std::vector and std::dequeue fulfill these requirements. It is usually the vector of the class defined in the first argument. Like in our case it can be `vector<int>, vector<float>, vector<double>`.
- The third element is a comparative class. By default, it is `less<T>` but can be changed to suit your need. For min heap it can be changed to `greater<T>`.
- inside <queue> header file only
- using vector as the underline container
  - `priority_queue<int> pq;` <!-- default is max heap -->
  - `priority_queue<int, vector<int> , greater<int> > pq;` <!-- min heap -->
  - push() => O(logn)
  - pop() => O(logn)
  - top() => O(1)
  - empty() => O(1)
  - size() => O(1)
- **Important**
  - Use this ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
  - `pqmax pq(arr, arr+n)` => creates a max heap from an array rather than pushing elements one by one.`(**Inplace** Algorithm to convert the array into a heap- 2 ways, top-down, and bottom-up)`. Top-down is unoptimized and bottom-up is optimized.
    - `Top-Down Approach`
      - start from the left of the array and keep on making array till ith index as the heap.
      - Time Complexity.
        - For h=1, operations = 1
        - For h=2, operations = 2*1 (for both nodes at h=2, at max need to move 1 step above,i.e. the top)
        - For h=3, operations = 4*2 (for both nodes at h=3, at max need to move 2 step above,i.e. the top)
        - For h=4, operations = 8*3 (for both nodes at h=4, at max need to move 3 step above,i.e. the top)
        - ...
        - For h=h, operations = 2^(h-1) * h 
      - Total = summation(2^(h-1) * h) => AGP. = 2+ n*(logn-1). = O(nlogn). Solved by hand.
    - `Bottom-up Approach`
    - This approach is better as the time complexity to build heap is O(n). It builds heap using a bottom-up approach which is O(n).
      - It does it as: Creating an array and putting all array elements in it. Then going backward from last internal node(floor(n/2)) and calls heapify(i).
      - Proof: Let Tree is Perfect tree, which is also a CBT right? Yes. Every Perfect tree is a CBT.
      - => all internal nodes are till height h-1. and all leave nodes are at height h. If we look what we are doing.
      ```cpp
        /* Code:  */
        for every node from floor(n/2) to 1:
        heapify(node)
      ```
      - We can say for nodes at height h-1 (#nodes = 2^(h-2); assuming heights start from 1.). We call heapify at max 1 time only. 
      - for nodes at height h-2(#nodes = 2^(h-3)). We call heapify at max 2 times only.  and so on.
      - worst case Time will be 2^(h-2) + [2^(h-3)]*2 + 2^(h-4)*3 + .... = 2^(h-2) * (1+ 2/2^1 + 3/2^2 + 4/2^3 + ...)
      - Also we know total number of nodes = n = 2^h - 1 and (1+ 2/2^1 + 3/2^2 + 4/2^3 + ...) is approximately 3.
      - Hence, Complexity is O(n).
    - earlier approach of pushing elements one by one is costlier and it will be O(nlogn) (logi being for each insertion), similar when printing heap, nlogn time.
- In CBT. total number of internal nodes are floor(n/2)
- It also implies leaves start from the floor(n/2) + 1 and go till n. 
- Custom Sorting in PQ: Have to use Comparotr class/struct and implement () opearator
  ```cpp
    struct PairCmp {
      bool operator()(Pair a , Pair b) {
        return a.second > b.second;
      }
    };

    priority_queue<Pair, vector<Pair>, PairCmp> pq;
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
  - Dijkstra Algorithm
  - Prim's Algorithm
  - Huffman Coding
  - Heapsort

## set<T> 

- inside #include<set>
- uses RBTree as a data structure.
- set<int> s;
  - insert() => logn
  - find() => logn
    - to check if the element is present or not.
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
  <!--  as elements are sorted in set. -->
  - lower_bound() => logn
    - returns Iterator pointing to first element equal to or greater than key, or end(). This function returns the first element of a subsequence of elements that matches the given key. If unsuccessful it returns an iterator pointing to the first element that has a greater value than the given key or end() if no such element exists.
    - **(always returns first element >= key), `so if we want to find < key, we do lower_bound() - 1`**
  - upper_bound() => logn
    - **(always returns first element > key), `so if we want to find <= key, we do upper_bound() - 1`**
    - returns the upper element.
    - Iterator pointing to the first element greater than key, or end().
  - **VVVVVImp: Note for lower and upper bound functions**.
    - If you are doing -1(it--). Make sure returned iterator doesn't points to begin(). and
    - If you are doing +1(it++). Make sure returned iterator doesn't points to end() or rbegin().
- `Always sorted output` when print. can make `decreasing using set<int, greater<int> > s;`
- `No Duplicates` are stored.
- All begin() and end() access containers can use short for-loop(`for (auto &x: set_name)`) for printing
- as well as for loop with iterators.

```cpp
  // Set for custom datatypes
  struct Person{
    string name;
    bool operator < (Person other) {
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
  - Store a stream of data in a sorted way.

## map <T,U>
	
- inside #include<map>
- uses RBTree as data structure.
- map<int, int> m;
  - operator[] => logn
    - to modify and create a key-value pair
    - m[20] is used to access key 20, if key is not present, it inserts 20 with 0 in case of value being int.
    - other way is to use count(key) to see if it is present or not.
      - if present then use [] to access or modify
      - else don't.
  - insert(make_pair(key,value)) or insert({key,value}), but no need to use it.
  - find() => logn
  - count() => logn
  - erase() => logn
  - clear()
  - size() => O(1)
  - begin() => O(1)
  - end() => O(1)
  - empty() => O(1)
  - lower_bound() => logn
  - upper_bound() => logn
- `Always sorted output` when print. can make `decreasing using map<int, string, greater<int> > m;`
- `No Duplicates` are stored.
- All begin() and end() access containers can use short for-loop(`for (auto &x: map_name)`) for printing, x is a pair.
- as well as for loop with iterators.
- Application same as set.
  - Sorted Stream of data with key value pairs
- SideNote: Always use map instead of unordered_map as map guarantees to have operations in logn time. but unordered_map can in worst case goes to O(n). So using map inside for(1..n) loop can result in n square rather than nlgn. But if you get TLE from map. replace map with unordered_map and try to submit. 

## unordered_set <T>
	
- inside #include<unordered_set>
- uses Hashing as the data structure.
- no ordering here.
- for loop gives unpredicted output.
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

## unordered_map<T,U>

- inside #include<unordered_map>
- uses Hashing as the data structure.
- no ordering here.
- for loop gives unpredicted output.
- insert() or operator[].
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

- multiset inside #include<set>
- multimap inside #include<map>

## STL Algorithms(More Functions)

- max()
- min()
- swap(a,b)
- INT_MAX // (in #include<climits>)
- INT_MIN // (in #include<climits>)
- *max_element(v.begin(), v.end()) 
- *max_element(arr, arr+n) // <algorithm>
- *min_element(v.begin(), v.end()) 
- *min_element(arr, arr+n) // <algorithm>
- *max_element(v.begin(), v.end(), mycmp) 
- *max_element(arr, arr+n) // <algorithm>
- *min_element(v.begin(), v.end(), mycmp) 
- *min_element(arr, arr+n) // <algorithm>
- accumulate(v.begin(), v.end(), 0) // in <numeric>
- accumulate(arr, arr+n, 0) // in <numeric>
- accumulate(v.begin(), v.end(), mult) where int mult(int a, int b) {return a*b}
- sort(v.begin(), v.end(), [bool_comparator function]); // in <algorithm>
- sort(arr, arr+n, greater<int>);//sort in decreasing order
- sort(v.begin(), v.end(), greater<int>);//sort in decreasing order
- sort(v.begin(), v.end(), mycomp); //sort in decreasing order
```cpp
bool mycomp(pair a, pair b ){
	return a.second < b.second // sort according to second in increasing order
}
```
- iterator `find`(container.begin(), container.end(), value_tobe_searched) // linear search
- bool binary_search(arr, arr + n, value_tobe_searched) // <algorithm>
- bool binary_search(container.begin(), container.end(), value_tobe_searched) // <algorithm>
- bool binary_search(container.begin(), container.end(), value_tobe_searched, mycmp) // <algorithm>
- lower_bound(container.begin(), container.end(), value_tobe_searched) // <algorithm>
  - returns Iterator pointing to first element equal to or greater than key, or end().
  - This function returns the first element of a subsequence of elements that matches the given key.
  - If unsuccessful it returns an iterator pointing to the first element that has a greater value than the given key or end() if no such greater element exists.
- upper_bound(container.begin(), container.end(), value_tobe_searched) // <algorithm>
    - returns the upper element.
    - Iterator pointing to the first element greater than key, or end().
- iterator lower_bound(arr, arr + n, value_tobe_searched) // <algorithm>
- iterator upper_bound(arr, arr + n, value_tobe_searched) // <algorithm>
- is_permutation(container1.begin(), container1.end(), container2.begin()) // <algorithm>
- is_permutation(a, a + n, b) // <algorithm>
- count(a, a + n, value_tobe_counted) // <algorithm>
- count(container.begin(), container.end(), value_tobe_counted) // <algorithm>
- fill(container.begin(), container.end(), value_tobe_filled) // <algorithm>
- fill(arr, arr+n, value_tobe_filled) // <algorithm>
  - fill works on all cases(setting 0,-1,true,false,9,5,-3) in static/dynamic array.
  - memset works for setting (`0 and -1, false, true`) ONLY.  
  - memset(arr, value, sizeof(arr))
  - memset(arr, value, sizeof(arr)*arr_size) // For dynamically created array as arr will be a pointer. 
- rotate(first_iterator, middle_iterator, last_iterator) // <algorithm>
- reverse(container.begin(), container.end()) // reverse container, container also includes string.
- reverse(a, a+n) // reverse array
- int rand() // cstdlib 
- random_shuffle(v.begin(), v.end()) // cstdlib
- srand(time(NULL)) // time in ctime
- prev_permutation(container.begin(), container.end()) // O(n)
- next_permutation(container.begin(), container.end()) // O(n)

**Note: Use member functions of the container if available rather than using global ones. There are more optimized.**

