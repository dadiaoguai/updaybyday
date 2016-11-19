(function() {
  var Link, Node;

  Node = (function() {
    function Node(ele) {
      this.element = ele;
      this.next = null;
    }

    return Node;

  })();

  Link = (function() {
    function Link() {
      this.head = new Node('head');
      this.find = function(ele) {
        var curNode;
        curNode = this.head;
        while (curNode.next !== null && curNode.next.element !== ele) {
          curNode = curNode.next;
        }
        if (curNode.next === null) {
          return curNode;
        } else {
          return curNode.next;
        }
      };
      this.findPrevious = function(ele) {
        var curNode;
        curNode = this.head;
        while (!(curNode.next === null) && curNode.next.element !== ele) {
          curNode = curNode.next;
        }
        if (curNode.element === 'head') {
          return null;
        } else {
          return curNode;
        }
      };
      this.insert = function(cur, ele) {
        var after, curNode;
        ele = new Node(ele);
        curNode = this.find(cur);
        after = curNode.next;
        curNode.next = ele;
        ele.next = after;
        return true;
      };
      this.remove = function(ele) {
        var prev;
        prev = this.findPrevious(ele);
        return prev.next = ele.next;
      };
      this.display = function() {
        var curNode, results;
        curNode = this.head;
        results = [];
        while (curNode.next !== null) {
          console.log(curNode.element);
          results.push(curNode = curNode.next);
        }
        return results;
      };
    }

    return Link;

  })();

}).call(this);
