// Create a class to create a node/object
class Node  {
    constructor(data){
        this.data = data;
        this.next = null;
    };
};

// Create a class to create a linked-list
class LinkedList {
    constructor() {
        this.head = null;
    };

    // Create a function that tells us the size of the list
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        };
        return count;
    };

    //Create a function to get the last node in the list
    getLast() {
        let lastNode = this.head;
        if(lastNode) {
            while(lastNode.next){
                lastNode = lastNode.next;;
            };
        };
        return lastNode;
    };

    // Create a function to determine whether a list is empty
    isEmpty() {
        return this.size() === 0;
    }
};

// Create nodes
let nodeA = new Node('A');
let nodeB = new Node('B');

// Change the nodeA 'next' property to nodeB
nodeA.next = nodeB

let list = new LinkedList()

// Set nodeA to be the linkedlist head
list.head = nodeA

//Create nodeC
let nodeC = new Node('C');

nodeB.next = nodeC;

console.log(nodeA)
console.log(nodeB)

// let currNode = list.head
// let depth = 902

// for (let i = 0; i < depth; i++) {
//     currNode = currNode.next
// }

// console.log(currNode)

console.log(list)

console.log('size:', list.size())
console.log('last node:', list.getLast())
console.log('Is empty:', list.isEmpty())