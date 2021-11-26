# Aptitude
-----

## Number System
  - Any Composite number can be written as the product of its prime factors.
  - 240 = 2^4 * 3^1 * 5^1 = p^x * q^y * r^z
  - Factors of 240 are `(2^0,2^1,2^2,2^3,2^4)*(3^0,3^1)*(5^0,5^1)`.
  - Sum of factors of 240 are `(2^0 + 2^1 + 2^2 + 2^3 + 2^4)*(3^0 + 3^1)*(5^0 + 5^1)`.
  - Total #factors(TF) = `(x+1)*(y+1)*(z+1)` = 5*2*2 = 20
  - Total Number of Even Factors(e) = `(x)*(y+1)*(z+1)` 
  - Total Number of odd Factors = TF - e
  - Product of Factors = n^(TF+1/2) = 240^(21/2) = `240^10`.

## HCF/GCD and LCM
  - (a,b) are Co-Prime if gcd(a,b) = 1. 
    - used in Calculation of MMI in Number Theory.
  - HCF of two or more fraction
    - HCF of Numerators / LCM of Denominators
  - LCM of two or more fraction
    - LCM of Numerators / HCF of Denominators
  - HCF(a,b) * LCM(a,b) = a*b
    - Product of HCF and LCM is equal to product of Numbers
      - Applicable ONLY for 2 numbers

## Progression
  - AP
    - Arithmatic Mean = (a+b)/2
    - 🌟🌟Inserting Arithmetic Means between numbers
      - Let a & b are two numbers and we want to insert n means b/w them
      - Total Numbers in the end will be n + 2.
      - Let means be Arithmatic means. since these n+2 numbers must form an AP with first term as a and last being b.
      - last term  = a + (#terms-1)*d
      -     b      = a + (n + 1)*d 
      - d = (b-a)/(n+1)
      - => first term = a
      - => second term (1st AM) = a+d = a + (b-a)/(n+1)
      - => third term (2st AM) = a+2d = a + 2*(b-a)/(n+1)
      - and so on...
  - GP
    - Geometric Mean = sqrt(ab)
    - 🌟🌟 Inserting Geometric Means between numbers
      - Let a & b are two numbers and we want to insert n means b/w them
      - Total Numbers in the end will be n + 2.
      - Let means be Geometric means. since these n+2 numbers must form an GP with first term as a and last being b.
      - last term  = ar^(#terms-1)
      -     b      = ar^(n + 1) 
      - r = (b/a)^(1/(n+1))
      - => first term = a
      - => second term (1st GM) = ar = a(b/a)^(1/(n+1))
      - => third term (2st GM) = ar^2 = a((b/a)^(1/(n+1)))^2
      - and so on...
  - HP
    - There is no general formulas for HP. THey are found by inverting the numbers and then using AP formulas.

  - 🌟🌟 Relation b/w AM,GM,HM
    - GM is the Geometric mean of AM and HM
      - 🌟🌟 GM = sqrt(AM*HM)
    - For any two numbers a &b
      - 🌟🌟 AM > GM > HM (Trick: Lexiographically decreasing)

## Logarithms
  - Logarithms of negative numbers is not defined. See the log graph
  - Properties
    - log 1(base a) = 0 for all a > 0 and a != 1
    - log a(base a) = 1 for all a > 0 and a != 1
  - If no base is given take base as 10.
  - Number of digits in a number can be found by taking the log of that number. 
    - floor(log99(base 10) + 1)  = 2. 
    - floor(log100(base 10) + 1) = 3. 

## Time and Distance 
  - Relative Speed
    - If two cars are moving toward/away each other(opposite directions). Relative speed = S1+S2
    - If two cars are moving in same direction(). Relative speed = |S1-S2|

  - Trains
    - case 1: Train crossing stationary object, and has no length
      - s(train) = l(train length) / time  
    - case 2: Train crossing stationary object, and has length
      - s(train) = l+o(train length + object length) / time  
    - case 3: Train crossing moving object, and has no length
      - case 3a: Same direction.
        - |s(train) - s(object)| = l(train length) / time  
      - case 3a: opposite direction.
        - s(train) + s(object) = l(train length) / time  
    - case 4: Train crossing moving object, and has length
      - case 3a: Same direction.
        - |s(train) - s(object)| = l+o(train length + object length) / time  
      - case 3a: opposite direction.
        - s(train) + s(object) = l+o(train length + object length) / time

    - Conclusion : lengths(train and object) will always be added. 
      - All cases combined is covered in case 4. just put length or speed of object 0 to get other cases.

  - Boats and Stream
    - upstream :- Boat Moving opposite to the direction of stream. => speed of boat will decrease.
      - Boat relative Speed : s(boat) - s(stream)
    - downstream :- Boat Moving with stream => speed of boat will increase.
      - Boat relative Speed : s(boat) + s(stream)

## Time and Work
  - Time is always told in hr,sec,min.
  - Work is always told as `efficiency` => How much thing is done in this much time.
## Data Interpretation
  - bar graph
  - line graph
  - histogram
  - polygon graph
  - tabular form
  - pie chart

## Deductive Logic Problems
  - Deriving a conclusion from a single/multiple propositions called premises.

## 

## 

## 

## 

### Questions ?

- See If you can find aptitude by grade up.
- Search for finding the domain of Logarithmic functions(class 11th)
