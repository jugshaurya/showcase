# DS and Algo Notes

- `C++` programs are compiled and are architectural-dependent, which means you have to compile the source code for different OS/machines to work.
- `JAVA` produces bytecode which is machine independent as machines have machine-specific JVM available.
- `Python` is an interpreted Language and runs/executes code line by line and generates output for each line and then looks at the next line.
- `Javascript` is a single-threaded Language, more close to python in some sense.

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

## Precedence and Associativity

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
- The C++ runtime does not perform bounds checking on array indices, so if an array named arr is declared of size 33 and you try to access arr[5], there is no telling what will happen. The program might crash due to a segmentation fault, or it might keep running while giving potentially incorrect results.
- Arrays are always passed as pointers to functions and length cannot be determined using `sizeof(arr)/sizeof(arr[0])` inside function, therefore have to pass the length of the array as an argument to the function.
- Provides cache spatial locality of reference as arrays are stored continuously.
- Have to know the size before we create them. Solution: Vector.
- counting int array will give you the address of the first integer, whereas counting char array will print all characters till null character.

```cpp
	int arr[10] = {1,2,3};
	char ch_arr[10] = {'1','2','3', '\0'};

	cout<<arr<<endl; // print address of 1(arr[0])
	cout<<ch_arr<<endl; // print "123".

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
- Can be null.
- **Avoid copying of larger objects during function calls.**
- **Helps in modifying the passed parameters to function.**
- helps in returning multiple values. (just pass variables as a pointer as arguments to a function and assign return values to them).
- Helps in Dynamic Memory Allocation.
- In Implementing Data structures.
- `*` and `++` are both unary operators and have right to left associativity.
- Subtraction b/w pointers(p1-p2) is possible if both points to the same array and p1>=p2.
- Addition, Multiplication, divisible are not feasible on pointers.

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

	// this concept is differnt for character/char array(i.e. char*)
	char val='A';
	cout<<&val<<endl; // prints A rather than adress of A, 
	// it is because of operator overloading of <<, 
	// we can still print adress of char using typecasting of char adress (char*) to void*
	cout<<(void*) &val <<endl; // prints address here.
```

## 2d array

- Using Static memory Allocation

```cpp
#include <iostream>
using namespace std;

int main() {
  const int row = 2, col = 2;
  // static array initialization
  int staticArr[row][col] = { {1, 2}, {3, 4}};
  cout << "Static two-dimensional array: ";
  for(int i=0; i<row; i++)
    for(int j=0; j<col; j++)
      cout << staticArr[i][j] << " ";
  cout << endl;
```

- Using Dynamic memory Allocation

```cpp
	// 2d array of size (10,20) + taking input in it
	int row =10, col=20;
	int* arr = new int*[row];
	for(int i=0; i<row; i++){
		arr[i] = new int[col];
		for(int j=0; j<col; j++){
			cin>>arr[i][j];
		}
	}

	// print
	for(int i=0; i<row; i++){
		for(int j=0; j<col; j++){
			cout<<arr[i][j]<<" ";
		}
		cout<<endl;
	}

	// deletion
	for(int i=0; i<row; i++){
		delete [] arr[i];
	}
	delete [] arr;
```

- Can be stored in memory in - Row Major Order (RMO) - Store continuously row-wise - Column Major Order (CMO) - Store continuously col wise

## pairs - auto destructuring

```cpp

	vector<pair<int, bool>> vp;

	vp.push_back(make_pair(2,true));
	vp.push_back({3,false});
	vp.push_back({4,false});
	vp.push_back({5,true});

	for(auto x: vp){
		cout << vp.first << " " << vp.second <<endl;
	}

	// auto Destructing - GOOD
	for(auto [a,b]: vp){
		cout << a << " " << b <<endl;
	}

```

## Recursion on array and strings

- on the array,

      	- do a+1, reduce n by 1, or take an index variable to indicate the starting point of the array. - Note in character array if the array is empty then @index 0 we will have null '\0'.

      		`````cpp
      		char str[100];
      		bool isTrue = str[0]=='\0'; // true aayega
      		```
      	- check length of character array using s[i]!='\0'

      		````cpp
      		for(int i=0; s[i]!='\0'; i++){/* Do some work */}
      		```

      		`````

- on string

      	- do str.substr(index) or take a index variable to indicate the starting point of string.
      	- Note in string as well if string is empty("") then @index 0 we will have null '\0'.

## Global variables in C++

- variables declared outside any function, even main() are accessed by anyone, anyfunction, anyclass and hence are called global variables.
- Should not use as it breaks the PURE function concept of the functional programming paradigm.

## C-string

- C string is a 1D character array and is terminated by null character '\0'

```cpp
	// Note: cout<<(address of char array a) -> prints value till found '\0'.
	// Note: cout<<(address of int array a) -> prints address..
	char name[] = {'s', 'h', 'a', 'u', 'r', 'y', 'a'}
	cout<<name; // will print name array complete. // may have a problem, so always put null character if declaring this way.
	char name[] = {'s', 'h', 'a', 'u', 'r', 'y', 'a', '\0'}; // recommended
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

- c++ string is builtin on top of cstring and is a String Class that stores characters as a sequence of bytes.
- memory is allocated dynamically(no need to get the length of the string first).
- available in `#include<string>`
- take input via cin (till whitespace)
- use `getline(cin, variable)` to get the complete line as input
- **Appending characters/string to a string**
	- `s += "something" // O(1) as no new string is created.` Why? as internally it is implemented as character arr/vector and doing `+=` is like doing vector.push_back(). thats why string have push_back()/pop_back() method
	- `s = s + "something" // O(n) as here new string is created.`
- Checking if a character exists in a string or not. - return str.find(ch) != string::npos
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
		- back() // get last item but does not pop it
		- front()

	- modifiers
		- operator +=() // with other variations <=, < ,> ...
		- append()
		- push_back()
		- pop_back() // only pops it does not return the popped value.
		- assign()
		- erase()
		- replace()

	- other
		- c_str() // get cstring from c++ string
		- substr(begin_index, length_of_substring) // **important
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

- getline also takes space b/w values as one entity. same as input() in python.

```cpp
	// cin.getline(arr, maxsize, [delimiter]) // default delimiter='\n'
	char para[1000];
	cin.getline(para, 1000);
	cin.getline(para, 1000, ' '); // becomes cin
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
- everything is `public by default in struct` and `private by default in class`.Else everything is the same!
- when in a hurry use struct like pair(why? because, the default public).

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
  - calls the constructor for objects of class or struct
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
  - Inheritance, Composition. - 4 differnet special fns that are always available in a class - Constructor - Destructor - Copy Constructor - Copy assignment operator

    ```

    ng
    e.
    - Book b;.
    ```

## Polymorphism

- Compile Time Polymorphism
  - `Function overloading`
  - `Operator overloading`
  - `Function overriding
  - `Operator overriding
  - `Default Arguments`
- Runtime Polymorphism
  - `virtual functions`: so to call function based on the object rather than pointer.
  - Happens when we have a **baseclass pointer pointing to a subclass object. (Vehicle\* v = new car)**, btw vice-versa is not possible.
  - let both Vehicle and Car have a print function.
  - v -> print() will call vehicles print, not car prints.
  - but if we make function in the vehicle virtual then the car's print will be called.
  - Why? let employee is a baseclass and teacher, gardener, manager are baseclasses and each(base and sub) have a calculatesalary method. we want to store all salaries of different employees in an array.
  - since the array can only hold homogeneous values. we have to use `Employee* salaries[100]` we can push each object of base classes into it. and call calculatesalary() in a loop. it works only if calculatesalary is virtual in baseclass.

## passing function to a function in cpp

- pass bool (&fun)(int a, int b) as a parameter. It is basically a declaration of function + wrapping function name in braces. & is to avoid copy.

```cpp
	// look last parameter
	void sortByMe(int*arr, int*arrend, bool (&fun)(int a, int b))

	bool cmp(int a, int b){
		return a<b;
	}

	sortByMe(arr,arr+n, cmp)
```

- Example 2

```cpp
void wrapper(void (&gift)()){
	cout<<"wrapper"<<endl;
	gift();
}

void first_class_function(){
	cout<<"first class function"<<endl;
}

int32_t main(){
	fastIO();
	/** code here */
	wrapper(first_class_function);
	return 0;
}
```

## Questions answered!

- what is Amortized Analysis? - Ans: Analysing the complexity approximately that if work is equally distributed, what is the work each one is doing. - Actual time complexity is sum of all subtasks, some of them is big & some is small but when you some them it is averaged out. - 1,1,1,1,n,1,1,1,1,n,1,1,1,1 = (2n+12)/n = O(1) - 1,2,1,1,4,1,1,1,1,8,1,1,1,1,1,1,1,1 = can be seen as each of them is doing 1.5 work rather than some 1 some 4,8,16. This is Amortized.

* Use of tail recursion in compiler or how it optimizes the performance ? - add goto statement and change parameter explicitely and make instruction jump to start. - ex1: print n natural numbers
  `cpp // tail recursion void printNNumbers(int n){ if(n<0){ return; } cout<<n<<" "; return printNNumbers(n-1); }`

      	```cpp
      	// Tail Recursion after Optimization (TRO)
      	// Done Automatically by Compilers in Compiler's Code Optimization phase
      	// Avoid adding a new entry to call Stack.
      	// Avoid call registration, CALL/JUMP and RETURN Function instructions.
      	// Converting call stack calls(recursive calls) to iterative
      	// Hence optimizing performance

      	void printNNumbers(int n){
      		label comeback:
      		if(n<0){
      			return;
      		}
      		cout<<n<<" ";
      		n = n-1;
      		goto comeback ;
      	}
      	```

      	- ex2: calculation of factorial

      	```cpp
      	// not-tail recursion  (head recursion)
      	// Why? Because after the recurion is done, I still have operations to perform, multiply by n here.
      	int fact(int n){
      		if(n==0){
      			return 1;
      		}
      		return n * fact(n-1);
      	}
      	```

      	```cpp
      	// tail recursion
      	void fact(int n, int &ans){
      		if(n == 0){
      			ans = 1
      			return;
      		}
      		ans = ans * n;
      		fact(n-1, ans);
      	}

      	int fact(int n){
      		int ans = 1;
      		factHelper(n, ans);
      		return ans;
      	}
      	```

      	```cpp
      	// Tail Recursion Optimization (TRO)
      	void factHelper(int n, int &ans){
      		label comeback:
      		if(n == 0){
      			ans = 1
      			return;
      		}
      		ans = ans * n;
      		n = n-1;
      		goto comeback ;
      	}
      	int fact(int n){
      		int ans = 1;
      		factHelper(n, ans);
      		return ans;
      	}
      	```

## C++11 features

- Anonymous functions(return type will be infered as `bool` by compiler)

```cpp
sort(a, a+n, [] (Student s1, Student s2) {
		return s1.name<s2.name
});
```
## Questions to be answered!

- NP Hard Problems?

- expansion of logn is a harmonic sum of the first n natural number(1+1/2+1/3+1/4+1/5+...)?

## Quotes

> > "A problem well-seen is a problem well solved"

- stop feeling Sorry for Yourself and do it.

## Byte by Byte

- The #1 reason people fail interviews is lack of confidence!
  ● Nervousness == Lack of confidence
  ● Forgetting stuff == Lack of confidence
  ● Memorizing == Lack of confidence

- 3 pillars of Interviewing along with Consistent Practising - CS Fundamentals - Problem Solving Strategy - Self Confidence
- turn your interviewing into a repeatable system.
- 6 step system for solving any coding interview question, even if I’ve never seen it before
- prematurely optimizing our code actually hurts us more than it helps
- The 3 “hail mary” strategies to use when you’re really stuck
- How to avoid your mind going blank when facing a hard problem
- "go to interview thinking you are the answer to their problem.” - George Clooney
- The best interviewees are good at problem-solving. Not pattern recognition
- treat each hint as a small deduction because They may be trying to guide you away from common pitfalls
- impostor syndrome: Everyone is way better/smarter than me.
- If you practice hard problems, then your interview will be easy by comparison
- You don’t know if you’re ready or not until you try
- If you mess up, you can always interview again in the future
- Brainstorm edge cases at the beginning and define assumptions

- What are the goals of practicing? - ○ Simulate real-world interview - ○ Identify and improve weaknesses - ○ Become comfortable with the tools and systems - ○ Avoid Rehashing what you’re already good at

* Simulate real-world interview - ● Handwrite code - ● Talk out loud as you go - ● Test your code by hand - ● Apply the strategies - 1. Understand the problem [3-5 minutes] - Make sure that you really know what is being asked. Take your time here. - Go through the example inputs and outputs. How does the input get that output? - 2. Find a brute force solution [5 minutes] - 3. Optimize your solution [15 minutes] - 4. Code your solution [15 minutes] - When you get to coding, it should just be “translating” the work you’ve already done - 5. Test your solution [5 minutes]
* Your interviewer wants to help you
  ○ The toughest interviews are when I try to help someone and they won’t let me. Don’t try to prove yourself
  ● Only your interviewer really knows what they are looking for
  ● It’s an easy way to get them to like you

Interview practice
○ Pramp
○ Gainlo
○ Interviewing.io

Other practice

- ○ Toastmasters
- ○ Wedding toasts
- ○ Video yourself
- ○ Actual interviews

```
After a week or two (if they don’t email)
Reply to the previous email:
Hey FIRSTNAME -
Hope all is well with you. I hadn’t heard back from you so I just wanted to check in and see if there was any more progress on my interview feedback.
Thanks!
```

```
Just wanted to bump this up in your inbox in case you missed it. Would love to discuss X.
```

- Research the company
- Prepare a short description of each major project

- How to structure your answers 
	- ● The STAR technique 
		- ● Situation (1-2 sentences) 
		- ● Task (1 sentence) 
		- ● Action (3-5 sentences) 
		- ● Result (3-5 sentences)

## Referral

- Ask what works they do. means know their work
- STAR Method
	- Situation -What Happended?
	- Task - What was your job?
	- Action - what did you do?
	- Result - So what?
 
## Other Tips

- Do Time Management -> based on the score of questions

- Problem Statement
- Input
- Output
- Explanation (optional/maybe given, maybe not)
- Constraints
- Stacks - two loops in which inner loops are dependent on outer loop (j is dependent on i) => Use Stack for optimization. - Same Questions - Next greater to Right - Next smallest to Right - Previous greater to left - Previous smaller to left - Stock Span - Area under histogram - Rain Water Trapping -

- Recursion - IBH Method - Recursion tree Method - Choice Method
