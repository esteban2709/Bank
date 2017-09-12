'use strict'
 function Stack() {

  var head = new Node();

  function Stack() {
    this.head = null;
  }

  this.add = function (var info) {
    if (head == null) {
      this.head = new Node(info);
    }else {
    var  aux = head;
      while (aux.getNextNode() != null) {
        aux = aux.getNextNode();
      }
      aux.setNextNode(new Node(info));
    }
  }




}
