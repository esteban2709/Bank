function Node() {
  var info ;
  var nextNode = new Node();

    function Node(var info) {
      this.info = info;
    }

    function Node(var info,var nextNode) {
      this.info= info;
      this.nextNode = nextNode;
    }

    this.getInfo = function () {
      return this.info;
    }

    this.setInfo = function ( var info) {
      this.info = info;
    }

    this.getNextNode = function () {
      return this.nextNode;
    }

    this.setNextNode = function (var nextNode) {
      this.nextNode = nextNode
    }
}
