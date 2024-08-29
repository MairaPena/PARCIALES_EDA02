class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    addNode(value) {
      let node = new Node(value);
      if (!this.root) {
        this.root = node;
      } else {
        let current = this.root;
        while (true) {
          if (value < current.value) {
            if (!current.left) {
              current.left = node;
              break;
            }
            current = current.left;
          } else {
            if (!current.right) {
              current.right = node;
              break;
            }
            current = current.right;
          }
        }
      }
    }
  
    preOrder(node = this.root) {
      if (!node) {
        return;
      }
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  
    postOrder(node = this.root) {
      if (!node) {
        return;
      }
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  
    inOrder(node = this.root) {
      if (!node) {
        return;
      }
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  
    height(node = this.root) {
      if (node === null) {
        return 0;
      } else {
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
      }
    }
  }
  
  const tree = new BinaryTree();
  tree.addNode(20);
  tree.addNode(4);
  tree.addNode(12);
  tree.addNode(1);
  tree.addNode(2);
  
  console.log("Altura del árbol:", tree.height());
  console.log("////////////")
  console.log("Recorrido en Pre-Order:");
  tree.preOrder(); 
  console.log("Recorrido en In-Order:");
  tree.inOrder(); 
  console.log("Recorrido en Post-Order:");
  tree.postOrder(); 