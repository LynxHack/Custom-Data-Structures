export class trie{
  constructor(){
    this.root = new this.trieNode('root');
  }
  
  trieNode(id){
  	this.isLeaf = false;
  	this.id = id;
  	this.child = {} // hash table of children //ex {'a': TrieNode}
  }
  
  add(str){
  	var curr = this.root;
  // check if node has child value that matches
    for(let i = 0; i < str.length; i++){
    	if(curr.child[str[i]]){
    		curr = curr.child[str[i]]; //move to the next node
    	}
    	else{ 
    		//add in a new child
    		curr.child[str[i]] = new this.trieNode(str[i]);
  	  	curr = curr.child[str[i]];
    	}
  
    }
    //set terminal node to indicate is proper ending
    curr.isLeaf = true;
  }
  
  
  // Trie Remove
  
  remove(str){
  	var curr = this.root;
  	var nodestack = [];
  	if(!str.length){return;}
  	for(let i = 0; i < str.length; i++){
  		if(!curr.child[str[i]]){return;} //terminate if not exist
      nodestack.push(curr.child[str[i]]);
  		curr = curr.child[str[i]]; //go to the found node
      
    }
    var removeFlag = true;
    var prevNode = null;
  
    while(nodestack.length){
      var baseNode = nodestack[nodestack.length-1];
      var numChild = Object.keys(baseNode.child).length;
      if(prevNode){delete baseNode.child[prevNode.id]; prevNode = null}
      if(numChild){removeFlag = false;} //don't remove anything
      if(!removeFlag){ //if remove flag is false;
      	//since there are children, only set to false
      	baseNode.isLeaf = false;
      	nodestack.pop();
      }
      else{ //set for removal
      	prevNode = nodestack.pop();
      }
    }
  }
  
  
  // Trie Search
  
  search(str) { 
  	var curr = this.root;
    for(let i = 0; i < str.length; i++){
  		if(!curr.child[str[i]]){
  			return false; //not found;
      }
      // if reached end but last node is not the leaf
      else if(i === str.length - 1 && !curr.child[str[i]].isLeaf){
      	return false;
      } 
      else{
      	curr = curr.child[str[i]];
      }
  	}
  	return true;
  }
}

