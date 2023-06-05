'use strict';

// previously written graph class

class Graph {

  // the adjacency list is an object consisting of key-value pairs
  // each key is a node
  // the value for each key is a list of the nodes to which the key is connected by an edge
  constructor() {
    this.adjacencyList = {};
  }

  // method to add a node
  // the new node has no edges
  addNode(node) {
    this.adjacencyList[node] = [];
  }

  // method to add an edge connecting two nodes
  // each node has an array of adjacent nodes
  // an undirected edge links both nodes to each other
  // when the edge is defined, each node adds the other to its adjacency list
  addEdge(source, destination) {
    this.adjacencyList[source].push(destination);
    this.adjacencyList[destination].push(source);
  }

  // method to get all the nodes
  // in a graph the nodes correspond to the keys of the adjacency list
  // this method returns all nodes, even those that do not have edges
  getAllNodes() {
    return(Object.keys(this.adjacencyList));
  }

  // method to get all neighboring nodes for a given node
  // the neighboring nodes are any node connected to the given node by an edge
  // the adjacency list for the given node is an array of neighboring nodes
  getNeighborNodes(node) {
    return this.adjacencyList[node];
  }

  // method to count the number of nodes in the graph
  // the number of nodes is equal to the number of keys in the adjacency list
  countSize() {
    return(Object.keys(this.adjacencyList).length)
  }

}

// function to traverse the graph depth first
// console log each visited node
// return set of visited nodes

function depthFirstTraversal(graph, startNode) {
  const stack = [startNode];
  const visited = [];

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (!visited.includes(currentNode)) {
      visited.push(currentNode);
      console.log(currentNode); // Process the vertex

      const neighbors = graph.adjacencyList[currentNode];
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited.includes(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
  return visited;
}

module.exports = {
  Graph,
  depthFirstTraversal
};