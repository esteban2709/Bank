/**
 * 
 */
class DoubleNode {
  constructor(info) {
    this.info= info;
    this.backNode= backNode;
    this.nextNode = nextNode;
  }
  constructor(info,backNode,nextNode){
    this.info = info;
    this.backNode = backNode;
    this.nextNode = nextNode;
  }

  getInfo(){
    return info;
  }
  setInfo(info){
    this.info = info;
  }
  getBackNode(){
    return backNode;
  }
  setBackNode(backNode){
    this.backNode = backNode;
  }
  getNextNode(){
    return nextNode;
  }
  setNextNode(nextNode){
    this.nextNode = nextNode;
  }
}