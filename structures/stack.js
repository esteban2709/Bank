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
			head = new Node(info);
			head.setNext(aux);
		}
	}
	print(){
		var aux = head;
		while (aux != null) {
			console.log(aux);
			aux = aux.getNextNode();

		}
	}
	
	remove(){
		if (head != null) {
			var aux = head;
			head = head.getNextNode();
			return aux;
		}
	}
}
