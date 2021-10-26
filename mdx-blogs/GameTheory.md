# Game Theory
- Study of Games where All players play optimally.
- Two Person Games, no chance moves with always a win or loss outcome.
- Both players play optimally and take alternative turns.
- Finite set of Positions.

- **Impartial v/s Partial Games**
  - Games in which the set of moves from any given position is the same for both players are called Impartial Games, otherwise called Partial Games.
  - Chess is a Partial Game as Let position is the starting of the game.  The set of moves is different for both players depending upon the player is playing as white or Black.

- **Normal/Misere Rule**
  - Normal RULE: Last to make a move wins.
  - Misere RULE: Last to make a move Losses.

## Take-Away Games
- 2 Players, Alice and Bob. 
- N stones in a Pile
- Each player can pick either 1 or 2 or 3 stone(s) at a time
- **Normal RULE**: The last player to pick wins.
- Solutions: Go from Base case to top(Bottom UP DP/Backward Induction) & Assume you are Alice.
- Example:
  - Let N =             0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 
  - dp[i] = Can I win ? L | W | W | W | L | W | W | W | L | W | W  | W  | L  | W 
  - `Explanation`: See for N=4, I can only go to 3, 2, or 1. Since all positions are winning positions, I will lose. To be clear, I will land on these positions and, then it would be BOB's turn.
  - `Observation`: If all n-Stone(i) are winning, Then dp[i] is L else W
  - `Implies N%4 ==0 is the loosing position.`
  <!-- - So try to always go to N%4 to win. -->

- **Misere RULE**: Last player to pick losses(reverse of above).
  - Let N =     0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
  - Can I win ? W | L | W | W | W | L | W | W | W | L | W  | W  | W  | L  | W  | 
  - `Observation`: If all n-Stone(i) are winning, Then dp[i] is L else W
  - `Implies N%4 == 1` is always the lossing position.
  <!-- - So always try to be on N is congrent to 1%4 position. -->

## More Example with different picking up of Stones

  - 1. let we can pick (1,2,3,4,5)
  - `Case Normal Rule`
    - DP table for 
    - idx: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ...
    - val: L W W W W W L W W W W  W  L  W  W  W  W  W  L  W  W    
  - Ans: N%6 == 0 is the lossing position.
  - `Case Misere Rule`
    - DP table for 
    - idx: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ...
    - val: W L W W W W W L W W W  W   W  L W  W  W  W  W  W  W  
  - Ans: N%6 == 1 is the lossing position.


  - 2. let we can pick (2,4)
  - `Case Normal Rule`
    - DP table for 
    - idx: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ...
    - val: L - W - W - L - W - W  -  L  -  W  -  W   -  L  - W      
  - Ans: N%6 == 0 is the lossing position. and odd positions are INVALID.
  - `Case Misere Rule`
    - DP table for 
    - idx: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ...
    - val: W - L - W - W - L - W  -  W  -  L  -  W  -  W  -  L  
  - Ans: N%6 == 2 is the lossing position. and odd positions are INVALID.


## The Game of Nim
## Games as Graphs
## Sum of Combinatorial Games
## Sprague Grundy Theorem
## Examples
