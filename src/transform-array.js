import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {

  if ((arr===null)||(!Array.isArray(arr))){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  if (arr.length === 0) {
    return []
  }

  let arrChecking = ['--discard-next',
  '--discard-prev',
  '--double-next',
  '--double-prev'];

  let check = arr.filter(function(item) {
  return arrChecking.includes(item)
  });

  if (check.length === 0){
    return arr};

  let arrTransformed = [];

  arr.forEach((item, index, array) =>{
 
    let found = false;
    let discarded1=null;
    let discarded2=null;
    let doubled1=null;
    let doubled2=null;
    

    if (!arrChecking.includes(item)){
      if ((index>0) && (array[index-1] === '--discard-next')){

        found = true;
        discarded2 = index;
      };

      if ((index>0) && (array[index-1] === '--double-next')){

        doubled2 = index;
        found = true;
        arrTransformed.push(item);
        arrTransformed.push(item);   

      };  

      if ((index < array.length-1) && (array[index+1] === '--discard-prev')){
        found = true;
        discarded1 = index;
        if (doubled2 === index){
          arrTransformed.pop();
        }
      };

      if ((index < array.length-1) && (array[index+1] === '--double-prev')){
     
        found = true;
        doubled1 = index;

        if (index != discarded1&&index != discarded2&&doubled2 != index){
        arrTransformed.push(item);
        arrTransformed.push(item);
        }else if(doubled2 === index){

          arrTransformed.push(item);
        }
      };   
      
      if (!arrChecking.includes(item) && !found){
         arrTransformed.push(item)
      }
    }else{
      if (!arrChecking.includes(item)){
        arrTransformed.push(item)
      }
    }
  });
  return arrTransformed
}
