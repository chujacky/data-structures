var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //complexity time is O(1)

    var newNode = Node(value);
    // make the last node point to the new one if the list is not empty
    if (list.tail !== null) {
      var lastNode = this.tail;
      lastNode.next = newNode;
    }
    
    if ( this.head === null ) {
      this.head = newNode;
    }
    
    this.tail = newNode;

  };

  list.removeHead = function() {
    //complexity time is O(1)
    var firstNode = this.head;
    this.head = this.head.next;
    return firstNode.value;
    
  };

  list.contains = function(target) {
    //complexity time is O(n)
    // visit each node and compair the value to target
    var pointer = this.head;
    while ( pointer !== null ) {
      if ( pointer.value === target ) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  };

  return list;
  
  
};

var Node = function(value) {
  //complexity time is O(1)
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
