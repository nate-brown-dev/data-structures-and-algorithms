// queue class for traversal

class queueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(data) {
    let nodeToEnq = new queueNode(data);
    if (!this.front) {
      this.front = nodeToEnq;
    }
    if (!this.back) {
      this.back = nodeToEnq;
    } else {
      let current = this.back;
      nodeToEnq.next = current;
      this.front = current;
      this.back = nodeToEnq;
    }
  }

  dequeue() {
    if (!this.front && this.back) {
      console.error('empty queue');
    }
    else {
      let current = this.back;
      while (current.next != this.front) {
        current = current.next;
      }
      let deqVal = current.next.value;
      current.next = null;
      this.front = current;
      return deqVal;
    }
  }

  peek() {
    if (!this.front && !this.back) {
      return false;
    }
    else {
      return this.front.value;
    }
  }

  isEmpty() {
    if (!this.front && !this.back) {
      return true;
    } else {
      return false;
    }
  }

}


// graph class

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addNode(node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }
  }

  addEdge(node1, node2) {
    if (this.adjacencyList[node1] && this.adjacencyList[node1]) {
      this.adjacencyList[node1].push(node2);
      this.adjacencyList[node2].push(node1);
    }
  }


// breadth first method
// requires a queue and an array
// returns the array (visted nodes in order)

  breadthFirstTraversal(startNode) {
    const visited = [];
    const queue = [];

    queue.push(startNode);
    visited.push(startNode);

    while ( !queue === [] ) {
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
  queueNode,
  Queue,
  Graph
}