const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
    }else {
      let currentNode = this.rootNode;
      do {
        if (data > currentNode.data) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          }else {
            currentNode.right = new Node(data);
            break;
          }
        }else {
          if (currentNode.left) {
            currentNode = currentNode.left;
          }else {
            currentNode.left = new Node(data);
            break;
          }
        }
      } while (true)
    }
  }

  has(data) {
    if (!this.rootNode) {
      return false;
    }

    let currentNode = this.rootNode;
    do {
      if (currentNode.data === data) {
        return true;
      }else {
        if (data > currentNode.data){
          if (currentNode.right) {
            currentNode = currentNode.right;
          }else {
            return false;
          }
        }else {
          if (currentNode.left) {
            currentNode = currentNode.left;
          }else {
            return false;
          }
        }
      }
    }while (true)
    // remove line with error and write your code here
  }

  find(data) {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    do {
      if (currentNode.data === data) {
        return currentNode;
      }else {
        if (data > currentNode.data){
          if (currentNode.right) {
            currentNode = currentNode.right;
          }else {
            return null;
          }
        }else {
          if (currentNode.left) {
            currentNode = currentNode.left;
          }else {
            return null;
          }
        }
      }
    }while (true)
    // remove line with error and write your code here
  }

  remove(data) {
    if (!this.rootNode) {
      return;
    }

    let currentNode = this.rootNode;
    let parentNode = null;
    //searching for node with Node.data === data
    while (currentNode){
      if (data > currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }else if (data < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        break;
      }
    }
    //if we found Node
    if (currentNode) {
      //Our Node has no child Nodes
      if (currentNode.left === null && currentNode.right === null) {
        if (parentNode) {
          if (parentNode.left === currentNode) {
            parentNode.left = null;
          }else {
            parentNode.right = null;
          }
        }else {
          this.rootNode = null; //if we trying to delete rootNode
        }
      }else if (currentNode.left === null) { //our Node has one child Node on Right side
        if (parentNode) {
          if (parentNode.left === currentNode) {
            parentNode.left = currentNode.right;
          }else {
            parentNode.right = currentNode.right;
          }
        }else {
          this.rootNode = currentNode.right; //if we trying to delete rootNode
        }
      }else if (currentNode.right === null) { //our Node has one child Node on Left side
        if (parentNode) {
          if (parentNode.left === currentNode) {
            parentNode.left = currentNode.left;
          }else {
            parentNode.right = currentNode.left;
          }
        }else {
          this.rootNode = currentNode.left; //if we are tryin to delete rootNode
        }
      }else { //our Node has two child Nodes
        let minNode = this.findMinNode(currentNode.right);
        this.remove(minNode.data);
        currentNode.data = minNode.data;
      }
    }
  }

  findMinNode(node) {
    let currentNode = node;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
    // remove line with error and write your code here
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};