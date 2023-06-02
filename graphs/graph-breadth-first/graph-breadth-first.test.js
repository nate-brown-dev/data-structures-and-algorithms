const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

graph.breadthFirstTraversal('A');
// Output: A, B, D, C, E
