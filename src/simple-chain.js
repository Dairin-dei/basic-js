import { NotImplementedError } from '../extensions/index.js';

export default {

    chain:[],

  getLength() {
    return(this.chain.length)
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if ((typeof position != 'number') |
     (Math.floor(position) != position) |
     (this.chain.length < position) |
     (position<=0)){
	  this.chain = [];
       throw new Error("You can't remove incorrect link!");
     };
     this.chain.splice(position-1,1) 
     return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    for (let i = 0; i < this.chain.length; i++){
      result += '( '+this.chain[i]+' )~~'
    }
    this.chain = [];
    result = result.slice(0,result.length-2);
    return result;
  }
};
