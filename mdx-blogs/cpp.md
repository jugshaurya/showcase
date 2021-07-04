# DS and Algo Notes

- `C++` programs are compiled and are architectural-dependent, means you have to compile the source code for different OS/machine to work.
- `JAVA` produces bytecode which is machine independent as machines have machine specific JVM available.
- `Python` is an interpreted Language and runs/execute code line by line and generate output for each line and then look at next line.
- `Javascript` is a single threaded Language, more close to python in some sense.

## datatypes

- int
- char
- long
- float
- double
- char\*
- long long -> same as long
- unsigned, signed
- bool

## Type conversion

- C way
  - (double)x/y
  - blindly typecasts
- C++ way
  - static_cast<double> x/y
  - only typecasts if possible otherwise throws error.

## Precedennce and Associativity

`RULE: PUMA'S REBL TAC`

- Parenthesis - ()[]{}
- Unary + - ++ -- \*(deref) &(ref)
  - Postfix operator has higher precedence over \* or prefix operator.
- Multiplicative \*/
- Addition +-
- Shift >> <<
- Relational < > <= >=
- Equality =
- Binary & | ~
- Logical and(&&) or(||) not(!)
- Ternary ?:
- Assignment = +=
- Comma ,

- Right to left Assicativity `Rule : AUT`
  - Ternary
  - Unary
  - Assignment
  - O is nothing!

## Declare an array

```cpp
  // = sign may be ommitted here
	int arr[] = {1,2,3};
	int arr[4] = {1,2,3,4}
	int arr[10]; // each elements have garbage value
	int arr[10] = {} // Imp: set all elements to 0
	int arr[10] = {0} // first to zero and rest to zero
	int arr[10] = {9} // Imp: first to nine and rest to zero

	// 2d array
	int arr[2][3] = {{1,2,3}, {4,5,6}};
	// no of rows are optional but no. of columns are compulsory.
	int arr[][3] = {{1,2,3}, {4,5,6}};
	int arr[][3] = {{1,2,3}, {4,5,6}};
	char words[2][10] = {"shaurya", "singhal"} // valid
```

- No index out of bound Checking in c++. 😭
- Arrays are always passed as pointer to functions and length cannot be determined using `sizeof(arr)/sizeof(arr[0])` inside function, therefore have to pass length of array as argument to the function.
- Provides cache spatial locality of reference as arrays are stored continously.
- Have to know size before we create them. Solution: Vector.

## Vector

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

## References

- Creates an alias.
- Must be assigned when declared.
- Cannot refer to another location.
- Cannot be null.
- **Avoid copying of larger objects during function calls.**
- **Helps in modifying the passed parameters to function.**

## Pointers

- Can be assigned later.
- Can refer to another location.
- Can be null
- **Avoid copying of larger objects during function calls.**
- **Helps in modifying the passed parameters to function.**
- helps in returing multiple values.(just pass variables as pointer as arguments to function and assign return values to them).
- Helps in Dynamic Memory Allocation
- In Implementing Data structures.

## pointers and array

```cpp
	arr[0] is same as *(arr+0) = 0[arr]
	arr[2][1] is same as *(*(arr+2)+1) = 2[arr][1]
```

```cpp
	int marks[] = {10,20,30};
	int* p = marks;

	cout<<marks // addresss of marks[0] = 0x7ffe6fdb5170
	cout<<p // addresss of marks[0] = 0x7ffe6fdb5170

	cout<<&marks // addresss of marks[0] = 0x7ffe6fdb5170
	cout<<&p // addresss of pointer variable p = 0x7ffe6fdb5168

	// ***** Imporant
	cout<<sizeof(marks) // 3*4 = 12
	cout<<sizeof(p) // 4

	cout<< marks++ // error
	cout<< ++p // address of marks[1]

	p =  marks // valid
	marks = p // error
```

## C-string

- C string is a 1D character array and are terminated by null character '\0'

  ```cpp
  	// Note: cout<<(address of char array a) -> prints value till found '\0'.
  	// Note: cout<<(address of int array a) -> prints address..
  	char name[] = {'s', 'h', 'a', 'u', 'r', 'y', 'a'}
  	cout<<name; // will print name array complete. // may be a problem so always put null character if declaring this way.
  	char name[] = {'s', 'h', 'a', 'u', 'r', 'y', 'a', '\0'};
  	cout<<name; // more predictable or else do like
  	char name[] ="shaurya" // complier will automatically add '\0'
  ```

- utility function to work with cstring are available in `<cstring>` like
  - strcpy(s1,s2)
  - strcmp(s1,s2)
  - strcat(s1,s2)
  - strlen(s1)
  - strch(s1,ch) <!-- returns pointer to ch in s1 -->
  - strstr(s1,"sub") <!-- return substring `sub` reference -->

## and c++-string

- c++ string is builtin top of cstring and is a String Class which stores characters as sequence of bytes.
- memory is allocated dynamically(no need to get length of string first).
- available in `#include<string>`
- take input via cin (till whitespace)
- use `getline(cin, variable)` to get complete line as input

- methods on str object (str.method())

```cpp
	- member functions
		- constructor()
		- destructor()
		- operator = ()

	- Iterator
		- begin() // important
		- end() // important
		- rbegin()
		- rend()

	- Capacity
		- capacity()
		- size() // important
		- length() // important
		- resize()
		- max_size()
		- clear()

	- element access
		- using indexing str[i], operator []() // important
		- at()
		- back() // get last item from vector but does not pop it
		- front()

	- modifiers
		- operator +=() // important // with other <=, < ,> ...
		- append()
		- push_back()
		- pop_back() // only pops it does not return the popped value.
		- assign()
		- erase()
		- replace()

	- other
		- c_str() // get cstring from c++ string
		- substr() // important
		- compare()
		- copy(chararray, length, position)
		- swap()
		- find(substring) // returns first occurence of substring
		- rfind(substring) // returns last occurence of substring
		- find_first_of(string) // returns first occurence of any character in string
		- find_last_of(string)
		- insert(position, string_to_insert)
```

Note: `char+char= int and char-char=int`
Note: `int+int= int, int-int=int, int/int=int, int*int=int`
Note: `int+double= double, int-double=double, int/double=double, double/int=double, double/double=double, double*int=double`

## cin vs cin.getline()

- getline also take space b/w values as one entity. same as input() in python.

```cpp
	// cin.getline(arr, maxsize, [delimiter]) // default delimiter='\n'
	cin.getline(para, 1000);
	cin.getline(para, 1000, ' '); //becomes cin
	cin.getline(para, 1000, '.'); // keep taking at max 1000 chars or till you got .
```

## cin.get()

- can read chars including tabs('\t'), whitespace, ';' , ',' or other special characters.

## getline(cin, str)

- only for taking: string as input in str

## Typedefs

```cpp
	typedef long long int ll
	typedef unsigned long int ull
```

```cpp
	// *** Testing long
	cout<<sizeof(long long)<<endl; // 8
	cout<<sizeof(long long int)<<endl; //8
	cout<<sizeof(long)<<endl; //8
```

```cpp

	string str = "shaurya";
	string::iterator it;

	for(auto it = str.begin(); it != str.end(); it++){
		cout<<*it<<" ";
	}

	string::reverse_iterator it;

	for(auto rit = str.rbegin(); rit != str.rend(); rit++){
		cout<<*rit<<" ";
	}
```

## Struct vs class

- Use Struct to bundle multiple items together.
- everything is `public by default in struct` and `private by default in class`.Else everything is same!
- when in hurry use struct like pair(why? becoz, default public).

  ```cpp
  struct Pair{
  	int first;
  	int second;
  };

  Pair p;
  p.first = 1;
  p.second = 2;
  // or Pair p = {1, 2}
  // or Pair p{1, 2}
  // or change order using : Pair p = {.second = 1, .first= 2} called dedicated Initialization.
  cout<<p.first<<" " << p.second<<endl;
  // Note
  Pair *ptr = &p;
  (*ptr).first = 4
  // or
  ptr->second = 5
  ```

## Dynamic Memory Allocation via new

- operator new
  - returns the pointer to the memory allocated.
  - always used for dynamic memory allocation.
  - calls constructor for objects of class or struct
  -

## OOPS

- Use when we have many entities like working with database(models), making banking software, designing bank system etc.
- **Concepts**

  - Class
  - Object
  - Abstracting(APIs)
  - Data Hiding (Access Modifiers)
  - Encapsulation
  - Polymorphism
  - Inheritance, Composition.

## Polymorphism

- Compile Time Polymorphism
  - `Function overloading`
  - `Operator overloading`
  - `Function overridding`
  - `Operator overridding`
  - `Default Arguments`
- RunTime Polymorphism
  - `virtual functions`: so to call function based on object rather than pointer.
  - Happens when we have a **baseclass pointer pointing to sub class object. (Vehicle\* v = new car)**, btw vice-versa is not possible.
  - let both Vehicle and Car has a print function.
  - v -> print() will call vehicles print, not car prints.
  - but if we make function in vechile as virtual than car's print will be called.
  - Why? let employyee is a baseclass and teacher, gardner, manager are baseclasses and each(base and sub) have a calculatesalary method. we want to store all salaries of differnet employees in a array.
  - since array can only hold homogeneous values. we have to use `Employee* salaries[100]` we can push each object of base classes into it. and call calculatesalary() in a loop. it work only if calculatesalary is virtual in baseclass.

## Questions to be answered!

- what is Amortized Analysis?

```
Is it ? actual time complexity is sum of all subtasks, some of them is big some is small but when you some them it is averaged out.
1,1,1,1,n,1,1,1,1,n,1,1,1,1 = (2n+12)/n = O(1) ?
is it ??

```

- NP Hard Problems?

- Small Omega
- Small oh

- expansion of logn is harmonic sum of first n natural number(1+1/2+1/3+1/4+1/5+...)?

- Use of tail recursion in compiler or how it optimizes the performance.

## Quotes

> > "A problem well-seen is a problem well solved"
