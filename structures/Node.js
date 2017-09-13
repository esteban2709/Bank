class Node {
	constructor(info)
	{
		this.info = info;
	}
/*	constructor(info,nextNode)
	{
		this.info = info;
		this.nextNode = nextNode;
	}
*/

	getInfo() {
		return this.info;
	}

	setInfo(info) {
		this.info = info;
	}

	getNextNode() {
		return this.nextNode;
	}

	setNextNode ( nextNode) {
		this.nextNode = nextNode
	}
}
