/**
 * 
 */
class DoubleList {
	constructor() {
		this.head = null;
	}
	
	getHead(){
		return head;
	}
	
	setHead(head){
		this.head = head;
	}
	
	isEmpty(){
		return this.head == null;
	}
	
	add(info){
		if (this.head == null) {
			head = new DoubleNode(info);
		}else{
			var aux = head;
			while (aux.getNextNode() != null) {
				aux = aux.getNextNode();
			}
			var newDoubleNode = new DoubleNode(info);
			aux.setNextNode(newDoubleNode);
			newDoubleNode.setBackNode(aux);
		}
	}
}