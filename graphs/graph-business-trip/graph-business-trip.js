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
  addEdge(source, destination, weight) {
    this.adjacencyList[source].push({ "city": destination, "distance": weight });
    this.adjacencyList[destination].push({ "city": source, "distance": weight });
  }

  // method to get all the nodes
  // in a graph the nodes correspond to the keys of the adjacency list
  // this method returns all nodes, even those that do not have edges
  getAllNodes() {
    return (Object.keys(this.adjacencyList));
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
    return (Object.keys(this.adjacencyList).length)
  }

  breadthFirstTraversal(startNode) {
    const visited = [];
    const queue = [];

    queue.push(startNode);
    visited.push(startNode);

    while (!queue.isEmpty()) {
      const tempNode = queue.shift();
      console.log(tempNode);

      for (let neighbor of this.adjacencyList[tempNode]) {
        if (!visited.includes(neighbor)) {
          queue.push(neighbor);
          visited.push(neighbor);
        }
      }
    }

    return visited;
  }
}

module.exports = {
  Graph
}