# Game Theory

- [pdf](https://www.cs.cmu.edu/afs/cs/academic/class/15859-f01/www/notes/comb.pdf)
- Study of games where all(usually 2) players play optimally.
- Two person games, no chance moves. 
- Both players play optimally and take alternative turns.
- Finite set of positions.
- win-or-lose-or-draw outcome
- If the game never ends, it is declared a draw.

- **Impartial v/s Partial Combinatorial Games**

  - Games in which the set of moves from any given position is the same for both players are called `Impartial Games`, otherwise called `Partial Games`.
  - Chess is a `Partial Game` as the set of moves is different for both players depending upon the player is playing as white or black.

- **Normal/Misere Rule**
  - `Normal rule`: Last to make a move wins.
  - `Misere rule`: Last to make a move loses.

#### Types 
  - All question in game theory are based on:-
    - Invariance
    - Symmetry
    - Reduction to Game of NIM
    - Sprunge grundy Theorem
    - Dynamic Programming


### 1. Take-Away Games/ Subraction Games.
- 2 Players, Alice and Bob.
- N stones in a pile.
- Each player can pick any number of stones from a set S at a time.

- Example:-
- 2 Players, Alice and Bob.
- N stones in a pile.
- Each player can pick either 1 or 2 or 3 stone(s) at a time.
- **Normal RULE**: The last player to pick wins.
- Solutions: Go from base case to top (Bottom-UP DP/Backward Induction) & assume you are Alice.
- Example:

  - Let &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;&nbsp; N = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
  - dp[i] = Can I win? | L | W | W | W | L | W | W | W | L | W | W | W | L | W |
  - `Explanation`: See for N=4, I can only go to 3, 2, or 1. Since all positions are winning positions, I will lose. To be clear, I will land on these positions and, then it would be Bob's turn.
  - `Observation`: If all `n - Stone(i)` are winning, then dp[i] is L else W.
  - `Implies N%4 == 0 is the loosing position.`
  <!-- - So try to always go to N%4 to win. -->

- **Misere RULE**: Last player to pick losses(reverse of above).
  - Let &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; N = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
  - Can I win ? | W | L | W | W | W | L | W | W | W | L | W | W | W | L | W |
  - `Observation`: If all `n - Stone(i)` are winning, then dp[i] is L else W.
  - `Implies N%4 == 1 is always the loosing position.`
  <!-- - So always try to be on N is congruent to 1%4 position. -->

#### Terminal position
  - positions from where we can't go further.
  - A terminal position is one from which no moves are possible. Then one of the players is declared the winner and the other the loser.

#### Properties 
- All terminal positions are losing in normal game and winning in misere game.(above n=0 was terminal position.)
- If a player is able to move to a losing position then he is in a winning position.
- If a player is able to move only to the winning positions then he is in a losing position.

#### More Example of Subtraction Games

- 1. Let us assume, we can pick (1,2,3,4,5) stone(s)
  - `Case Normal Rule`
    - DP table for
    - idx: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ...
    - val: L W W W W W L W W W W W L W W W W W L W W
  - Ans: N%6 == 0 is the loosing position.
  - `Case Misere Rule`
    - DP table for
    - idx: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ...
    - val: W L W W W W W L W W W W W L W W W W W W W
  - Ans: N%6 == 1 is the loosing position.

* 2. Let us assume, we can pick (2,4) stone(s)
  - `Case Normal Rule`
    - DP table for
    - idx: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ...
    - val: L L W W W W L L W W  W W  L  L  W  W   W  W  L  L  W
  - Ans: N%6 <= 1  is the loosing position.
  - `Case Misere Rule`
    - DP table for
    - idx: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ...
    - val: W W L L W W W W L L  W  W  W  W  L  L  W  W  W  L  W
  - Ans: N%6 == 2 or 3 is the loosing position.

### The Game of Nim

- There are n piles of coins. When it is a player’s turn he chooses one pile and takes at least one coin from it. 
- There are n piles of chips containing x1, x2, and x3,...xn chips respectively.
- Two players take turns
- Moving each move consists of selecting one of the piles and removing chips from it. 
- You may not remove chips from more than one pile in one turn, but from the pile you selected you may remove as many chips as desired, from one chip to the whole pile. 
- There is exactly one terminal position, namely (0, 0, 0,....0),which is therefore a P-position(Loosing).
- `NIM-SUM`: xor of all the pile size 
- **Result if xor of all pile sizes(nimsum) is 0 => P2 wins else P1 wins**.
- In Normal Game of Nim
```cpp
  int n; // number of piles
  cin >> n;
  vector<int> piles(n);
  int xorr = 0;
  for (int i = 0; i < n; i++) {
    cin >> piles[i];
    xorr = xorr ^ piles[i];
  }
  if (xorr) cout << "P1 wins" << endl;
  else cout << "P2 wins" << endl;
```

- In **Misere's Version of Nim**, result remains same as of Normal Nim ,except for the case when all piles are of height 1.
- In that case, result reverses.

```cpp

  int n; // number of piles
  cin >> n;
  vector<int> piles(n);

  bool isAllOnes = true;
  int xorr = 0;
  for (int i = 0; i < n; i++) {
    cin >> piles[i];
    xorr = xorr ^ piles[i];
    if (piles[i] != 1) isAllOnes = false;
  }

  if (isAllOnes) {
    if (n & 1 /* can use (xorr & 1) as well*/) cout << "P2 wins" << endl;
    else cout << "P1 wins" << endl;
  } else {
    if (xorr) cout << "P1 wins" << endl;
    else cout << "P2 wins" << endl;
  }
}
```

### Games as Graphs

- This helps in identifying positions in the game with vertices of the graph and moves of the game with edges of the graph.
- Then we will define a function known as the Sprague-Grundy function that contains more information than just knowing whether a position is a P-position or an N-position.
- Graphs will always be undirected and infact the DAG.


### Grundy Number also called Nimber 

- G(S) : Grundy number of a state.
- G(S) = mex(G(s1), G(s2), G(s2), G(s3),..., G(sn)), where s1,s2... are the states to which S can directly go .
- In Nim game, for a single Pile of size S, we can go to S-1,S-2,.....0. => G(S) =  mex(G(0),G(1),G(2),...,G(S-1)). 
- Note that G(S) is defined as a Recursive Function.
- Use Bottom up to Fillup the values or use TopDown + Memoization.
- For terminal positions G(S) = {} => G(terminal position) = 0.
-  Positions x for which G(x) = 0 are Lossing positions(P-positions) and all other positions are N-positions(winnnig).

- The Sprague-Grundy function thus contains a lot more information about a game
than just the P- and N-positions.
- What is this extra information used for? As we will see, the Sprague-Grundy function allows us to analyze sums of graph games.

### Sum of Combinatorial Games

- Given several combinatorial games, one can form a new game played according to the
following rules. A given initial position is set up in each of the games. Players alternate
moves. A move for a player consists in selecting any one of the games and making a legal
move in that game, leaving all other games untouched. Play continues until all of the
games have reached a terminal position, when no more moves are possible. The player
who made the last move is the winner.
The game formed by combining games in this manner is called the (disjunctive)
sum of the given games. The Sprague-Grundy functions for the component games may be used to find the Sprague-Grundy function of the sum.

- As an example, the 3-pile game of nim may be considered as the sum of three one-pile games of nim.

### Sprague Grundy Theorem

- Game of NIM is a special case of sprunge Grundy Theorem. 

- theorem gives a method to get the Sprague-Grundy function for a sum of graph games when the SpragueGrundy functions are known for the component games.

- The basic theorem for sums of graph games says that the Sprague-Grundy
function of a sum of graph games is the nim-sum of the Sprague-Grundy functions of its
component games.

- Note that although many of one-pile games are trivial, as is one-pile nim, the SpragueGrundy function has its main use in playing the sum of several such games.


### Conclusion / Note to self:

- calculate grundy numbers only if the given game is a combination of multiple same or different games and them apply sprague grundy theorem.

- else use logic/symmetry/invariance/**dp**/pattern/game of nim resemblence to find the result. (grundy numbers in these cases are either 0/lose or 1/win). hence no need to calculate grundy numbers.


-  Do google game theory questions in competitions.

- generate first few positions and USE OEIS website to search for the pattern.


### Advance TODO
- Green Hackenbush (see PDF)
