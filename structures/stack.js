class Stack {

	constructor()
	{
		this.head = null;
	}


	add (info) {
		if (head == null) {
			this.head = new Node(info);
		}else {
			var  aux = head;
			while (aux.getNextNode() != null) {
				aux = aux.getNextNode();
			}
			aux.setNextNode(new Node(info));
			/*probando*/
		}
	}
}
