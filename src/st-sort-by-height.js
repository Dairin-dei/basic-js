import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let arrN = arr.filter(item => item!=-1);
  arrN.sort((a,b)=>a-b);
  let arrIndex = [];
  arr.forEach(function(item,index,arr){
    if (item === -1){
      arrIndex.push(index);
    }
  });

  arrIndex.forEach(function(item,index,arrIndex){
    arrN.splice(item,0,-1)  
  })

  return arrN;
}
