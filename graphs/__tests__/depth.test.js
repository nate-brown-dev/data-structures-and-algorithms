'use strict';

const { Graph, depthFirstTraversal } = require('../graph-depth-first/graph-depth-first');

describe('test graph depth first traversal', () => {

  test('can return array of visited nodes in proper order', () => {
    let depthGraph = new Graph();
    depthGraph.addNode("A");
    depthGraph.addNode("B");
    depthGraph.addNode("C");
    depthGraph.addNode("D");
    depthGraph.addNode("E");
    depthGraph.addNode("F");
    depthGraph.addNode("H");
    depthGraph.addEdge("A", "B");
    depthGraph.addEdge("A", "D");
    depthGraph.addEdge("B", "C");
    depthGraph.addEdge("B", "D");
    depthGraph.addEdge("D", "E");
    depthGraph.addEdge("D", "H");
    depthGraph.addEdge("D", "F");
    depthGraph.addEdge("F", "H");
    console.log(depthGraph);
    console.log(depthFirstTraversal(depthGraph, "A"));
    expect(depthFirstTraversal(depthGraph, "A")).toStrictEqual(
      ["A", "B", "C", "D", "E", "H", "F"]);
  });

});
