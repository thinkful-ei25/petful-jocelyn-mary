'use strict';
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
  }

  enQueue(data){
    if(!this.first){
      this.first = new Node(data);
    }
    else{
      let node = this.first;
      while(node.next !== null){
        node = node.next;
      }
      node.next = new Node(data);
    }
  }

  deQueue(){
    if(!this.first){
      console.log('stack is empty');
    }
    else{
      let node = this.first;
      this.first = node.next;
      return node.data;
    }
  }

  peek(){
    return this.first ? this.first.data : undefined; 
  }

}

module.exports = {Node, Queue}; 
