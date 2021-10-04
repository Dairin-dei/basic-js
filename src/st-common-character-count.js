import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let count = 0;
 
  for (let i = 0; i<s1.length; i++){
    let found =s2.indexOf(s1[i]); 
    if (found>=0){
      count+=1;
      s2 = (found == 0 ? s2.slice(1) : s2.slice(0,found)+s2.slice(found+1));
    }
  }

  return count
}
