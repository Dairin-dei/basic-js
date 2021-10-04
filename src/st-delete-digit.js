import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = String(n);
  let curWord = '';
  let result = [];
  for (let i = 0; i<str.length; i++){
    if (i == 0){
      curWord = str.slice(1);
    }else{
      curWord = str.slice(0,i)+str.slice(i+1)
    };
    result.push(curWord);
  };

  result = result.map(item => Number(item));

  return Math.max.apply(null,result);
}
