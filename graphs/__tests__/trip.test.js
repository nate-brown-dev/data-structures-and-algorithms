'use strict';

const { businessTrip, Graph } = require('../graph-business-trip/graph-business-trip');

describe('test graph business trip', () => {

  test('can determine if two cities can be connected with direct flights', () => {
    let tripGraph = new Graph();
    tripGraph.addNode("Pandora");
    tripGraph.addNode("Arendelle");
    tripGraph.addNode("Metro");
    tripGraph.addNode("Monster");
    tripGraph.addNode("Naboo");
    tripGraph.addNode("Narnia");
    tripGraph.addEdge("Pandora", "Arendelle", 150);
    tripGraph.addEdge("Arendelle", "Metro", 99);
    tripGraph.addEdge("Arendelle", "Monster", 42);
    tripGraph.addEdge("Metro", "Monster", 105);
    tripGraph.addEdge("Metro", "Narnia", 37);
    tripGraph.addEdge("Metro", "Naboo", 250);
    tripGraph.addEdge("Monster", "Naboo", 73);
    tripGraph.addEdge("Narnia", "Naboo", 250);
    console.log(tripGraph);
    console.log(tripGraph.breadthFirstTraversal("Pandora"));
  });

});
