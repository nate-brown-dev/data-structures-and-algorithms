'use strict';

const Graph = require('../graph-class/graph');

describe('test graph class', () => {

  test('can instantiate a new graph', () => {
    let newGraph = new Graph();
    expect(newGraph).toBeTruthy();
  });

  test('can successfully add a node to the graph', () => {
    let newGraph = new Graph();
    newGraph.addNode("firstNode");
    expect(newGraph.adjacencyList.firstNode).toStrictEqual( [] );
  });

  test('can successfully add an edge to the graph', () => {
    let newGraph = new Graph();
    newGraph.addNode("firstNode");
    newGraph.addNode("secondNode");
    newGraph.addEdge("firstNode", "secondNode");
    expect(newGraph.adjacencyList.firstNode).toStrictEqual( [ "secondNode" ] );
    expect(newGraph.adjacencyList.secondNode).toStrictEqual( [ "firstNode" ] );
  });

  test('can return a collection of all nodes in a graph', () => {
    let newGraph = new Graph();
    newGraph.addNode("firstNode");
    newGraph.addNode("secondNode");
    newGraph.addEdge("firstNode", "secondNode");
    newGraph.addNode("thirdNode");
    let emptyGraph = new Graph();
    expect(newGraph.getAllNodes()).toStrictEqual(
      [ "firstNode", "secondNode", "thirdNode" ]
    );
    expect(emptyGraph.getAllNodes()).toStrictEqual( [] );
  });

  test('can return collection of neighboring nodes', () => {
    let newGraph = new Graph();
    newGraph.addNode("firstNode");
    newGraph.addNode("secondNode");
    newGraph.addEdge("firstNode", "secondNode");
    newGraph.addNode("thirdNode");
    expect(newGraph.getNeighborNodes("firstNode")).toStrictEqual( [ "secondNode" ] );
    expect(newGraph.getNeighborNodes("secondNode")).toStrictEqual( [ "firstNode" ] );
    expect(newGraph.getNeighborNodes("thirdNode")).toStrictEqual( [] );
  });

  test('can return the size of the graph, equal to the number of nodes', () => {
    let newGraph = new Graph();
    newGraph.addNode("firstNode");
    newGraph.addNode("secondNode");
    newGraph.addEdge("firstNode", "secondNode");
    newGraph.addNode("thirdNode");
    console.log(newGraph.countSize());
    expect(newGraph.countSize()).toStrictEqual(3);
  });

  test('can return a graph with only one node and edge', () => {
    let newGraph = new Graph();
    newGraph.addNode("firstNode");
    newGraph.addEdge("firstNode", "firstNode");
    console.log(newGraph);
    expect(newGraph.getAllNodes()).toStrictEqual( [ "firstNode" ] )
    console.log(newGraph.adjacencyList.firstNode);
    expect(newGraph.adjacencyList.firstNode).toStrictEqual( [ "firstNode", "firstNode" ] );
  });

});
