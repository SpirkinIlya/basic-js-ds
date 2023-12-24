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
    //delete data from root
    if (this.rootNode.data === data) {
      let leftNode = this.rootNode.left;
      let rightNode = this.rootNode.right;
      if (leftNode) {
        this.rootNode = leftNode;
      }else {
        this.rootNode = rightNode;
      }
      return;
    }
    let nextNode;
    let movement = '';
    if (data > currentNode.data) {
      nextNode = currentNode.right;
      movement = 'right';
    }else {
      nextNode = currentNode.left;
      movement = 'left';
    }
    /*while (nextNode) {
      if (data === nextNode.data) {
        
      }
    }*/
    // remove line with error and write your code here
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