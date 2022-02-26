## Graph Data Structure, G = (V,E)

- Directed(ordered edge pair) vs Undirected(unordered edge pair)
- Weighted vs unweighted
- **Walk**
  - A physical link & can repeat the way while walking.
  - v1, v2, v3, v5, v1, v2 is a walk.
  - v1, v2, v3, v5, v4 is also a walk.
- **Path**
  - A physical link where vertices repetition is not allowed.
  - A path is a walk without repeated vertices.
  - v1, v2, v3, v5, v4 is a path. (No repetition)
  - v1, v2, v3, v5, v1, v2 is not a path.
- **trial**
  - A trial is a walk without repeated edges.
  ```diagram

          Walk
          /  \
      Path   Trial (<-----subcategories)
  ```
- **Bridge or cut edge or cut-arcs**
  - An edge removal that either disconnects the connected graph or increases the number of connected components in a graph is called Bridge.
- **Articulation Point or cut vertices**
  - Vertex removal of which either disconnects the connected graph or increases the number of connected components in a graph is called cut vertex.
- **Biconnected Graph**
  - If removal of any one vertex doesn't disconnect the graph, the graph is called biconnected(connected through 2 ways).
- Tree is an acyclic connected Graph.
- If a graph is connected then
  - minimum no. of edges = n-1 = Tree
  - maximum no. of edges = nC2 in undirected, 2\*nC2 in directed.
- DFS can also be used
  - To find whether a given vertex is the articulation point in a graph or not.
  - To find whether a given edge is the bridge in a graph or not.
- **Simple Graph**
  - graph without self loops and multiple edges b/w two vertices.
- **Handshaking Theorem**
  - 2 * No. of edges = 2*|E| = Sum of degree of all vertices.
    - => Sum of degrees is always even.
    - => number of odd degree vertices are always even in number.
    - In undirected graphs, sum of in-degree = sum of out-degree = |E|.

### Graph Representations
- _Adjacency Matrix_
  - Space: O(V\*V)
  - Operations:
    - Check if u and v are adjacent is O(1).
    - Finding vertices adjacent to u is O(V).
    - Finding degree of u is O(V).
    - Add/Delete an edge is O(1)
- _Adjacency List_
  - Space: O(V+E) <!-- V for array size and E for total list size in chaining -->
  - can be implemented using dynamic size 2D-array or linked list.
  - Operations:
    - Check if u and v are adjacent is O(V).
    - Finding vertices adjacent to u is O(degree(u)).
    - Finding degree of u is O(1) `as internal arrays size is stored in v.size()`.
    - Add/Delete an edge is O(1).
  - Example
    - `vector<int> adjList[V]` (array of vectors).
    - or `unordered_map<int> adjList[V]` (array of hashmaps).
    - or `vector<vector<int> > v` (vector of vectors).
    - or `vector<list<int> > v` (vector of list).
    - or `unordered_map<vector<int> > v` (hashmap of vectors).
    - or `unordered_map<list<int> > v` (hashmap of lists).
- _Edge List_
  - Used when we required sorting based on edge weights like in Finding MST
  - [(0,3), (0,2),(1,4),(2,4)]
  - list/vector/array of pair(src, dest)
  - list/vector/array of triplet(weight, src,dest)
- _Implicit Graph_
  - Graph given in form of 2d Matrix where there is 4 way connectivity(movement can be top,right,down,left) or 8-way connectivity(All 8 directions to move).
  - cells sharing edge => 4 way
  - cells sharing corner => 4 way
  - cells sharing edges and corner => 8 way

- Adjacency list are far more suited than Adjacency matrix as most of the scenarios have sparse graphs in real life.
- **Handling vertices with value other than integer like strings as the name of city.**
  - We store the city name and a index in hashmap. (So that finding the city is constant)
  - along with index and city name in array.(So that finding city from index is constant)
- We need to mark things visited, so that next time if we come back to the same thing we know that we already came there once.

### Cycle Detection can be done using BFS or DFS or DSU.

- (`In undirected graphs`):how? check for any vertex, if the adjacent vertices are already visited or not but ignoring the parent vertex.
  - can be done by BFS or DFS.
  - `Conclusion: check for vertices visitation except for the parent one.`
- how? (`In directed graphs`):
  - directed algo (previous point) fails for `3-->1<--2` graph.(for loop will go to 1 then 2 then 3).
  - **using DFS:** we look for the back edge, which means while doing DFS we check if an adjacent vertex is already available in recursion stack or not (maintains a boolean array for what we have pushed to stack till now)(or we can use visited array for same, 0 means not visited, 1 means visited but not in stack, 2 means visited and in the stack).
  - `Conclusion: check for backedge,i.e. Is vertex already in recursion-stack?`
  - same can also work in undirected graphs(above case.) But Leave parent vertex as well(of course).
  - **using BFS:** using Kahn's Algo for topological sorting. If after doing kahn's algo onto graph(maybe disconnected). if some vertex is still not visited => cycle exist.(see below in the page for more clarity).
  - Using DSU: 
    - while making the graphs, find if any edge's both vertices belongs to same set or not.

- `Note:` **Backedge**: 
  - If a node's neighbour is visited and not its parent, that edge is called backedge.
  - While doing dfs, if a vertex points to the node in call stack, then it is a backedge.
  - and if atleast one backedge exist in a graph, then it always contains a cycle.   

### Bipartite Graphs

  - We can divide all vertices in two sets such that all edges of the graph are from one set to another set.
  - Either we can check for odd-length cycle. A graph is Biparttite iff it has no odd-cycle.
    - => Every tree is Bipartite.
    - => Every DAG is Bipartite.
  - Or we color nodes and see if violation occurs or not.
  - 2 colorable graphs[Bichromatic] are bipartite (=> chromatic Number of such graph is 2).
  - Notation: **K<sub>n,m</sub>** whereas Complete graph notation is K<sub>n</sub>

### DSU (Disjoint Set Union)/(Union and Find)

  - Union and Find both complexity will be O(V).
    - One Find(A) will be O(V).
  ```cpp
    // initially parent of all vertices is -1.
    vector<int> parent(V,-1); 
    int find(int idx){
      if(parent[idx]==-1) return idx;
      return find(parent[idx]);
    }
  ```
    - One Union(A,B) will be O(V). [btw, union internally uses find()]
  
  ```cpp
    // initially parent of all vertices is -1.
    vector<int> parent(V,-1); 
    int find(int idx){
      if(parent[idx]==-1) return idx;
      return find(parent[idx]);
    }

    void union(int idx1, int idx2){
      int p1 = find(idx1);
      int p2 = find(idx2);
      if(p1!=p2) parent[p1] = p2; // can be parent[p2] = p1; as well.
      // else they belong to the same set dont do anything -> Cycle !!!
    }
  ```
  - Optimizations making DSU O(1) amortized, Proof not discussed.
    - Path Compression
      - Name says it all
      - just one change in find fn(), return parent[idx] = find(parent[idx]);
      ```cpp
        int find(int idx){
          if(parent[idx]==-1) return idx;
          // path compression
          return parent[idx] = find(parent[idx]);
        }
      ``` 
      - Example let graph was like: 
      ```diagram
             3
            / \
            4  2
            /   \
            5    1
            /   
            6
      ```
      - while finding out the ultimate parent of 6, we make 4, 5,6 direct children of 3 and return 3(see code).
      ```diagram
                3
             / / / \
            4 5 6   2
                     \
                      1
      ```
    - Union By Rank
      - while doing the set union, attach smaller tree on to bigger one and not vice-versa so that whiel finding out the ultimate parent of a vertex, path traversal remains smaller and not increased.
      - to find out which tree is bigger, we add extra variable to every vertex, which say subtree(s) size of the vertex(how many children, called `rank` are attached to a node, so that while doing union, we connect lower rank vertex to higher).
      - Example: let skew tree be 4-->3-->2-->1 and 5-->6, here we make 1 as parent of 5 and not vice versa, because 1 has 3 more children whereas 5 has only one. If we would have done vice-versa, then finding ultimate parent of 2,3,4 would have increased by one. 
      ```cpp
       // initially parent of all vertices is -1.
      vector<int> parent(V,-1); 
       // initially rank of all vertices is 1.
      vector<int> rank(V,1); 
      int find(int idx){
        if(parent[idx]==-1) return idx;
        // path compression optimization
        return parent[idx] = find(parent[idx]);
      }

      void union(int idx1, int idx2){
        int p1 = find(idx1);
        int p2 = find(idx2);
        if(p1!=p2) {
          // union by rank optimization
          if(rank[p1]<rank[p2]){
              // means p1 has less chilren => 
              parent[p1] = p2;
              // children of p2 increases by rank(p1)
              rank[p2]+= p1;
          }else{
              parent[p2] = p1;
              rank[p1] += rank[p2]
          }
        }
      }
      ```

### Spanning Tree
  - concept for undirected Graphs only. Is it ?
  - A graph can have multiple spanning trees.
  - A graph can have multiple Minimum spanning trees but of equal lengths. because of minimum
    - Example: An unweighted graph(w=1 for every edge) has multiple MSTs of length (#nodes-1)

### Properties of Spanning trees(ST)/MST
  - #edges in ST = V-1.
  - Spanning Trees is maximally acyclic => If we add one more edge to ST, the graph will have a cycle.
  - Spanning Trees is minimally connected => If we remove one edge from ST, graph will become disconnected.
  - There may exist many ST of same weight.
  - If each edge has a distinct weight, then we will have exactly one unique MST.
  - Cycle Property: For any Cycle C in a graph, if the edge weight is larger than all other edges in C. Then that edge cannot be a part of MST.
  - Min-cost-edge : If the minimum weighted edge in Graph is Unique, Then it will always belong to MST.

### Finding MST

  - Prims and Kruskal's Algorithms
  - `Kruskal's Algorithms (For Undirected Graph)`
    - Greedy Algo, `Complexity O(E*logE)` ; as E = V^2 => logE = 2LogV => `Complexity O(ElogV)`
    - `space complexity: O(V+E)`, 
      - O(V) to maintain rank and parent array in union find.
      - and O(E) to store and sort edges by weight.
    - It Picks Edges one by one
    - Uses `Union Find` Data structure (DSU : Disjoint Set Union)
    - `Sorts edges` in non-decreasing order by weight
    - Pick the edge(u---> v) if it is not forming a cycle. i.e u and v belong to different sets.
  
  - `Prim's Algorithm (For Undirected Graphs)` O(ElogE) = O(ElogV)
    - Uses Min Heap/set to find minimum of edge weights.
    - `space complexity: O(V+E)`, 
      - O(E) to maintain heap. 
      - and O(V+E) to maintain graph.
    - Also a Greedy Approach.
    - It starts from source vertex, add respective edges into set, find one with minimum weight(selected-edge) and add to MST, further add edges of selected-edges-end-vertex into set and so on(if set gives an edge whose endpoints are already covered into MST, we leave that edge, because if we choose that edge, it will create cycle).
  - Prim's algorithm is significantly faster in the limit when you've got a really dense graph with many more edges than vertices. Kruskal performs better in typical situations (sparse graphs) because it uses simpler data structures and sorts edge list.

### Shortest Distance Algorithms
  - _Single Source Shortest Path (SSSP)_
    - *BFS Algortihm*
      - helps in finding the shortest path b/w u and v in an `unweighted or equal weighted` Graph.
      - Works for both directed and undirected graphs.
        - Shortest path b/w u and v in a weighted Graph is done using Dijkstra, which is similar to BFS, rather than a queue, it uses a priority queue/ordered_set to pick the node with minimum weight from current node out of all the available options.
    - *0-1 BFS*
      - Find single source shorted paths to all nodes with edge weights of 0 or 1.
    - *Dijkstra's Algorithm* O((V+E)*logV) = O((V+E)*logE)
      - we try to fix the distances we can from source.
      - (fails on -ve weighted cycle)
    - *Bellman's Ford Algorithm* O(V*E)
      - relax all the edges |V| -1 number of times.
  - _All Pair Shortest Path(APSP)_
    - *Floyd Warshall Algorithm* O(V*V*V) = O(V^3)
      - requires adacency matrix only.
      - fills the 2D-distance matrix via a dp solution.
      - initialize matrix with large values , Infinity.
      ```cpp
        for k(0,V):
          for i(0,V):
            for j(0,V):
              dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]); 
      ```

### MultiSource BFS

1. push all the sources into queue and do the BFS.
2. Used when need to find the shortest distance from multiple points (feels like spreading of virus to neighbours one at time.).

### 0-1 BFS

1. uses deque

## Articulation Points(CutPoint) and Bridges

- Discovered Time
- Lowest Time
- Edge is Bridege: If lowestTime[child] > DiscoveredTime[currentNode]
- vertex is a cutpoint: If lowestTime[child] >= DiscoveredTime[currentNode]
  - Special Case: Root is cutpoint, if number of child in a DFS tree of graph is > 1.

### Topological sorting

  - Works only for DAG
  - via **BFS (Kahn's Algorithm)** - remove the node with indegree 0. keep doing it.
    - Kahn is useful in the cases where we are finding topological in directed `cyclic` graph.
    - because nodes present in a directed cycle will never have indegress==0 and hence it will not go into the queue. and hence remains unvisted. => we can detect the nodes that are a part of cycle. and if some node is univisted that means there exist atleast a cycle in graph. 
    ```cpp
      int n,m;
      vector<int> gr[100100];
      int indegree[100100];
      vector<int> topo;

      void kahn(){
        queue<int> q;
        for(int i=0;i<n;i++){
          if(indegree[i]==0) q.push(i);
        }

        while(!q.empty()){
          int f = q.front();
          q.pop();
          topo.push_back(f);
          for(auto v: gr[f]){
            indegree[v]--;
            if(indegree[v]==0) q.push(v);
          }
        }
      }

      void solve(){
        cin>>n,m;
        for(int i=0;i<n;i++){
          int a,b;
          cin>>a>>b;
          gr[b].push_back(a)
        }

        for(int i=0;i<n;i++){
          if(!vis[i]){
            dfs(i);
          }
        }

        bool isCyclePresent = false;
        for(int i=0;i<n;i++){
          if(!vis[i]){
            isCyclePresent = true;
          }
        }

        if(isCyclePresent) {
          cout<<"Cycle Is Present";
          return;
        }

        reverse(topo.begin(), topo.end());        
      }

    ```
  - via **DFS** - Save the nodes when none of its neighbors remained to be visited. print output in reverse order.
    - can save in a list and use push_front to save the node(basically appendToHead). and then print the list.
    - can save it in the stack as then print the stack.
  - Application of Topological sorting:-
    - 1. Finding Lexiographically smallest Toppological ordering.
      - Use Kahn's Algo but instead of queue, use priority queue/set.

### Strongly Connected Digraphs(Connectivity in Directed Graph)

  - Directed graph is strongly connected if there exists a **directed path** b/w every pair of vertices.
  - And components that are strongly connected are called Strongly connected Components of Graph.
  - Strongly component <=> Directed Cycle.
  - Condensed Connected Graph

### Tree
 
### *E*ulerian path
  - a path that covers every and all *e*dges exactly once. 

### Hamiltonian path
  - a path that covers every and all vertices exactly once. 

### Later

- LCA
- Binary Lifting
- Euler Tour
- Network Flow


### Weakly Connected Graph

  - Directed Graph which is not strongly connected, But If we remove the direction of edges and it becomes a Connected graph. then it is weakly connected.
