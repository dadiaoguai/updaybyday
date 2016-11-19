(function() {
  var BinaryTree, Node, bst, inOrder, postOrder, preOrder;

  Node = (function() {
    function Node(ele, left, right) {
      if (left == null) {
        left = null;
      }
      if (right == null) {
        right = null;
      }
      this.element = ele;
      this.left = left;
      this.right = right;
    }

    return Node;

  })();

  BinaryTree = (function() {
    function BinaryTree() {
      this.root = null;
      this.insert = function(ele) {
        var current, node, parent, results;
        node = new Node(ele);
        if (this.root === null) {
          return this.root = node;
        } else {
          current = this.root;
          results = [];
          while (true) {
            parent = current;
            if (node.element < current.element) {
              current = current.left;
              if (current == null) {
                parent.left = node;
                break;
              } else {
                results.push(void 0);
              }
            } else {
              current = current.right;
              if (current == null) {
                parent.right = node;
                break;
              } else {
                results.push(void 0);
              }
            }
          }
          return results;
        }
      };
      this.max = function(node) {
        if (node == null) {
          node = this.root;
        }
        while (node.right !== null) {
          node = node.right;
        }
        return node;
      };
      this.min = function(node) {
        if (node == null) {
          node = this.root;
        }
        while (node.left !== null) {
          node = node.left;
        }
        return node;
      };
      this.find = function(data) {
        var current;
        current = this.root;
        while (true) {
          if (current.element === data) {
            return current;
          } else {
            if (data > current.element) {
              if (current.right != null) {
                current = current.right;
              } else {
                null;
              }
            } else {
              if (current.left != null) {
                current = current.left;
              } else {
                null;
              }
            }
          }
        }
      };
      this.remove = function(data) {
        var current, min, node;
        node = this.find(data);
        if (node != null) {
          if (node.left === null && node.right === null) {
            return node.element = null;
          } else if (node.left === null || node.right === null) {
            if (node.left != null) {
              node.element = node.left.element;
              return node.left = null;
            } else {
              node.element = node.right.element;
              return node.right = null;
            }
          } else if (node.left !== null && node.right !== null) {
            min = this.min(node.right);
            node.element = min.element;
            current = node.right;
            if (current.element === min.element) {
              return node.right = null;
            } else {
              while (current.left.element !== min.element) {
                current = current.left;
              }
              return current.left = null;
            }
          }
        }
      };
      this.nodeNum = function(node) {
        var count, trave;
        if (node == null) {
          node = this.root;
        }
        count = 0;
        trave = function(node) {
          if (node != null) {
            trave(node.left);
            trave(node.right);
            return count++;
          }
        };
        trave(node);
        return count;
      };
    }

    return BinaryTree;

  })();

  inOrder = function(node) {
    if (node != null) {
      inOrder(node.left);
      console.log(node.element);
      return inOrder(node.right);
    }
  };

  preOrder = function(node) {
    if (node != null) {
      console.log(node.element);
      preOrder(node.left);
      return preOrder(node.right);
    }
  };

  postOrder = function(node) {
    if (node != null) {
      postOrder(node.left);
      postOrder(node.right);
      return console.log(node.element);
    }
  };

  bst = new BinaryTree();

  bst.insert(30);

  bst.insert(10);

  bst.insert(40);

  bst.insert(15);

  bst.insert(32);

  bst.insert(45);

  bst.insert(41);

  console.log('最大值测试');

  console.log(bst.max().element);

  console.log('最小值测试');

  console.log(bst.min().element);

  console.log('删除测试: 40');

  bst.remove(40);

  inOrder(bst.root);

  console.log('节点个数测试');

  console.log(bst.nodeNum());

}).call(this);
