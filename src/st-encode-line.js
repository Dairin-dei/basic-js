import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let pattern = "";
  let count = 0;
  let result = "";
  for (let i = 0; i < str.length; i++){
    
    if (pattern != str[i]){
      if (count != 0 ){
        result = result+(count == 1? "":String(count))+pattern;
        count = 0;
      }  
        pattern = str[i];
    };
    count +=1;
  };
  if (count != 0 ){
    result = result+(count == 1? "":String(count))+pattern;
  }

  return result;
}
