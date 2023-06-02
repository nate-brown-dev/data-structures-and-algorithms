'use strict';

const { queueNode, Queue, Graph } = require('../graph-breadth-first/graph-breadth-first');

describe('test graph breadth first traversal', () => {

  test('can instantiate a new graph', () => {
    let breadthGraph = new Graph();
    console.log(breadthGraph)
    expect(breadthGraph).toBeTruthy();
  });

  test('can traverse the graph and return array of visited nodes', () => {
    let breadthGraph = new Graph();
    breadthGraph.addNode("Pandora");
    breadthGraph.addNode("Arendelle");
    breadthGraph.addNode("Metro");
    breadthGraph.addNode("Monster");
    breadthGraph.addNode("Naboo");
    breadthGraph.addNode("Narnia");
    breadthGraph.addEdge("Pandora", "Arendelle");
    breadthGraph.addEdge("Arendelle", "Metro");
    breadthGraph.addEdge("Arendelle", "Monster");
    breadthGraph.addEdge("Metro", "Monster");
    breadthGraph.addEdge("Metro", "Narnia");
    breadthGraph.addEdge("Metro", "Naboo");
    breadthGraph.addEdge("Monster", "Naboo");
    breadthGraph.addEdge("Narnia", "Naboo");
    console.log(breadthGraph);

    console.log(breadthGraph.breadthFirstTraversal("Pandora"));
  });

});
